// utils.js — shared math, easing, color, and smoothing helpers.
// Pure functions and tiny stateful helpers. No DOM, no side effects.

/* ------------------------------------------------------------------ *
 * Scalar math
 * ------------------------------------------------------------------ */

export const TAU = Math.PI * 2;

export const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

export const lerp = (a, b, t) => a + (b - a) * t;

// Remap x from [inMin,inMax] onto [outMin,outMax].
export const map = (x, inMin, inMax, outMin, outMax) =>
  outMin + ((x - inMin) * (outMax - outMin)) / (inMax - inMin);

// Frame-rate-independent easing factor. `base` is the fraction of "distance
// remaining" left after one second; smaller = snappier. Returns a lerp t for dt.
export const expEase = (base, dt) => 1 - Math.pow(base, dt);

/* ------------------------------------------------------------------ *
 * Angles
 * ------------------------------------------------------------------ */

// Wrap an angle delta into (-PI, PI]. Robust across the atan2 branch cut.
export const wrapAngle = (d) => Math.atan2(Math.sin(d), Math.cos(d));

// Shortest-path signed difference b - a, wrapped to (-PI, PI].
export const angleDiff = (a, b) => wrapAngle(b - a);

// Interpolate angles along the shortest arc.
export const angleLerp = (a, b, t) => a + angleDiff(a, b) * t;

/* ------------------------------------------------------------------ *
 * Randomness  (Math.random is fine here — visual jitter only)
 * ------------------------------------------------------------------ */

