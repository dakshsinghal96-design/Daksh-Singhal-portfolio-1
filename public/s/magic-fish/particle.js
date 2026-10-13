// particle.js — fixed-pool particle system for the DISPERSE burst.
// 300 pre-allocated particles (no per-frame allocation -> no GC hitching).
// Four visual types share one integrator; drawing is batched by blend mode.

import { TAU, rand, chance, clamp, hsla } from "./utils.js";

const MAX_PARTICLES = 300;

const TYPE = { BUBBLE: 0, SPARKLE: 1, SPLASH: 2, MIST: 3 };

export class ParticlePool {
  constructor(capacity = MAX_PARTICLES) {
    this.capacity = capacity;
    this.pool = [];
    for (let i = 0; i < capacity; i++) this.pool.push(newParticle());
    this._cursor = 0;
    this._active = 0;
  }

  get activeCount() { return this._active; }

  // Emit a burst of `count` particles at (x,y) using a fish's color.
  burst(x, y, color, count) {
    for (let k = 0; k < count; k++) {
      const p = this._acquire();
      if (!p) return; // pool exhausted; drop the rest
      initParticle(p, x, y, color);
    }
  }

  _acquire() {
    // Scan from the cursor for a free slot.
    for (let i = 0; i < this.capacity; i++) {
      const idx = (this._cursor + i) % this.capacity;
      const p = this.pool[idx];
      if (!p.active) {
        this._cursor = (idx + 1) % this.capacity;
        p.active = true;
        this._active++;
        return p;
      }
    }
    return null;
  }

  update(dt) {
    for (const p of this.pool) {
      if (!p.active) continue;
      const damp = Math.pow(p.drag, dt * 60);
      p.vx *= damp;
      p.vy = p.vy * damp + p.gravity * dt;
      p.x += p.vx * dt * 60;
      p.y += p.vy * dt * 60;
      p.rot += p.rotSpeed * dt;
      p.wobble += dt * p.wobbleFreq;
      if (p.type === TYPE.BUBBLE) p.x += Math.sin(p.wobble) * p.wobbleAmp * dt * 60;
      if (p.type === TYPE.MIST) p.size += p.grow * dt;
      p.life -= dt;
      if (p.life <= 0) { p.active = false; this._active--; }
    }
  }

  draw(ctx) {
    // Pass 1: non-additive (bubbles, splash, mist).
    ctx.globalCompositeOperation = "source-over";
    for (const p of this.pool) {
      if (!p.active || p.type === TYPE.SPARKLE) continue;
      const lifeT = clamp(p.life / p.maxLife, 0, 1);
      if (p.type === TYPE.BUBBLE) drawBubble(ctx, p, lifeT);
      else if (p.type === TYPE.SPLASH) drawSplash(ctx, p, lifeT);
      else drawMist(ctx, p, lifeT);
    }
    // Pass 2: additive glow (sparkles).
    ctx.globalCompositeOperation = "lighter";
    for (const p of this.pool) {
      if (!p.active || p.type !== TYPE.SPARKLE) continue;
      const lifeT = clamp(p.life / p.maxLife, 0, 1);
      drawSparkle(ctx, p, lifeT);
    }
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
  }

  clear() {
    for (const p of this.pool) p.active = false;
    this._active = 0;
  }
}

/* ------------------------------------------------------------------ *
 * Particle lifecycle
 * ------------------------------------------------------------------ */

function newParticle() {
  return {
    active: false, type: 0,
    x: 0, y: 0, vx: 0, vy: 0,
    life: 0, maxLife: 1, size: 1, baseSize: 1,
    rot: 0, rotSpeed: 0, gravity: 0, drag: 0.98,
    wobble: 0, wobbleFreq: 0, wobbleAmp: 0, grow: 0,
    h: 200, s: 80, l: 60,
  };
}

// Weighted type selection for a dispersal burst.
function chooseType() {
  const r = Math.random();
  if (r < 0.42) return TYPE.BUBBLE;
  if (r < 0.72) return TYPE.SPARKLE;
  if (r < 0.9) return TYPE.SPLASH;
  return TYPE.MIST;
}

