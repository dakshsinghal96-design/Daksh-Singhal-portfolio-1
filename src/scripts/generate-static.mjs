/**
 * Emits the two static files that must exist as real files rather than routes:
 * a sitemap covering the five app pages, and an Open Graph preview image.
 *
 * The OG image is written as a raw PNG (zlib is enough — no image dependency).
 * It carries the brand gradient only; the final artwork with name and title is
 * still to be supplied.
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://project-archive-nu.vercel.app';
const ROUTES = [
  { path: '/', priority: '1.0' },
  { path: '/projects', priority: '0.9' },
  { path: '/about', priority: '0.8' },
  { path: '/skills', priority: '0.7' },
  { path: '/contact', priority: '0.6' },
];

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) =>
    `  <url>\n    <loc>${ORIGIN}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`
).join('\n')}
</urlset>
`;
writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap, 'utf8');

// ---- Open Graph image -----------------------------------------------------
const W = 1200;
const H = 630;

function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n += 1) {
    c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

/** Two radial violet/blue glows over the base surface, matching the site. */
function pixel(x, y) {
  const glow = (cx, cy, r, cr, cg, cb) => {
    const d = Math.hypot(x - cx, y - cy) / r;
    const f = Math.max(0, 1 - d * d);
    return [cr * f, cg * f, cb * f];
  };
  const [r1, g1, b1] = glow(W * 0.22, H * 0.22, 620, 122, 60, 190);
  const [r2, g2, b2] = glow(W * 0.82, H * 0.7, 560, 40, 78, 168);
  const [r3, g3, b3] = glow(W * 0.55, H * 1.05, 520, 30, 120, 96);
  return [
    Math.min(255, 18 + r1 + r2 + r3),
    Math.min(255, 15 + g1 + g2 + g3),
    Math.min(255, 23 + b1 + b2 + b3),
  ];
}

const raw = Buffer.alloc((W * 3 + 1) * H);
let o = 0;
for (let y = 0; y < H; y += 1) {
  raw[o] = 0; // filter: none
  o += 1;
  for (let x = 0; x < W; x += 1) {
    const [r, g, b] = pixel(x, y);
    raw[o] = r;
    raw[o + 1] = g;
    raw[o + 2] = b;
    o += 3;
  }
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // colour type: truecolour
const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);
writeFileSync(resolve(root, 'public/og-image.png'), png);

// ---- favicon.ico ----------------------------------------------------------
// Browsers request /favicon.ico automatically for any page that does not
// declare an icon — which includes all 223 archived builds, none of which do.
// Without this file every one of them logs a 404. ICO can wrap a PNG payload
// directly, so the same encoder is reused.
function pngOfSize(size, paint) {
  const rows = Buffer.alloc((size * 4 + 1) * size);
  let off = 0;
  for (let y = 0; y < size; y += 1) {
    rows[off] = 0;
    off += 1;
    for (let x = 0; x < size; x += 1) {
      const [r, g, b, a] = paint(x, y, size);
      rows[off] = r;
      rows[off + 1] = g;
      rows[off + 2] = b;
      rows[off + 3] = a;
      off += 4;
    }
  }
  const head = Buffer.alloc(13);
  head.writeUInt32BE(size, 0);
  head.writeUInt32BE(size, 4);
  head[8] = 8; // bit depth
  head[9] = 6; // colour type: truecolour + alpha
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', head),
    chunk('IDAT', deflateSync(rows, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/** Rounded brand tile with a violet→azure→mint diagonal sweep. */
function iconPixel(x, y, size) {
  const r = size * 0.22;
  const cx = Math.min(x, size - 1 - x);
  const cy = Math.min(y, size - 1 - y);
  // Rounded-corner mask.
  if (cx < r && cy < r && Math.hypot(r - cx, r - cy) > r) return [0, 0, 0, 0];

  const t = (x / size) * 0.5 + (y / size) * 0.5;
  const stops = [
    [168, 85, 247],
    [64, 121, 255],
    [64, 255, 170],
  ];
  const seg = Math.min(Math.floor(t * 2), 1);
  const local = t * 2 - seg;
  const a = stops[seg];
  const b = stops[seg + 1];
  const mix = (i) => Math.round(a[i] + (b[i] - a[i]) * local);

  // Darken the middle band so the mark reads as a shard rather than a blob.
  const band = Math.abs((x - y) / size);
  const shade = band < 0.16 ? 0.42 : 1;
  return [
    Math.round(mix(0) * shade + 18 * (1 - shade)),
    Math.round(mix(1) * shade + 15 * (1 - shade)),
    Math.round(mix(2) * shade + 23 * (1 - shade)),
    255,
  ];
}

const ICON = 32;
const iconPng = pngOfSize(ICON, iconPixel);
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // type: icon
icoHeader.writeUInt16LE(1, 4); // one image
const icoEntry = Buffer.alloc(16);
icoEntry[0] = ICON; // width
icoEntry[1] = ICON; // height
icoEntry[2] = 0; // palette
icoEntry[3] = 0; // reserved
icoEntry.writeUInt16LE(1, 4); // colour planes
icoEntry.writeUInt16LE(32, 6); // bits per pixel
icoEntry.writeUInt32LE(iconPng.length, 8);
icoEntry.writeUInt32LE(6 + 16, 12); // offset to payload
writeFileSync(resolve(root, 'public/favicon.ico'), Buffer.concat([icoHeader, icoEntry, iconPng]));

console.log(
  `[generate-static] wrote sitemap.xml (${ROUTES.length} routes), og-image.png (${W}x${H}) ` +
    `and favicon.ico (${ICON}x${ICON})`
);
