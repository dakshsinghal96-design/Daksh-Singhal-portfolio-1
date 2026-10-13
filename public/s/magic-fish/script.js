// script.js — app entry / orchestrator.
// Boots camera + MediaPipe, owns the IDLE->FOLLOW->ORBIT->DISPERSE state machine,
// and runs the delta-time requestAnimationFrame loop.

import { initCamera, CameraError } from "./camera.js";
import { FishSchool } from "./fish.js";
import { ParticlePool } from "./particle.js";
import { createCircleDetector } from "./orbit.js";
import { TAU, lerp, clamp } from "./utils.js";

const WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm";
const DEBUG = new URLSearchParams(location.search).has("debug");

// --- DOM ---
const video = document.getElementById("cam");
const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d", { alpha: true });
const overlay = document.getElementById("startOverlay");
const startBtn = document.getElementById("startBtn");
const mouseBtn = document.getElementById("mouseBtn");
const statusEl = document.getElementById("status");
const hud = document.getElementById("hud");

// --- Systems ---
const projector = new Projector();
const school = new FishSchool(canvas);
const pool = new ParticlePool();
const circle = createCircleDetector();
const mouse = new MouseInput(canvas);
const oneFinger = new HoldGesture({ M: 8, enter: 6, exit: 2 });
const openPalmG = new HoldGesture({ M: 8, enter: 6, exit: 2 });

let hand = null, face = null, cam = null;
let inputMode = "idle";
let activeHand = null, activeFace = null;
let started = false;

// --- State machine ---
const State = { IDLE: "IDLE", FOLLOW: "FOLLOW", ORBIT: "ORBIT", DISPERSE: "DISPERSE" };
const COOLDOWN = 600;   // ms after a transition before another can fire
const MIN_DWELL = 800;  // ms a scene must be shown before it can be left
let state = State.IDLE;
let lastSceneEnter = 0;
let cooldownUntil = 0;
let pendingOrbitDir = "CW";
let handLostTimer = 0;

// --- Loop bookkeeping ---
let CW = 0, CH = 0;
let raf = 0, last = 0, time = 0, fps = 60;

/* ================================================================== *
 * Boot
 * ================================================================== */

startBtn.addEventListener("click", startCamera, { once: false });
mouseBtn.addEventListener("click", startMouseMode, { once: false });
if (DEBUG) hud.hidden = false;

async function startCamera() {
  if (started) return;
  startBtn.disabled = true;
  mouseBtn.disabled = true;
  setStatus("Starting camera…");
  try {
    cam = await initCamera(video);
  } catch (err) {
    showError(err instanceof CameraError ? err.message : "Could not start the camera.");
    startBtn.disabled = false;
    mouseBtn.disabled = false;
    return;
  }

  setStatus("Loading AI models… (first run downloads a few MB)");
  try {
    const [{ FilesetResolver }, handModule, faceModule] = await Promise.all([
      import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/vision_bundle.mjs"),
      import("./handTracker.js"),
      import("./faceTracker.js"),
    ]);
    const vision = await FilesetResolver.forVisionTasks(WASM_URL);
    [hand, face] = await Promise.all([
      handModule.createHandTracker(vision),
      faceModule.createFaceTracker(vision),
    ]);
  } catch (err) {
    showError("Failed to load MediaPipe. Check your connection, reload, or use mouse mode. " + (err?.message || ""));
    startBtn.disabled = false;
    mouseBtn.disabled = false;
    return;
  }

  beginExperience("camera");
}

function startMouseMode() {
  if (started) return;
  startBtn.disabled = true;
  mouseBtn.disabled = true;
  beginExperience("mouse");
  mouse.prime(CW * 0.5, CH * 0.52);
  setStatus("Move your mouse or finger to guide the fish. Quick tap/click again to burst.");
  window.setTimeout(clearStatus, 2600);
}

