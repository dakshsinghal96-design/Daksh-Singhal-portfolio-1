// fish.js — Fish (individual) + FishSchool (manager).
// Fish follow a target with steering behaviours in FOLLOW mode, orbit the face in
// ORBIT mode (driven by orbit.js), and dissolve into particles on DISPERSE.
// Rendering is fully procedural on Canvas: body, wagging tail, blinking eye, glow.

import {
  Vec, TAU, rand, randInt, clamp, map, lerp, angleLerp, wrapAngle,
  pickFishColor, hsla,
} from "./utils.js";
import { assignOrbit, updateOrbit } from "./orbit.js";

export const MAX_FISH = 20;
const SPAWN_INTERVAL_MS = 120;

/* ================================================================== *
 * Fish
 * ================================================================== */

export class Fish {
  constructor(x, y, canvasW, canvasH) {
    this.pos = Vec.make(x, y);
    this.vel = Vec.make(rand(-1, 1), rand(-1, 1));
    this.heading = Math.atan2(this.vel.y, this.vel.x);

    this.size = rand(15, 34);                         // body length in px
    this.mass = map(this.size, 15, 34, 0.7, 1.7);     // big fish feel heavier
    this.maxSpeed = map(this.size, 15, 34, 8.2, 4.6);
    this.maxForce = map(this.size, 15, 34, 0.62, 0.34);
    this.color = pickFishColor();
    this.bodyScale = rand(1.02, 1.22);
    this.depthScale = rand(0.48, 0.62);
    this.pattern = randInt(0, 2); // 0 bars, 1 speckles, 2 lateral stripe
    this.stripeCount = randInt(3, 6);
    this.markPhase = rand(0, TAU);

    // Wander
    this.wanderAngle = rand(0, TAU);
    this.followPhase = rand(0, TAU);
    this.followSpin = rand(-1.1, 1.1) || 0.65;
    this.followRadius = rand(this.size * 0.8, this.size * 2.35);

    // Tail wag
    this.tailPhase = rand(0, TAU);
    this.tailAmp = rand(0.35, 0.6);
    this.finPhase = rand(0, TAU);
    this.speedHint = 0;

    // Vertical float bob
    this.floatPhase = rand(0, TAU);
    this.floatFreq = rand(1.4, 2.6);
    this.floatAmp = rand(2.5, 6);

    // Eye blink
    this.blink = 1;                 // 1 = open, ~0.08 = closed
    this.blinkTimer = rand(1.5, 5);
    this._blinking = 0;             // remaining blink time

    // Orbit state (filled by assignOrbit)
    this.orbit = null;

    // Spawn "dart in" fade
    this.age = 0;

    this._w = canvasW; this._h = canvasH;
  }

  /* --- cosmetic animation, runs every frame in every live mode --- */
  animate(dt) {
    this.age += dt;
    const spd = this.speedHint;
    this.tailPhase += dt * (7 + spd * 0.06) * (1 + this.tailAmp);
    this.finPhase += dt * (3.2 + spd * 0.014);
    this.followPhase += dt * this.followSpin;
    this.floatPhase += dt * this.floatFreq;

    // Blink state machine.
    if (this._blinking > 0) {
      this._blinking -= dt;
      const t = clamp(this._blinking / 0.12, 0, 1); // 120 ms blink
      // ease closed then open: use a small triangle around mid-blink
      this.blink = t > 0.5 ? map(t, 1, 0.5, 1, 0.08) : map(t, 0.5, 0, 0.08, 1);
      if (this._blinking <= 0) { this.blink = 1; this.blinkTimer = rand(2.5, 6); }
    } else {
      this.blinkTimer -= dt;
      if (this.blinkTimer <= 0) this._blinking = 0.12;
    }
  }

