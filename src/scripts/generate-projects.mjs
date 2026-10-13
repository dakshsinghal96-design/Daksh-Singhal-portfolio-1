/**
 * Regenerates src/data/projects.ts from the archive's raw record list.
 *
 * The legacy Project Archive kept every record in a `const D = [...]` array
 * inside its static index.html. That array is the source of truth, so this
 * script reads it (from the local archive page, or from the deployed one) and
 * emits typed records without altering a single href, live URL or category.
 *
 *   node scripts/generate-projects.mjs [path-or-url-to-archive-html]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const DEFAULT_SOURCES = [
  resolve(root, 'archive-source/index.html'),
  resolve(root, 'legacy-archive.html'),
];

async function loadHtml(arg) {
  if (arg && /^https?:\/\//.test(arg)) {
    const res = await fetch(arg);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${arg}`);
    return res.text();
  }
  const candidates = arg ? [resolve(process.cwd(), arg)] : DEFAULT_SOURCES;
  const hit = candidates.find((p) => existsSync(p));
  if (!hit) {
    throw new Error(
      `No archive HTML found. Pass a path or URL:\n  node scripts/generate-projects.mjs ./legacy-archive.html`
    );
  }
  return readFileSync(hit, 'utf8');
}

/** Pull the `const D = [...]` literal out of the archive page. */
function extractRecords(html) {
  const match = html.match(/const\s+D\s*=\s*(\[[\s\S]*?\])\s*;/);
  if (!match) throw new Error('Could not find the `const D = [...]` archive array.');
  return JSON.parse(match[1]);
}

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[\u2014\u2013]/g, '-')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/**
 * Tech tags are only ever derived from evidence already present in the record's
 * own note text. Nothing is inferred from a title, so no tag is invented.
 */
const TECH_EVIDENCE = [
  [/react three fiber|\br3f\b/i, ['React', 'React Three Fiber', 'Three.js']],
  [/next\.js/i, ['Next.js']],
  [/\bvite\b/i, ['Vite']],
  [/\breact\b/i, ['React']],
  [/mediapipe/i, ['MediaPipe']],
  [/flutter/i, ['Flutter']],
  [/firebase/i, ['Firebase']],
  [/\bpdf\b/i, ['PDF export']],
  [/\bvercel\b/i, ['Vercel']],
  [/shader|webgl/i, ['WebGL']],
];

function techFrom(note) {
  if (!note) return [];
  const tags = new Set();
  for (const [re, list] of TECH_EVIDENCE) {
    if (re.test(note)) list.forEach((t) => tags.add(t));
  }
  return [...tags];
}

/**
 * Status mirrors exactly what the legacy archive allowed you to do with a
 * record, so no project ever gains an action it did not already have.
 *   live        -> external deployment, "Open live"
 *   viewable    -> in-repo build, "View" (+ "Download" when it is a single file)
 *   source-only -> no build published, no actions
 */
function statusOf(r) {
  if (r.c === 'Live') return 'live';
  if (r.href) return 'viewable';
  return 'source';
}

/**
 * Curated advisories for builds whose deployed copy is incomplete.
 *
 * These are the only places the archive's own text is overridden, and only ever
 * to make a claim LESS strong than the record makes. Verified by loading each
 * build in a browser and observing which requests fail.
 *
 * `note` replaces the archive's note where that note would otherwise overstate
 * what the published build actually contains.
 */
const ADVISORIES = {
  's/goyral-map/index.html': {
    // The archive calls this a "7-page app", but only index/login/register were
    // ever deployed, and its shared /s/css and /s/js assets are absent upstream.
    note: 'Map records system — index, login and register pages',
    limitation: 'Partial legacy build — original assets unavailable.',
  },
  's/hammerr-core/index.html': {
    // Static export of an app that expected a server. Its /api/* endpoints 404
    // on the original deployment too, so there is no backend to restore.
    note: 'React app build — frontend only',
    limitation: 'Interactive frontend available — live backend unavailable.',
  },
};

// Titles chosen as featured must exist in the archive; verified at build time.
const FEATURED_TITLES = [
  'Obliq AI Health Scan — Eye Scan + Posture Scan',
  'ANATOMIX V2 — Living Anatomy Hologram',
  'AI Magic Fish — Hand-Tracked Aquarium',
  'Obliq AI Command Core',
  'WedIn Udaipur — Wedding Planning Platform',
  'Marque — Premium Car Marketplace',
];

