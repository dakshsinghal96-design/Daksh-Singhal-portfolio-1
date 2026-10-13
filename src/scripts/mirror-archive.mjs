/**
 * Restores the archived builds into public/ by mirroring them from a deployed
 * copy of the archive.
 *
 * Use this when you have the archive's URL but not its repository. Single-file
 * `p/` builds are a straight download; multi-file `s/` builds additionally need
 * their referenced assets crawled, because the record list only names the entry
 * HTML file.
 *
 *   node scripts/mirror-archive.mjs [origin] [--force]
 *
 * Existing files are skipped unless --force is passed, so the script is safe to
 * re-run after an interrupted mirror.
 */
import { mkdirSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = (process.argv.find((a) => a.startsWith('http')) ?? 'https://project-archive-nu.vercel.app').replace(/\/$/, '');
const FORCE = process.argv.includes('--force');
const PUBLIC = resolve(root, 'public');
const CONCURRENCY = 8;

const archiveHtml = readFileSync(resolve(root, 'legacy-archive.html'), 'utf8');
const records = JSON.parse(archiveHtml.match(/const\s+D\s*=\s*(\[[\s\S]*?\])\s*;/)[1]);

const stats = { downloaded: 0, skipped: 0, failed: [], bytes: 0, assets: 0 };
const seen = new Set();

function localPath(rel) {
  return resolve(PUBLIC, rel.replace(/\//g, '/'));
}

async function download(rel) {
  if (seen.has(rel)) return null;
  seen.add(rel);

  const dest = localPath(rel);
  if (!FORCE && existsSync(dest) && statSync(dest).size > 0) {
    stats.skipped += 1;
    return null;
  }

  let res;
  try {
    res = await fetch(`${ORIGIN}/${rel}`);
  } catch (err) {
    stats.failed.push(`${rel} — ${err.message}`);
    return null;
  }
  if (!res.ok) {
    stats.failed.push(`${rel} — HTTP ${res.status}`);
    return null;
  }

  const buf = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, buf);
  stats.downloaded += 1;
  stats.bytes += buf.length;
  return { buf, contentType: res.headers.get('content-type') ?? '' };
}

/** Asset references in HTML (src/href) and CSS (url(...)), excluding externals. */
function extractRefs(text, isCss) {
  const refs = new Set();
  const add = (raw) => {
    if (!raw) return;
    const v = raw.trim().replace(/^['"]|['"]$/g, '');
    if (!v || /^(https?:|data:|mailto:|tel:|javascript:|#)/i.test(v)) return;
    refs.add(v.split('#')[0].split('?')[0]);
  };

  if (isCss) {
    for (const m of text.matchAll(/url\(([^)]+)\)/gi)) add(m[1]);
  } else {
    for (const m of text.matchAll(/\b(?:src|href)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi)) add(m[1]);
    for (const m of text.matchAll(/url\(([^)]+)\)/gi)) add(m[1]);
  }
  return [...refs];
}

/**
 * Resolve a reference found inside `basePath`.
 *
 * Root-absolute references are the interesting case: several `s/` builds ship
 * `href="/style.css"` even though the file actually lives beside their
 * index.html. That is already broken in production, so try the sibling path
 * first and fall back to the literal root path.
 */
function resolveRef(ref, basePath, buildRoot) {
  if (ref.startsWith('/')) {
    return [posix.join(buildRoot, ref.slice(1)), ref.slice(1)];
  }
  return [posix.normalize(posix.join(posix.dirname(basePath), ref))];
}

async function crawl(entryPath, buildRoot, depth = 0) {
  if (depth > 3) return;
  const got = await download(entryPath);
  if (!got) return;

  const isCss = /\.css($|\?)/i.test(entryPath) || got.contentType.includes('css');
  const isHtml = /\.html?($|\?)/i.test(entryPath) || got.contentType.includes('html');
  if (!isCss && !isHtml) return;

  const text = got.buf.toString('utf8');
  const refs = extractRefs(text, isCss);

  for (const ref of refs) {
    for (const candidate of resolveRef(ref, entryPath, buildRoot)) {
      if (candidate.startsWith('..') || seen.has(candidate)) continue;
      const before = stats.downloaded;
      await crawl(candidate, buildRoot, depth + 1);
      if (stats.downloaded > before) {
        stats.assets += 1;
        break; // first candidate that resolved wins
      }
    }
  }
}

/** Simple bounded-concurrency queue. */
async function runPool(items, worker) {
  let index = 0;
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (index < items.length) {
      const i = index;
      index += 1;
      await worker(items[i], i);
    }
  });
  await Promise.all(workers);
}

const hosted = records.filter((r) => r.href);
const single = hosted.filter((r) => !r.multi);
const multi = hosted.filter((r) => r.multi);

console.log(`[mirror] origin ${ORIGIN}`);
console.log(`[mirror] ${single.length} single-file builds, ${multi.length} multi-file builds`);

await runPool(single, async (r, i) => {
  await download(r.href);
  if ((i + 1) % 40 === 0) console.log(`[mirror]   …${i + 1}/${single.length} single-file`);
});
console.log(`[mirror] single-file builds done`);

for (const r of multi) {
  const buildRoot = posix.dirname(r.href); // e.g. "s/aegis"
  await crawl(r.href, buildRoot);
  console.log(`[mirror]   ${buildRoot} — ${stats.downloaded} files so far`);
}

console.log(
  `\n[mirror] downloaded ${stats.downloaded} files (${(stats.bytes / 1048576).toFixed(1)} MB), ` +
    `${stats.assets} crawled assets, ${stats.skipped} already present`
);
if (stats.failed.length) {
  console.log(`[mirror] ${stats.failed.length} failed:`);
  stats.failed.slice(0, 25).forEach((f) => console.log('   ', f));
  process.exitCode = 1;
}
