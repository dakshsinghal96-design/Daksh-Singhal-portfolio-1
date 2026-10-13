// orbit.js — circle-around-face gesture detection + orbit mechanics.
// Pure math + per-fish state; no rendering.

import { TAU, rand, lerp, angleLerp, clamp, chance, wrapAngle } from "./utils.js";

/* ================================================================== *
 * Circle detection (winding-number / angle accumulation about the face)
 * ================================================================== */

const R_MIN = 0.6;          // annulus, in multiples of face radius
const R_MAX = 3.5;
const DTHETA_MIN = 0.02;    // ignore sub-degree jitter
const DTHETA_MAX = 0.9;     // ~52deg/frame -> tracking teleport, skip
const REVERSAL_MAX = Math.PI / 2;
const TOL = 0.35;           // ~340deg counts as a full loop
const MIN_FRAMES = 10;
const OUT_GRACE = 6;
const LOST_GRACE = 5;
const MIN_MOVE = 0.01;      // min tangential move (in face-radius units)
const REFRACTORY_MS = 400;
const SECTORS_REQUIRED = 6; // of 8 octants

export function createCircleDetector() {
  let prevTheta = null;
  let prevTip = null;
  let acc = 0;
  let reversal = 0;
  let sectors = 0;          // bitmask of visited octants
  let frames = 0;
  let outFrames = 0;
  let lostFrames = 0;
  let refractoryUntil = 0;

  function reset() {
    prevTheta = null; prevTip = null;
    acc = 0; reversal = 0; sectors = 0; frames = 0;
    outFrames = 0; lostFrames = 0;
  }

  // Call each frame with fingertip + face center + face radius (canvas px).
  // Returns 'CW' | 'CCW' on completion, else null.
  function update(tip, center, faceRadius, nowMs) {
    if (nowMs < refractoryUntil) return null;
    if (!tip || !center || !(faceRadius > 0)) {
      if (++lostFrames > LOST_GRACE) reset();
      return null;
    }
    lostFrames = 0;

    const vx = tip.x - center.x, vy = tip.y - center.y;
    const r = Math.hypot(vx, vy);
    const rNorm = r / faceRadius;
    if (rNorm < R_MIN || rNorm > R_MAX) {
      if (++outFrames > OUT_GRACE) reset();
      return null;
    }
    outFrames = 0;

    const theta = Math.atan2(vy, vx);
    if (prevTheta === null) {
      prevTheta = theta; prevTip = { x: tip.x, y: tip.y };
      markSector(theta);
      return null;
    }

    const moveNorm = Math.hypot(tip.x - prevTip.x, tip.y - prevTip.y) / faceRadius;
    if (moveNorm < MIN_MOVE) {
      prevTheta = theta; prevTip.x = tip.x; prevTip.y = tip.y;
      return null;
    }

    let d = wrapAngle(theta - prevTheta);
    if (Math.abs(d) < DTHETA_MIN) d = 0;
    if (Math.abs(d) > DTHETA_MAX) {
      prevTheta = theta; prevTip.x = tip.x; prevTip.y = tip.y;
      return null; // teleport
    }

    acc += d;
    // Reversal budget: punish back-tracking against the dominant direction.
    if (Math.sign(d) === Math.sign(acc) || d === 0) {
      reversal = Math.max(0, reversal - Math.abs(d));
    } else {
      reversal += Math.abs(d);
    }
    if (reversal > REVERSAL_MAX) {
      reset();
      prevTheta = theta; prevTip = { x: tip.x, y: tip.y };
      markSector(theta);
      return null;
    }

    markSector(theta);
    frames++;
    prevTheta = theta; prevTip.x = tip.x; prevTip.y = tip.y;

    if (
      Math.abs(acc) >= TAU - TOL &&
      popcount(sectors) >= SECTORS_REQUIRED &&
      frames >= MIN_FRAMES
    ) {
      const dir = acc > 0 ? "CW" : "CCW";
      reset();
      refractoryUntil = nowMs + REFRACTORY_MS;
      return dir;
    }
    return null;
  }

  function markSector(theta) {
    let idx = Math.floor(((theta + Math.PI) / (Math.PI / 4)));
    idx = clamp(idx, 0, 7);
    sectors |= (1 << idx);
  }

  // expose progress for the debug HUD
  function progress() {
    return { acc, sectors: popcount(sectors), frames };
  }

  return { update, reset, progress };
}

function popcount(n) {
  let c = 0;
  while (n) { n &= n - 1; c++; }
  return c;
}

/* ================================================================== *
 * Orbit mechanics
 * ================================================================== */

const BANDS = [1.25, 1.65, 2.05, 2.5]; // nested rings, x face radius

// Latch per-fish orbit parameters when entering ORBIT.
export function assignOrbit(fish, center, faceRadius, direction, i, n) {
  const R = faceRadius > 0 ? faceRadius : 90;
  const band = BANDS[i % BANDS.length] + rand(-0.12, 0.12);
  const baseDir = direction === "CCW" ? -1 : 1;
  fish.orbit = {
    radius: R * band,
    angSpeed: rand(0.5, 1.4),
    // Mixed CW/CCW, biased toward the detected sweep direction.
    dir: chance(0.65) ? baseDir : -baseDir,
    theta: Math.atan2(fish.pos.y - center.y, fish.pos.x - center.x),
    breatheFreq: rand(0.6, 1.4),
    breatheAmp: R * rand(0.06, 0.16),
    bobFreq: rand(0.8, 1.8),
    bobAmp: rand(3, 8),
    phase: rand(0, TAU),
    phase2: rand(0, TAU),
    blend: 0,
    freeStart: { x: fish.pos.x, y: fish.pos.y },
  };
}

// Advance one fish along its orbit; sets pos + heading. `time` is seconds.
export function updateOrbit(fish, center, dt, time) {
  const o = fish.orbit;
  if (!o || !center) return;

  o.theta += o.dir * o.angSpeed * dt;
  o.blend = Math.min(1, o.blend + dt / 0.6);

  const floatR = o.radius + Math.sin(time * o.breatheFreq + o.phase) * o.breatheAmp;
  const floatY = Math.sin(time * o.bobFreq + o.phase2) * o.bobAmp;
  const orbitX = center.x + Math.cos(o.theta) * floatR;
  const orbitY = center.y + Math.sin(o.theta) * floatR * 0.75 + floatY; // slightly elliptical

  const e = smoothstep(o.blend);
  fish.pos.x = lerp(o.freeStart.x, orbitX, e);
  fish.pos.y = lerp(o.freeStart.y, orbitY, e);

  const tangent = o.theta + o.dir * (Math.PI / 2);
  fish.heading = angleLerp(fish.heading, tangent, 1 - Math.pow(0.002, dt));
  fish.speedHint = o.angSpeed * floatR; // drives tail-wag speed
}

const smoothstep = (t) => t * t * (3 - 2 * t);