const html = await loadHtml(process.argv[2]);
const records = extractRecords(html);

const seen = new Map();
const projects = records.map((r) => {
  let id = slug(r.t);
  const n = (seen.get(id) ?? 0) + 1;
  seen.set(id, n);
  if (n > 1) id = `${id}-${n}`; // older versions share a title; keep ids unique

  const advisory = r.href ? ADVISORIES[r.href] : undefined;

  return {
    id,
    title: r.t,
    category: r.c,
    date: r.d || null,
    sizeKb: r.kb ?? null,
    href: r.href ?? null,
    liveUrl: r.u ?? null,
    note: advisory?.note ?? r.n ?? null,
    limitation: advisory?.limitation ?? null,
    isOlderVersion: Boolean(r.dup),
    multiFile: Boolean(r.multi),
    status: statusOf(r),
    downloadable: Boolean(r.href) && !r.multi,
    tech: techFrom(r.n),
    featured: FEATURED_TITLES.includes(r.t) && !r.dup,
  };
});

// Featured must resolve to exactly one record per requested title.
const missing = FEATURED_TITLES.filter((t) => !projects.some((p) => p.featured && p.title === t));
if (missing.length) {
  console.warn('[generate-projects] featured titles not found in archive:', missing);
}
for (const t of FEATURED_TITLES) {
  const hits = projects.filter((p) => p.featured && p.title === t);
  if (hits.length > 1) hits.slice(1).forEach((p) => (p.featured = false));
}

// Preserve the archive's own category ordering.
const ORDER = extractOrder(html);
function extractOrder(h) {
  const m = h.match(/const\s+ORDER\s*=\s*(\[[\s\S]*?\])\s*;/);
  return m ? JSON.parse(m[1]) : [...new Set(records.map((r) => r.c))];
}

const banner = `// AUTO-GENERATED by scripts/generate-projects.mjs — do not edit by hand.
// Source of truth: the legacy Project Archive record list.
// Regenerate with: npm run gen:projects -- <path-or-url-to-archive-html>
`;

const out = `${banner}
export type ProjectStatus = 'live' | 'viewable' | 'source';

export interface Project {
  /** Stable slug used for URLs, React keys and skill cross-references. */
  id: string;
  title: string;
  category: string;
  /** ISO date the build was archived, when the archive recorded one. */
  date: string | null;
  sizeKb: number | null;
  /** Legacy in-repo build path, e.g. "p/foo.html" or "s/foo/index.html". */
  href: string | null;
  /** External deployment URL for Live projects. */
  liveUrl: string | null;
  note: string | null;
  /**
   * Set when the published build is incomplete — shown on the card so the
   * archive never overstates what a project actually delivers.
   */
  limitation: string | null;
  isOlderVersion: boolean;
  multiFile: boolean;
  status: ProjectStatus;
  downloadable: boolean;
  tech: string[];
  featured: boolean;
}

/** Category display order, preserved from the legacy archive. */
export const CATEGORY_ORDER: string[] = ${JSON.stringify(ORDER, null, 2)};

export const CATEGORY_LABELS: Record<string, string> = {
  Source: 'Source-only projects (not viewable in browser)',
};

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};

/** Stats are computed from the records themselves, never hardcoded. */
export const projectStats = {
  projects: projects.filter((p) => !p.isOlderVersion).length,
  viewable: projects.filter((p) => p.href).length,
  live: projects.filter((p) => p.status === 'live').length,
  totalBuilds: projects.length,
};

export const featuredProjects: Project[] = projects.filter((p) => p.featured);
`;

writeFileSync(resolve(root, 'src/data/projects.ts'), out, 'utf8');
console.log(
  `[generate-projects] wrote ${projects.length} records ` +
    `(${projects.filter((p) => !p.isOlderVersion).length} projects, ` +
    `${projects.filter((p) => p.href).length} viewable, ` +
    `${projects.filter((p) => p.status === 'live').length} live, ` +
    `${projects.filter((p) => p.featured).length} featured)`
);