function beginExperience(mode) {
  started = true;
  inputMode = mode;
  clearStatus();
  overlay.classList.add("hidden");
  document.body.classList.add("running");
  document.body.classList.toggle("mouse-mode", mode === "mouse");
  mouse.enable();
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", () => setTimeout(resize, 250));

  // Debug-only automation hooks (inert unless ?debug), for BOTH input modes.
  // Used by the smoke tests to inject synthetic gestures and inspect state.
  // hand/face are null in mouse mode, so the inject helpers are null-safe.
  if (DEBUG) {
    window.__fish = {
      get hand() { return hand; },
      get face() { return face; },
      mouse, school, pool,
      get state() { return state; },
      injectHand: (o) => hand?.setOverride(o),
      injectFace: (o) => face?.setOverride(o),
      injectMouse: (o) => mouse.setOverride(o),
    };
  }

  last = performance.now();
  raf = requestAnimationFrame(frame);
}

/* ================================================================== *
 * Main loop
 * ================================================================== */

function frame(now) {
  raf = requestAnimationFrame(frame);

  let dt = (now - last) / 1000;
  last = now;
  dt = Math.min(dt, 0.05); // clamp tab-switch stalls
  time += dt;
  fps = lerp(fps, 1 / Math.max(dt, 1e-4), 0.1);

  // 1) Detection / input refresh.
  if (inputMode === "camera") {
    hand.detect(video, now, projector);
    face.detect(video, now, projector);
  }
  mouse.step(now, CW, CH, inputMode);
  const input = getActiveInput(now);
  activeHand = input.hand;
  activeFace = input.face;

  // 2) Gestures + state transitions.
  stepState(dt, now, activeHand, activeFace);

  // 3) Entity updates.
  const mode =
    state === State.FOLLOW ? "FOLLOW" : state === State.ORBIT ? "ORBIT" : "IDLE";
  const target = activeHand.present ? activeHand.indexTip : null;
  const faceCenter = activeFace.present ? activeFace.center : null;
  school.update(dt, time, { mode, target, faceCenter });
  pool.update(dt);

  // 4) Render (transparent clear -> camera shows through).
  ctx.clearRect(0, 0, CW, CH);
  if (activeHand === mouse) drawMouseGuide(activeHand, activeFace);
  school.draw(ctx);
  pool.draw(ctx);
  if (DEBUG) drawDebug(activeHand, activeFace);
}

function getActiveInput(now) {
  if (inputMode === "mouse") return { hand: mouse, face: mouse.face };
  if (inputMode === "camera" && mouse.isActive(now)) {
    return { hand: mouse, face: face.present ? face : mouse.face };
  }
  return { hand, face };
}

function stepState(dt, now, sourceHand, sourceFace) {
  const pointerLike = sourceHand === mouse;
  const palmRose = openPalmG.sample(sourceHand.present && sourceHand.openPalm, sourceHand.detectId);
  const fingerRose = oneFinger.sample(sourceHand.present && sourceHand.oneFingerUp, sourceHand.detectId);

  // Circle gesture only tracked while following, and only with a face reference.
  let circleDir = null;
  if (state === State.FOLLOW && sourceHand.present && sourceFace.present) {
    circleDir = circle.update(sourceHand.indexTip, sourceFace.center, sourceFace.radius, now);
  }

  // Priority: open palm > circle > one finger.
  if (palmRose && (state === State.FOLLOW || state === State.ORBIT)) {
    requestTransition(State.DISPERSE, now);
  } else if (circleDir && state === State.FOLLOW && sourceFace.present) {
    pendingOrbitDir = circleDir;
    requestTransition(State.ORBIT, now);
  } else if ((fingerRose || (pointerLike && sourceHand.present)) && state === State.IDLE) {
    requestTransition(State.FOLLOW, now);
  }

  // Lose the hand for a grace window while following -> back to idle.
  if (state === State.FOLLOW) {
    handLostTimer = sourceHand.present ? 0 : handLostTimer + dt;
    if (handLostTimer > 0.8) enter(State.IDLE, now);
  }

  // DISPERSE auto-returns to IDLE once the burst has fully faded.
  if (state === State.DISPERSE && pool.activeCount === 0) {
    enter(State.IDLE, now);
  }
}

// Gated transition (respects cooldown + minimum dwell).
function requestTransition(target, now) {
  if (target === state) return false;
  if (now < cooldownUntil) return false;
  if (now - lastSceneEnter < MIN_DWELL) return false;
  enter(target, now);
  return true;
}