export const rand = (min = 0, max = 1) => min + Math.random() * (max - min);
export const randInt = (min, max) => Math.floor(rand(min, max + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const chance = (p) => Math.random() < p;

/* ------------------------------------------------------------------ *
 * Vec2 — plain {x,y} objects with functional + in-place helpers.
 * Hot paths reuse scratch objects to avoid per-frame allocation.
 * ------------------------------------------------------------------ */

export const Vec = {
  make: (x = 0, y = 0) => ({ x, y }),
  set: (o, x, y) => { o.x = x; o.y = y; return o; },
  copy: (o, s) => { o.x = s.x; o.y = s.y; return o; },
  add: (a, b) => ({ x: a.x + b.x, y: a.y + b.y }),
  sub: (a, b) => ({ x: a.x - b.x, y: a.y - b.y }),
  scale: (a, s) => ({ x: a.x * s, y: a.y * s }),
  len: (a) => Math.hypot(a.x, a.y),
  len2: (a) => a.x * a.x + a.y * a.y,
  dist: (a, b) => Math.hypot(a.x - b.x, a.y - b.y),
  norm: (a) => {
    const l = Math.hypot(a.x, a.y) || 1;
    return { x: a.x / l, y: a.y / l };
  },
  // Return a copy of `a` clamped to at most `max` magnitude.
  clampMag: (a, max) => {
    const l = Math.hypot(a.x, a.y);
    if (l <= max || l === 0) return { x: a.x, y: a.y };
    const s = max / l;
    return { x: a.x * s, y: a.y * s };
  },
  lerp: (a, b, t) => ({ x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) }),
};

/* ------------------------------------------------------------------ *
 * Color - reef-fish palette.
 * ------------------------------------------------------------------ */

// Base hues (HSL) inspired by real tropical fish: blue tangs, gold anthias,
// clownfish, wrasse, and silver baitfish. Accents drive stripes and fins.
export const PALETTE = [
  { h: 205, s: 78, l: 52, accent: 48 },  // blue + gold
  { h: 38, s: 92, l: 58, accent: 210 },  // gold + blue
  { h: 20, s: 88, l: 56, accent: 0 },    // orange + dark red
  { h: 176, s: 62, l: 48, accent: 315 }, // teal + magenta
  { h: 218, s: 28, l: 70, accent: 46 },  // silver-blue + yellow
  { h: 292, s: 58, l: 58, accent: 182 }, // wrasse purple + cyan
];

// Pick a palette color with slight per-fish HSL jitter, returning css strings
// plus the raw hsl for building gradients/glows.
export function pickFishColor() {
  const base = pick(PALETTE);
  const h = (base.h + rand(-9, 9) + 360) % 360;
  const s = clamp(base.s + rand(-7, 7), 24, 96);
  const l = clamp(base.l + rand(-5, 6), 42, 78);
  const accentH = (base.accent + rand(-12, 12) + 360) % 360;
  const accentS = clamp(s + rand(6, 18), 34, 100);
  const accentL = clamp(l + rand(-10, 10), 24, 78);
  return {
    h, s, l, accentH,
    fill: `hsl(${h} ${s}% ${l}%)`,
    light: `hsl(${h} ${clamp(s + 8, 0, 100)}% ${clamp(l + 18, 0, 95)}%)`,
    belly: `hsl(${h} ${clamp(s - 18, 0, 100)}% ${clamp(l + 24, 0, 96)}%)`,
    dark: `hsl(${h} ${clamp(s + 8, 0, 100)}% ${clamp(l - 22, 5, 100)}%)`,
    stripe: `hsl(${accentH} ${accentS}% ${accentL}%)`,
    fin: `hsla(${accentH}, ${accentS}%, ${clamp(accentL - 2, 8, 84)}%, 0.78)`,
    line: `hsla(${h}, ${clamp(s - 12, 0, 100)}%, ${clamp(l - 26, 5, 90)}%, 0.58)`,
    glow: `hsla(${h}, ${s}%, ${clamp(l + 10, 0, 95)}%, 0.9)`,
  };
}

export const hsla = (h, s, l, a) => `hsla(${h}, ${s}%, ${l}%, ${a})`;

/* ------------------------------------------------------------------ *
 * Smoothing — One-Euro-ish adaptive low-pass for a 2D point.
 * Low jitter when slow, low lag when fast. Used by the trackers to
 * turn ~25 Hz noisy detections into a silky per-frame target.
 * ------------------------------------------------------------------ */

export class Smooth2D {
  // minCutoff: lower = smoother-but-laggier at rest; beta: speed coupling.
  constructor({ minCutoff = 1.7, beta = 0.03, dCutoff = 1.0 } = {}) {
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;
    this.hasPrev = false;
    this.x = 0; this.y = 0;      // filtered value
    this.dx = 0; this.dy = 0;    // filtered derivative
    this.tPrev = 0;
  }

  _alpha(cutoff, dt) {
    const tau = 1 / (TAU * cutoff);
    return 1 / (1 + tau / dt);
  }

  // Feed a raw sample at time t (seconds). Returns the smoothed {x,y}.
  filter(rx, ry, t) {
    if (!this.hasPrev) {
      this.hasPrev = true;
      this.x = rx; this.y = ry;
      this.tPrev = t;
      return { x: rx, y: ry };
    }
    let dt = t - this.tPrev;
    if (!(dt > 0)) dt = 1 / 60;
    this.tPrev = t;

    // Derivative, filtered with dCutoff.
    const dxRaw = (rx - this.x) / dt;
    const dyRaw = (ry - this.y) / dt;
    const ad = this._alpha(this.dCutoff, dt);
    this.dx = lerp(this.dx, dxRaw, ad);
    this.dy = lerp(this.dy, dyRaw, ad);
    const speed = Math.hypot(this.dx, this.dy);

    // Adaptive cutoff: faster motion -> higher cutoff -> less lag.
    const cutoff = this.minCutoff + this.beta * speed;
    const a = this._alpha(cutoff, dt);
    this.x = lerp(this.x, rx, a);
    this.y = lerp(this.y, ry, a);
    return { x: this.x, y: this.y };
  }

  reset() {
    this.hasPrev = false;
    this.dx = 0; this.dy = 0;
  }
}

// Simple scalar exponential moving average.
export class EMA {
  constructor(alpha = 0.35) { this.alpha = alpha; this.v = null; }
  push(x) {
    this.v = this.v === null ? x : lerp(this.v, x, this.alpha);
    return this.v;
  }
  get value() { return this.v; }
  reset() { this.v = null; }
}
