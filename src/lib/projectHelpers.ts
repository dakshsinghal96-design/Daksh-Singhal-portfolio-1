import type { Project } from '../data/projects';

/**
 * Resolve a legacy archive path to a root-absolute URL.
 *
 * The original archive stored relative paths ("p/foo.html", "s/bar/index.html")
 * and got away with it because the whole site was one page at the root. Inside
 * a router those would resolve against the current route — "/projects/p/foo.html"
 * — and 404. Prefixing with "/" keeps every legacy build reachable at exactly
 * the URL it has always had.
 */
export function buildUrl(href: string): string {
  return href.startsWith('/') ? href : `/${href}`;
}

/** Human-readable file size, matching the archive's own formatting. */
export function formatSize(kb: number | null): string {
  if (!kb) return '';
  return kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
}

/** "13 Jul 2026" from an ISO date, or an empty string when there is no date. */
export function formatDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export type SortKey = 'featured' | 'newest' | 'oldest' | 'az';

export const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'featured', label: 'Featured' },
  { key: 'newest', label: 'Newest' },
  { key: 'oldest', label: 'Oldest' },
  { key: 'az', label: 'A–Z' },
];

/** Undated records always sort last, whichever direction is chosen. */
export function sortProjects(list: Project[], key: SortKey): Project[] {
  const out = [...list];
  switch (key) {
    case 'newest':
      return out.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
    case 'oldest':
      return out.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return a.date.localeCompare(b.date);
      });
    case 'az':
      return out.sort((a, b) => a.title.localeCompare(b.title));
    case 'featured':
    default:
      // Featured first, then live deployments, then newest.
      return out.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        const aLive = a.status === 'live';
        const bLive = b.status === 'live';
        if (aLive !== bLive) return aLive ? -1 : 1;
        return (b.date ?? '').localeCompare(a.date ?? '');
      });
  }
}

/** Free-text match across the fields the legacy archive searched, plus tech. */
export function matchesQuery(p: Project, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return `${p.title} ${p.category} ${p.note ?? ''} ${p.tech.join(' ')}`.toLowerCase().includes(q);
}

export const STATUS_LABEL: Record<Project['status'], string> = {
  live: 'Live',
  viewable: 'Viewable',
  source: 'Source only',
};