// Apply a state change + its side effects. Also used for ungated auto-returns.
function enter(target, now) {
  // Exit / enter side effects.
  if (target === State.DISPERSE) {
    school.toParticles(pool);
  } else if (target === State.ORBIT) {
    if (!activeFace?.present) return; // need a face-like anchor to orbit
    school.beginOrbit(activeFace.center, activeFace.radius, pendingOrbitDir);
  } else if (target === State.IDLE) {
    school.clear();
  }

  state = target;
  lastSceneEnter = now;
  cooldownUntil = now + COOLDOWN;
  handLostTimer = 0;

  // Clear detector state so stale buffers can't immediately re-fire.
  oneFinger.reset();
  openPalmG.reset();
  circle.reset();
  activeHand?.resetSmoothing?.();
}

/* ================================================================== *
 * Sizing / projection
 * ================================================================== */

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  CW = canvas.clientWidth;
  CH = canvas.clientHeight;
  canvas.width = Math.round(CW * dpr);
  canvas.height = Math.round(CH * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  projector.update(video.videoWidth, video.videoHeight, CW, CH);
  mouse.updateFace(CW, CH);
}

// Maps normalized (raw) landmark coords -> canvas CSS px, replicating the
// video's object-fit:cover crop AND the CSS horizontal mirror.
function Projector() {
  this.cw = 0; this.ch = 0;
  this.dispW = 0; this.dispH = 0;
  this.offX = 0; this.offY = 0;
}
Projector.prototype.update = function (vw, vh, cw, ch) {
  this.cw = cw; this.ch = ch;
  if (!vw || !vh) return;
  const s = Math.max(cw / vw, ch / vh); // cover
  this.dispW = vw * s;
  this.dispH = vh * s;
  this.offX = (cw - this.dispW) / 2;
  this.offY = (ch - this.dispH) / 2;
};
Projector.prototype.toCanvas = function (nx, ny) {
  const x = nx * this.dispW + this.offX;
  const y = ny * this.dispH + this.offY;
  return { x: this.cw - x, y }; // mirror to match CSS scaleX(-1)
};

/* ================================================================== *
 * Mouse / touch input fallback
 * ================================================================== */

function MouseInput(canvasEl) {
  this.canvas = canvasEl;
  this.enabled = false;
  this._present = false;
  this._oneFingerUp = false;
  this._openPalm = false;
  this._detectId = 0;
  this._lastActive = -Infinity;
  this._burstUntil = 0;
  this._cursorTimer = 0;
  this._override = null;
  this._activePointerId = null;
  this._pointerDownAt = 0;
  this._pointerDownPoint = null;
  this._pointerMoved = false;
  this._tapCanBurst = false;
  this._hadUserPointer = false;
  this._indexTip = { x: 0, y: 0 };
  this._rawTip = { x: 0, y: 0 };
  this.face = {
    present: true,
    center: { x: 0, y: 0 },
    radius: 90,
    detectId: 0,
  };

  this._move = (ev) => this._onPointerMove(ev);
  this._down = (ev) => this._onPointerDown(ev);
  this._up = (ev) => this._onPointerUp(ev);
  this._cancel = (ev) => this._onPointerCancel(ev);
  this._key = (ev) => this._onKeyDown(ev);
}

MouseInput.prototype.enable = function () {
  if (this.enabled) return;
  this.enabled = true;
  window.addEventListener("pointermove", this._move, { passive: true });
  window.addEventListener("pointerdown", this._down, { passive: false });
  window.addEventListener("pointerup", this._up, { passive: false });
  window.addEventListener("pointercancel", this._cancel, { passive: true });
  window.addEventListener("keydown", this._key);
};

MouseInput.prototype.step = function (now, cw, ch, mode) {
  this.updateFace(cw, ch);
  if (!this.enabled) return;
  if (now > this._burstUntil) this._openPalm = false;
  if (mode === "camera" && this._present && now - this._lastActive > 1600) {
    this._present = false;
    this._oneFingerUp = false;
  }
  if (this._present) this._detectId++;
};

MouseInput.prototype.updateFace = function (cw, ch) {
  this.face.center.x = cw * 0.5;
  this.face.center.y = ch * 0.46;
  this.face.radius = clamp(Math.min(cw || 720, ch || 720) * 0.17, 58, 150);
  this.face.detectId++;
};