  /* --- FOLLOW steering toward `target`, avoiding `school` neighbours --- */
  steer(dt, target, school) {
    const steer = Vec.make(0, 0);

    // 1) Seek with arrival slowdown. Each fish aims for a small moving offset
    // around the fingertip so the school feels like it is following, not stacking.
    if (target) {
      const followTarget = {
        x: target.x + Math.cos(this.followPhase) * this.followRadius,
        y: target.y + Math.sin(this.followPhase * 0.83 + this.markPhase) * this.followRadius * 0.58,
      };
      const toTarget = Vec.sub(followTarget, this.pos);
      const d = Vec.len(toTarget);
      const slowR = 170;
      const desiredSpeed = this.maxSpeed * clamp(map(d, 28, slowR, 0.28, 1), 0.28, 1);
      const desired = Vec.scale(Vec.norm(toTarget), desiredSpeed);
      steer.x += desired.x - this.vel.x;
      steer.y += desired.y - this.vel.y;

      if (d < slowR) {
        const tangent = { x: -toTarget.y / (d || 1), y: toTarget.x / (d || 1) };
        const orbitNudge = (1 - d / slowR) * this.maxForce * 0.34 * Math.sign(this.followSpin);
        steer.x += tangent.x * orbitNudge;
        steer.y += tangent.y * orbitNudge;
      }
    }

    // 2) Wander for organic drift.
    this.wanderAngle += rand(-0.35, 0.35);
    const wStr = this.maxForce * 0.35;
    steer.x += Math.cos(this.wanderAngle) * wStr;
    steer.y += Math.sin(this.wanderAngle) * wStr;

    // 3) Light separation so fish don't stack on the fingertip.
    let sx = 0, sy = 0, n = 0;
    const desiredSep = this.size * 1.4;
    for (const o of school) {
      if (o === this) continue;
      const dx = this.pos.x - o.pos.x, dy = this.pos.y - o.pos.y;
      const dd = Math.hypot(dx, dy);
      if (dd > 0 && dd < desiredSep) {
        sx += dx / dd; sy += dy / dd; n++;
      }
    }
    if (n > 0) {
      const sep = Vec.clampMag({ x: sx / n, y: sy / n }, this.maxForce);
      steer.x += sep.x * 0.6;
      steer.y += sep.y * 0.6;
    }

    // Integrate (dt normalised to a 60 fps baseline).
    const f = Vec.clampMag(steer, this.maxForce);
    const k = dt * 60;
    this.vel.x += (f.x / this.mass) * k;
    this.vel.y += (f.y / this.mass) * k;
    const v = Vec.clampMag(this.vel, this.maxSpeed);
    // velocity low-pass for an easeOut feel
    this.vel.x = lerp(this.vel.x, v.x, 0.35);
    this.vel.y = lerp(this.vel.y, v.y, 0.35);
    this.pos.x += this.vel.x * k;
    this.pos.y += this.vel.y * k;

    this.speedHint = Vec.len(this.vel) * 60;

    // Heading eases toward velocity (frame-rate independent).
    const spd = Vec.len(this.vel);
    if (spd > 0.02) {
      const target = Math.atan2(this.vel.y, this.vel.x);
      this.heading = angleLerp(this.heading, target, 1 - Math.pow(0.0015, dt));
    }
  }