function initParticle(p, x, y, color) {
  p.x = x; p.y = y;
  p.rot = rand(0, TAU);
  p.wobble = rand(0, TAU);
  p.type = chooseType();

  const ang = rand(0, TAU);
  p.h = color.h; p.s = color.s; p.l = color.l;

  switch (p.type) {
    case TYPE.BUBBLE: {
      const spd = rand(0.4, 1.8);
      p.vx = Math.cos(ang) * spd;
      p.vy = Math.sin(ang) * spd - rand(0.6, 1.6); // upward bias
      p.gravity = -6;            // buoyant
      p.drag = 0.985;
      p.size = rand(3, 8);
      p.maxLife = rand(1.1, 1.8);
      p.wobbleFreq = rand(4, 8);
      p.wobbleAmp = rand(0.15, 0.5);
      p.l = clamp(color.l + 12, 40, 88);
      break;
    }
    case TYPE.SPARKLE: {
      const spd = rand(2.5, 6.5);
      p.vx = Math.cos(ang) * spd;
      p.vy = Math.sin(ang) * spd;
      p.gravity = rand(-2, 2);
      p.drag = 0.9;
      p.size = rand(2, 4.5);
      p.maxLife = rand(0.45, 0.8);
      p.rotSpeed = rand(-8, 8);
      // half the sparkles are gold for a magical shimmer
      if (chance(0.5)) { p.h = 45; p.s = 100; }
      p.l = 78;
      break;
    }
    case TYPE.SPLASH: {
      const spd = rand(2, 5);
      p.vx = Math.cos(ang) * spd;
      p.vy = Math.sin(ang) * spd - rand(1, 2.5);
      p.gravity = 20;            // arcs and falls
      p.drag = 0.99;
      p.size = rand(1.6, 3.6);
      p.maxLife = rand(0.7, 1.1);
      break;
    }
    default: { // MIST
      const spd = rand(0.2, 1);
      p.vx = Math.cos(ang) * spd;
      p.vy = Math.sin(ang) * spd - rand(0.2, 0.8);
      p.gravity = -2;
      p.drag = 0.96;
      p.size = rand(8, 16);
      p.grow = rand(14, 30);
      p.maxLife = rand(0.9, 1.5);
      p.l = clamp(color.l + 8, 40, 85);
      break;
    }
  }
  p.baseSize = p.size;
  p.life = p.maxLife;
}

/* ------------------------------------------------------------------ *
 * Drawing
 * ------------------------------------------------------------------ */

function drawBubble(ctx, p, t) {
  const a = t * 0.8;
  ctx.globalAlpha = a;
  ctx.lineWidth = Math.max(1, p.size * 0.18);
  ctx.strokeStyle = hsla(p.h, p.s, p.l, 0.9);
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size, 0, TAU);
  ctx.stroke();
  // little highlight
  ctx.globalAlpha = a * 0.9;
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.beginPath();
  ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, Math.max(0.8, p.size * 0.18), 0, TAU);
  ctx.fill();
}

function drawSplash(ctx, p, t) {
  ctx.globalAlpha = t;
  ctx.fillStyle = hsla(p.h, p.s, clamp(p.l + 6, 0, 90), 1);
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size, 0, TAU);
  ctx.fill();
}

function drawMist(ctx, p, t) {
  ctx.globalAlpha = t * 0.28;
  ctx.fillStyle = hsla(p.h, p.s, p.l, 1);
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size, 0, TAU);
  ctx.fill();
}

function drawSparkle(ctx, p, t) {
  // Twinkle: modulate brightness over life.
  const tw = 0.6 + 0.4 * Math.sin(p.wobble * 6 + p.rot * 4);
  ctx.globalAlpha = clamp(t * tw, 0, 1);
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rot);
  ctx.fillStyle = hsla(p.h, p.s, p.l, 1);
  // soft core
  ctx.beginPath();
  ctx.arc(0, 0, p.size * 0.7, 0, TAU);
  ctx.fill();
  // 4-point star
  const s = p.size * 2.4;
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.16, -s * 0.16);
  ctx.lineTo(s, 0);
  ctx.lineTo(s * 0.16, s * 0.16);
  ctx.lineTo(0, s);
  ctx.lineTo(-s * 0.16, s * 0.16);
  ctx.lineTo(-s, 0);
  ctx.lineTo(-s * 0.16, -s * 0.16);
  ctx.closePath();
  ctx.globalAlpha *= 0.7;
  ctx.fill();
  ctx.restore();
}