MouseInput.prototype.prime = function (x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) return;
  this._indexTip.x = x;
  this._indexTip.y = y;
  this._rawTip.x = x;
  this._rawTip.y = y;
  this._present = true;
  this._oneFingerUp = true;
  this._lastActive = performance.now();
  this._detectId++;
};

MouseInput.prototype.isActive = function (now) {
  return this.enabled && this._present && now - this._lastActive < 1400;
};

MouseInput.prototype.setOverride = function (o) {
  this._override = o;
};

MouseInput.prototype.resetSmoothing = function () {};

MouseInput.prototype._onPointerMove = function (ev) {
  if (!this.enabled) return;
  if (this._activePointerId !== null && ev.pointerId !== this._activePointerId) return;
  this._setPoint(ev.clientX, ev.clientY);
  this._hadUserPointer = true;
  if (this._pointerDownPoint) {
    const moved = Math.hypot(
      ev.clientX - this._pointerDownPoint.x,
      ev.clientY - this._pointerDownPoint.y
    );
    if (moved > 12) this._pointerMoved = true;
  }
  this._markPointerActive();
};

MouseInput.prototype._onPointerDown = function (ev) {
  if (!this.enabled) return;
  if (this._activePointerId !== null && ev.pointerId !== this._activePointerId) return;
  ev.preventDefault();
  this._activePointerId = ev.pointerId;
  this._pointerDownAt = performance.now();
  this._pointerDownPoint = { x: ev.clientX, y: ev.clientY };
  this._pointerMoved = false;
  this._tapCanBurst = this._hadUserPointer && this._present && this._pointerDownAt - this._lastActive < 1500;
  this._setPoint(ev.clientX, ev.clientY);
  this._markPointerActive();
};

MouseInput.prototype._onPointerUp = function (ev) {
  if (!this.enabled) return;
  if (this._activePointerId !== null && ev.pointerId !== this._activePointerId) return;
  ev.preventDefault();
  this._setPoint(ev.clientX, ev.clientY);
  this._markPointerActive();
  const elapsed = performance.now() - this._pointerDownAt;
  const down = this._pointerDownPoint;
  const moved = this._pointerMoved || (down && Math.hypot(ev.clientX - down.x, ev.clientY - down.y) > 12);
  if (this._tapCanBurst && elapsed < 260 && !moved) this._triggerBurst();
  this._hadUserPointer = true;
  this._activePointerId = null;
  this._pointerDownPoint = null;
  this._tapCanBurst = false;
};

MouseInput.prototype._onPointerCancel = function (ev) {
  if (this._activePointerId !== null && ev.pointerId !== this._activePointerId) return;
  this._activePointerId = null;
  this._pointerDownPoint = null;
  this._tapCanBurst = false;
};

MouseInput.prototype._onKeyDown = function (ev) {
  if (!this.enabled) return;
  if (ev.code === "Space") {
    ev.preventDefault();
    this._triggerBurst();
  }
};

MouseInput.prototype._setPoint = function (clientX, clientY) {
  const rect = this.canvas.getBoundingClientRect();
  const x = clamp(clientX - rect.left, 0, rect.width || window.innerWidth);
  const y = clamp(clientY - rect.top, 0, rect.height || window.innerHeight);
  this._indexTip.x = x;
  this._indexTip.y = y;
  this._rawTip.x = x;
  this._rawTip.y = y;
  this._present = true;
  this._oneFingerUp = true;
  this._detectId++;
};

MouseInput.prototype._markPointerActive = function () {
  this._lastActive = performance.now();
  document.body.classList.add("mouse-active");
  window.clearTimeout(this._cursorTimer);
  this._cursorTimer = window.setTimeout(() => {
    document.body.classList.remove("mouse-active");
  }, 1500);
};

MouseInput.prototype._triggerBurst = function () {
  this._openPalm = true;
  this._burstUntil = performance.now() + 320;
  this._detectId++;
};

Object.defineProperties(MouseInput.prototype, {
  present: { get() { return this._override ? !!this._override.present : this._present; } },
  oneFingerUp: { get() { return this._override ? !!this._override.oneFingerUp : this._oneFingerUp; } },
  openPalm: { get() { return this._override ? !!this._override.openPalm : this._openPalm; } },
  indexTip: { get() { return this._override?.indexTip || this._indexTip; } },
  rawTip: { get() { return this._rawTip; } },
  detectId: { get() { return this._detectId; } },
  landmarksPx: { get() { return null; } },
});