  /* --- drawing --- */
  draw(ctx) {
    const bob = Math.sin(this.floatPhase) * this.floatAmp;
    const fadeIn = clamp(this.age / 0.5, 0, 1);
    const L = this.size * this.bodyScale, H = this.size * this.depthScale;

    ctx.save();
    ctx.translate(this.pos.x, this.pos.y + bob);
    ctx.rotate(this.heading);
    // Keep the fish belly-down when swimming leftwards.
    if (Math.abs(wrapAngle(this.heading)) > Math.PI / 2) ctx.scale(1, -1);
    ctx.globalAlpha = fadeIn;

    drawWake(ctx, L, H, this.color, fadeIn, this.speedHint);

    // Soft glow (additive silhouette).
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = 0.12 * fadeIn;
    ctx.fillStyle = this.color.glow;
    bodyPath(ctx, L * 1.28, H * 1.5);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = fadeIn;

    // Tail (wags with tailPhase; amplitude scales with speed).
    const swing = Math.sin(this.tailPhase) * this.tailAmp * clamp(0.4 + this.speedHint / 400, 0.4, 1.2);
    drawForkTail(ctx, L, H, swing, this.color);

    const finWave = Math.sin(this.finPhase) * 0.16 + swing * 0.18;
    drawDorsalFin(ctx, L, H, finWave, this.color);
    drawPelvicFin(ctx, L, H, -finWave, this.color);

    // Body.
    const bodyGrad = ctx.createLinearGradient(0, -H, 0, H);
    bodyGrad.addColorStop(0, this.color.light);
    bodyGrad.addColorStop(0.42, this.color.fill);
    bodyGrad.addColorStop(1, this.color.belly);
    ctx.fillStyle = bodyGrad;
    bodyPath(ctx, L, H);
    ctx.fill();

    drawBodyPattern(ctx, L, H, this.color, this.pattern, this.stripeCount, this.markPhase);

    // Body outline and gill.
    ctx.lineWidth = Math.max(0.75, L * 0.028);
    ctx.strokeStyle = hsla(this.color.h, this.color.s, clamp(this.color.l - 24, 8, 80), 0.26);
    bodyPath(ctx, L, H);
    ctx.stroke();

    ctx.lineWidth = Math.max(0.75, L * 0.025);
    ctx.strokeStyle = hsla(this.color.h, this.color.s, clamp(this.color.l - 28, 8, 80), 0.38);
    ctx.beginPath();
    ctx.moveTo(L * 0.22, -H * 0.42);
    ctx.quadraticCurveTo(L * 0.12, 0, L * 0.2, H * 0.45);
    ctx.stroke();

    drawPectoralFin(ctx, L, H, finWave, this.color);

    // Upper highlight.
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = 0.2 * fadeIn;
    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.save();
    ctx.translate(0, -H * 0.28);
    bodyPath(ctx, L * 0.86, H * 0.5);
    ctx.fill();
    ctx.restore();
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = fadeIn;

    // Eye (near the nose, blinks).
    const eyeR = H * 0.2;
    const ex = L * 0.32, ey = -H * 0.25;
    ctx.fillStyle = hsla(this.color.accentH, 80, 72, 0.52);
    ctx.beginPath();
    ctx.ellipse(ex, ey, eyeR * 1.25, eyeR * 1.06 * this.blink, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#f7fbff";
    ctx.beginPath();
    ctx.ellipse(ex, ey, eyeR, eyeR * this.blink, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#0a1420";
    ctx.beginPath();
    ctx.ellipse(ex + eyeR * 0.25, ey, eyeR * 0.55, eyeR * 0.55 * this.blink, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.beginPath();
    ctx.arc(ex + eyeR * 0.42, ey - eyeR * 0.24, Math.max(1, eyeR * 0.18), 0, TAU);
    ctx.fill();

    // Tiny mouth line at the nose.
    ctx.lineWidth = Math.max(0.7, L * 0.018);
    ctx.strokeStyle = hsla(this.color.h, this.color.s, 12, 0.42);
    ctx.beginPath();
    ctx.moveTo(L * 0.47, H * 0.04);
    ctx.quadraticCurveTo(L * 0.53, H * 0.08, L * 0.55, H * 0.02);
    ctx.stroke();

    ctx.restore();
  }
}

// Rounded fish-body silhouette centred at origin, nose pointing +x.
function bodyPath(ctx, L, H) {
  const nose = L * 0.52, tail = -L * 0.46;
  ctx.beginPath();
  ctx.moveTo(nose, 0);
  ctx.bezierCurveTo(L * 0.42, -H * 0.62, L * 0.06, -H * 1.02, tail, -H * 0.42);
  ctx.quadraticCurveTo(-L * 0.52, -H * 0.1, tail, 0);
  ctx.quadraticCurveTo(-L * 0.52, H * 0.1, tail, H * 0.42);
  ctx.bezierCurveTo(L * 0.06, H * 1.02, L * 0.42, H * 0.62, nose, 0);
  ctx.closePath();
}

function drawWake(ctx, L, H, color, fade, speedHint) {
  const a = clamp(speedHint / 520, 0.05, 0.22) * fade;
  ctx.save();
  ctx.globalAlpha = a;
  ctx.lineWidth = Math.max(0.8, L * 0.025);
  ctx.strokeStyle = hsla(color.h, clamp(color.s - 10, 0, 100), clamp(color.l + 22, 0, 96), 0.55);
  for (let i = 0; i < 3; i++) {
    const y = (i - 1) * H * 0.22;
    ctx.beginPath();
    ctx.moveTo(-L * 0.52, y);
    ctx.bezierCurveTo(-L * 0.88, y - H * 0.15, -L * 1.16, y + H * 0.12, -L * 1.42, y);
    ctx.stroke();
  }
  ctx.restore();
}

function drawForkTail(ctx, L, H, swing, color) {
  ctx.save();
  ctx.translate(-L * 0.44, 0);
  ctx.rotate(swing);
  const grad = ctx.createLinearGradient(-L * 0.72, 0, L * 0.02, 0);
  grad.addColorStop(0, color.fin);
  grad.addColorStop(0.55, color.stripe);
  grad.addColorStop(1, color.dark);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-L * 0.22, -H * 0.18, -L * 0.48, -H * 0.88, -L * 0.7, -H * 0.72);
  ctx.quadraticCurveTo(-L * 0.57, -H * 0.22, -L * 0.24, 0);
  ctx.quadraticCurveTo(-L * 0.57, H * 0.22, -L * 0.7, H * 0.72);
  ctx.bezierCurveTo(-L * 0.48, H * 0.88, -L * 0.22, H * 0.18, 0, 0);
  ctx.closePath();
  ctx.fill();

  ctx.lineWidth = Math.max(0.65, L * 0.018);
  ctx.strokeStyle = hsla(color.h, color.s, clamp(color.l - 30, 8, 80), 0.28);
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(-L * 0.04, 0);
    ctx.lineTo(-L * 0.6, i * H * 0.26);
    ctx.stroke();
  }
  ctx.restore();
}

function drawDorsalFin(ctx, L, H, wave, color) {
  ctx.save();
  ctx.rotate(wave * 0.2);
  ctx.fillStyle = color.fin;
  ctx.beginPath();
  ctx.moveTo(-L * 0.25, -H * 0.52);
  ctx.bezierCurveTo(-L * 0.1, -H * 1.15, L * 0.12, -H * 0.95, L * 0.22, -H * 0.46);
  ctx.quadraticCurveTo(-L * 0.02, -H * 0.58, -L * 0.25, -H * 0.52);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPelvicFin(ctx, L, H, wave, color) {
  ctx.save();
  ctx.rotate(wave * 0.12);
  ctx.fillStyle = hsla(color.accentH, 80, 48, 0.5);
  ctx.beginPath();
  ctx.moveTo(-L * 0.1, H * 0.42);
  ctx.quadraticCurveTo(-L * 0.22, H * 0.9, -L * 0.02, H * 0.55);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPectoralFin(ctx, L, H, wave, color) {
  ctx.save();
  ctx.translate(L * 0.02, H * 0.16);
  ctx.rotate(0.42 + wave);
  ctx.fillStyle = hsla(color.accentH, 82, 55, 0.55);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-L * 0.2, H * 0.16, -L * 0.1, H * 0.48);
  ctx.quadraticCurveTo(L * 0.09, H * 0.23, 0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawBodyPattern(ctx, L, H, color, pattern, stripeCount, phase) {
  ctx.save();
  bodyPath(ctx, L, H);
  ctx.clip();

  const shade = ctx.createLinearGradient(0, -H, 0, H);
  shade.addColorStop(0, "rgba(255,255,255,0.14)");
  shade.addColorStop(0.58, "rgba(255,255,255,0)");
  shade.addColorStop(1, "rgba(0,0,0,0.18)");
  ctx.fillStyle = shade;
  ctx.fillRect(-L * 0.56, -H * 1.05, L * 1.12, H * 2.1);

  if (pattern === 0) {
    ctx.fillStyle = hsla(color.accentH, 88, 42, 0.2);
    for (let i = 0; i < stripeCount; i++) {
      const t = i / Math.max(1, stripeCount - 1);
      const x = lerp(-L * 0.28, L * 0.22, t);
      const w = L * 0.07;
      ctx.beginPath();
      ctx.moveTo(x - w * 0.45, -H * 0.82);
      ctx.bezierCurveTo(x + w, -H * 0.35, x - w, H * 0.32, x + w * 0.38, H * 0.82);
      ctx.lineTo(x + w * 1.45, H * 0.78);
      ctx.bezierCurveTo(x + w * 0.1, H * 0.25, x + w * 1.05, -H * 0.3, x + w * 0.52, -H * 0.82);
      ctx.closePath();
      ctx.fill();
    }
  } else if (pattern === 1) {
    ctx.fillStyle = hsla(color.accentH, 86, 42, 0.26);
    for (let i = 0; i < 12; i++) {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const x = -L * 0.24 + col * L * 0.16 + Math.sin(phase + i) * L * 0.02;
      const y = -H * 0.42 + row * H * 0.34 + Math.cos(phase * 1.7 + i) * H * 0.08;
      ctx.beginPath();
      ctx.ellipse(x, y, L * 0.028, H * 0.052, 0.4, 0, TAU);
      ctx.fill();
    }
  } else {
    ctx.lineWidth = Math.max(1, H * 0.14);
    ctx.strokeStyle = hsla(color.accentH, 88, 42, 0.38);
    ctx.beginPath();
    ctx.moveTo(-L * 0.39, -H * 0.02);
    ctx.bezierCurveTo(-L * 0.12, -H * 0.16, L * 0.18, -H * 0.1, L * 0.42, -H * 0.02);
    ctx.stroke();
  }

  // Fine scale arcs, subtle enough to read only as shimmer.
  ctx.lineWidth = Math.max(0.45, L * 0.011);
  ctx.strokeStyle = hsla(color.h, clamp(color.s - 14, 0, 100), clamp(color.l + 18, 0, 96), 0.18);
  for (let x = -L * 0.26; x < L * 0.24; x += L * 0.13) {
    for (let y = -H * 0.34; y <= H * 0.34; y += H * 0.24) {
      ctx.beginPath();
      ctx.arc(x, y, H * 0.115, -0.86, 0.86);
      ctx.stroke();
    }
  }

  ctx.strokeStyle = color.line;
  ctx.lineWidth = Math.max(0.7, L * 0.016);
  ctx.beginPath();
  ctx.moveTo(-L * 0.36, -H * 0.04);
  ctx.bezierCurveTo(-L * 0.08, -H * 0.13, L * 0.2, -H * 0.08, L * 0.42, -H * 0.02);
  ctx.stroke();

  ctx.restore();
}

/* ================================================================== *
 * FishSchool
 * ================================================================== */

export class FishSchool {
  constructor(canvas) {
    this.canvas = canvas;
    this.fish = [];
    this._spawnAcc = 0;
  }

  get count() { return this.fish.length; }

  clear() { this.fish.length = 0; }

  _spawnOne(target) {
    const W = this.canvas.clientWidth, H = this.canvas.clientHeight;
    // Enter from a random screen edge, darting toward the target/centre.
    const edge = randInt(0, 3);
    let x, y;
    if (edge === 0) { x = rand(0, W); y = -30; }
    else if (edge === 1) { x = W + 30; y = rand(0, H); }
    else if (edge === 2) { x = rand(0, W); y = H + 30; }
    else { x = -30; y = rand(0, H); }

    const f = new Fish(x, y, W, H);
    const to = target || { x: W / 2, y: H / 2 };
    const dir = Vec.norm(Vec.sub(to, f.pos));
    f.vel = Vec.scale(dir, f.maxSpeed * 0.9); // burst inward
    f.heading = Math.atan2(f.vel.y, f.vel.x);
    this.fish.push(f);
  }

  // mode: 'FOLLOW' | 'ORBIT' | 'IDLE'
  update(dt, time, { mode, target, faceCenter } = {}) {
    if (mode === "FOLLOW") {
      // Incremental spawn up to the cap.
      this._spawnAcc += dt * 1000;
      while (this.count < MAX_FISH && this._spawnAcc >= SPAWN_INTERVAL_MS) {
        this._spawnAcc -= SPAWN_INTERVAL_MS;
        this._spawnOne(target);
      }
      for (const f of this.fish) {
        f.steer(dt, target, this.fish);
        f.animate(dt);
        this._wrapSoft(f);
      }
    } else if (mode === "ORBIT") {
      this._spawnAcc = 0;
      for (const f of this.fish) {
        updateOrbit(f, faceCenter, dt, time);
        f.animate(dt);
      }
    } else {
      // IDLE-ish: let any stragglers drift and gently animate.
      for (const f of this.fish) {
        f.pos.x += f.vel.x * dt * 60;
        f.pos.y += f.vel.y * dt * 60;
        f.animate(dt);
      }
    }
  }

  // Latch orbit params on every fish (called on FOLLOW -> ORBIT).
  beginOrbit(faceCenter, faceRadius, direction) {
    this.fish.forEach((f, i) => assignOrbit(f, faceCenter, faceRadius, direction, i, this.count));
  }

  draw(ctx) {
    for (const f of this.fish) f.draw(ctx);
  }

  // Convert every fish into particle bursts, then empty the school.
  toParticles(pool) {
    const n = Math.max(1, this.count);
    const budget = Math.floor(pool.capacity / n);
    for (const f of this.fish) {
      const cnt = clamp(Math.round(map(f.size, 15, 34, budget * 0.6, budget)), 6, budget);
      const bob = Math.sin(f.floatPhase) * f.floatAmp;
      pool.burst(f.pos.x, f.pos.y + bob, f.color, cnt);
    }
    this.clear();
  }

  // Keep drifting fish loosely on-screen during FOLLOW (soft nudge, not a hard wrap).
  _wrapSoft(f) {
    const W = this.canvas.clientWidth, H = this.canvas.clientHeight, m = 60;
    if (f.pos.x < -m) f.vel.x += 0.3;
    else if (f.pos.x > W + m) f.vel.x -= 0.3;
    if (f.pos.y < -m) f.vel.y += 0.3;
    else if (f.pos.y > H + m) f.vel.y -= 0.3;
  }
}