function drawMouseGuide(sourceHand, sourceFace) {
  ctx.save();
  if (sourceFace?.present) {
    ctx.setLineDash([8, 10]);
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "rgba(154, 107, 255, 0.32)";
    ctx.beginPath();
    ctx.arc(sourceFace.center.x, sourceFace.center.y, sourceFace.radius, 0, TAU);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(154, 107, 255, 0.16)";
    ctx.beginPath();
    ctx.arc(sourceFace.center.x, sourceFace.center.y, 4, 0, TAU);
    ctx.fill();
  }
  if (sourceHand?.present) {
    const p = sourceHand.indexTip;
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = "rgba(56, 225, 214, 0.18)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 18, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "rgba(255, 209, 102, 0.9)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
}

/* ================================================================== *
 * Debounced hold-gesture (N-of-M voting + hysteresis, edge-triggered)
 * ================================================================== */

function HoldGesture({ M = 8, enter = 6, exit = 2 } = {}) {
  this.M = M; this.enterN = enter; this.exitN = exit;
  this.buf = []; this.active = false; this.lastId = -1; this.sum = 0;
}
// Push a sample only when a NEW detection arrived (id changed).
// Returns true on the rising IDLE->ACTIVE edge only.
HoldGesture.prototype.sample = function (value, id) {
  if (id === this.lastId) return false;
  this.lastId = id;
  const v = value ? 1 : 0;
  this.buf.push(v); this.sum += v;
  if (this.buf.length > this.M) this.sum -= this.buf.shift();
  let rose = false;
  if (!this.active && this.sum >= this.enterN) { this.active = true; rose = true; }
  else if (this.active && this.sum <= this.exitN) { this.active = false; }
  return rose;
};
HoldGesture.prototype.reset = function () {
  this.buf.length = 0; this.sum = 0; this.active = false;
};
Object.defineProperty(HoldGesture.prototype, "score", {
  get() { return this.sum; },
});

/* ================================================================== *
 * Debug overlay
 * ================================================================== */

function drawDebug(sourceHand, sourceFace) {
  const hand = sourceHand;
  const face = sourceFace;
  if (sourceHand.landmarksPx) {
    ctx.fillStyle = "rgba(56,225,214,0.85)";
    for (const p of sourceHand.landmarksPx) {
      ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, TAU); ctx.fill();
    }
  }
  if (sourceHand.present) {
    ctx.fillStyle = "#ffd166";
    ctx.beginPath(); ctx.arc(sourceHand.indexTip.x, sourceHand.indexTip.y, 7, 0, TAU); ctx.fill();
  }
  if (sourceFace.present) {
    ctx.strokeStyle = "rgba(154,107,255,0.85)";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(sourceFace.center.x, sourceFace.center.y, sourceFace.radius, 0, TAU); ctx.stroke();
    ctx.fillStyle = "#9a6bff";
    ctx.beginPath(); ctx.arc(sourceFace.center.x, sourceFace.center.y, 3, 0, TAU); ctx.fill();
  }
  const pr = circle.progress();
  hud.textContent =
    `state    ${state}\n` +
    `fps      ${fps.toFixed(0)}\n` +
    `fish ${String(school.count).padStart(2)}  particles ${pool.activeCount}\n` +
    `hand ${hand.present ? "Y" : "·"}  1finger:${oneFinger.score}/8  palm:${openPalmG.score}/8\n` +
    `face ${face.present ? "Y" : "·"}  r:${(face.radius || 0).toFixed(0)}\n` +
    `circle   ${(pr.acc / Math.PI).toFixed(2)}π  sectors:${pr.sectors}/8  frames:${pr.frames}`;
}

/* ================================================================== *
 * Status helpers
 * ================================================================== */

function setStatus(msg) {
  statusEl.textContent = msg;
  statusEl.classList.remove("error");
  statusEl.classList.add("show");
}
function showError(msg) {
  statusEl.textContent = msg;
  statusEl.classList.add("show", "error");
}
function clearStatus() {
  statusEl.classList.remove("show", "error");
}
