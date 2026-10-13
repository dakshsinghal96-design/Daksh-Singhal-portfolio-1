import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import { PageHeader } from '../components/headings';
import { IconGrid, IconList, IconSearch } from '../components/icons';
import { CATEGORY_LABELS, CATEGORY_ORDER, projectStats, projects } from '../data/projects';
import { profile } from '../data/profile';
import { SORT_OPTIONS, matchesQuery, sortProjects, type SortKey } from '../lib/projectHelpers';

type ViewMode = 'grid' | 'list';

const DEFAULTS = {
  q: '',
  cat: 'All',
  sort: 'featured' as SortKey,
  view: 'grid' as ViewMode,
  /** Older versions are hidden by default, matching the legacy archive. */
  older: '0',
};

export default function Projects() {
  const [params, setParams] = useSearchParams();

  const q = params.get('q') ?? DEFAULTS.q;
  const cat = params.get('cat') ?? DEFAULTS.cat;
  const sort = (SORT_OPTIONS.some((o) => o.key === params.get('sort'))
    ? params.get('sort')
    : DEFAULTS.sort) as SortKey;
  const view: ViewMode = params.get('view') === 'list' ? 'list' : 'grid';
  const showOlder = params.get('older') === '1';

  /**
   * Filter state lives entirely in the URL, so a filtered view is shareable and
   * the back button steps through filter changes. Values equal to the default
   * are removed to keep the URL short.
   */
  const setParam = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(params);
      if (!value || value === DEFAULTS[key as keyof typeof DEFAULTS]) next.delete(key);
      else next.set(key, value);
      // Typing in the search box replaces history rather than stacking entries.
      setParams(next, { replace: key === 'q' });
    },
    [params, setParams]
  );

  const clearFilters = () => setParams(new URLSearchParams(), { replace: false });
  const filtersActive =
    q !== DEFAULTS.q || cat !== DEFAULTS.cat || sort !== DEFAULTS.sort || showOlder;

  const visible = useMemo(() => {
    const list = projects
      .filter((p) => cat === 'All' || p.category === cat)
      .filter((p) => showOlder || !p.isOlderVersion)
      .filter((p) => matchesQuery(p, q));
    return sortProjects(list, sort);
  }, [cat, showOlder, q, sort]);

  // The featured strip only makes sense on an unfiltered, default-sorted view.
  const showFeaturedStrip = !filtersActive;
  const featured = useMemo(() => visible.filter((p) => p.featured), [visible]);
  const rest = useMemo(
    () => (showFeaturedStrip ? visible.filter((p) => !p.featured) : visible),
    [visible, showFeaturedStrip]
  );

  /** Grouped by the archive's own category order, as the legacy page did. */
  const grouped = useMemo(() => {
    const order = cat === 'All' ? CATEGORY_ORDER : [cat];
    return order
      .map((c) => ({ category: c, items: rest.filter((p) => p.category === c) }))
      .filter((g) => g.items.length > 0);
  }, [rest, cat]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Project Archive',
    numberOfItems: projectStats.projects,
    itemListElement: projects
      .filter((p) => p.featured)
      .map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          ...(p.liveUrl ? { url: p.liveUrl } : {}),
          ...(p.date ? { dateCreated: p.date } : {}),
        },
      })),
  };

  const containerClass =
    view === 'grid' ? 'grid gap-5 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-4';

  return (
    <>
      <Seo
        title={`Projects — ${profile.name}`}
        description={`The complete archive: ${projectStats.projects} projects, ${projectStats.totalBuilds} builds and ${projectStats.live} live applications across AI, computer vision, gesture interfaces, simulations and product sites.`}
        structuredData={structuredData}
      />

      <PageHeader
        eyebrow="Archive"
        title="Projects"
        gradient
        description={`Every build, kept in one place — ${projectStats.projects} projects, ${projectStats.viewable} viewable builds and ${projectStats.live} live applications. Nothing has been retired.`}
      />

      {/* ---------------- Controls ---------------- */}
      <section className="shell scrim" aria-label="Filter and sort projects">
        <div className="surface flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <IconSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <label className="sr-only" htmlFor="project-search">
                Search projects
              </label>
              <input
                id="project-search"
                type="search"
                value={q}
                onChange={(e) => setParam('q', e.target.value)}
                placeholder="Search by title, category, note or technology…"
                className="field pl-11"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <label className="text-xs font-medium text-muted" htmlFor="project-sort">
                  Sort
                </label>
                <select
                  id="project-sort"
                  value={sort}
                  onChange={(e) => setParam('sort', e.target.value)}
                  className="field w-auto py-2"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.key} value={o.key}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="flex items-center gap-1 rounded-full border p-1"
                role="group"
                aria-label="View mode"
              >
                {(
                  [
                    { key: 'grid', label: 'Grid', Icon: IconGrid },
                    { key: 'list', label: 'List', Icon: IconList },
                  ] as const
                ).map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setParam('view', key)}
                    aria-pressed={view === key}
                    className={`grid h-8 w-8 place-items-center rounded-full transition ${
                      view === key ? 'bg-violet/20 text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <Icon width={16} height={16} />
                    <span className="sr-only">{label} view</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category chips, in the archive's own order. */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', ...CATEGORY_ORDER].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setParam('cat', c)}
                aria-pressed={cat === c}
                className={`chip ${cat === c ? 'chip-on' : ''}`}
              >
                {c}
              </button>
            ))}

            <label className="ml-auto flex cursor-pointer select-none items-center gap-2 text-xs text-muted">
              <input
                type="checkbox"
                checked={!showOlder}
                onChange={(e) => setParam('older', e.target.checked ? '0' : '1')}
                className="h-4 w-4 accent-violet"
              />
              Hide older versions
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
            <p className="text-sm text-muted" role="status" aria-live="polite">
              Showing <span className="font-semibold text-ink">{visible.length}</span> of{' '}
              {projects.length} builds
              {cat !== 'All' && <> in {cat}</>}
              {q && <> matching &ldquo;{q}&rdquo;</>}
            </p>
            {filtersActive && (
              <button type="button" onClick={clearFilters} className="btn-ghost text-sm">
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- Results ---------------- */}
      <section className="shell pb-20 pt-10">
        {visible.length === 0 ? (
          <div className="surface scrim flex flex-col items-center gap-4 px-6 py-16 text-center">
            <p className="font-display text-xl text-ink">No projects match those filters</p>
            <p className="max-w-md text-sm text-muted">
              Try a different category, clear the search, or show older versions to widen the
              results.
            </p>
            <button type="button" onClick={clearFilters} className="btn-primary">
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {showFeaturedStrip && featured.length > 0 && (
              <div className="mb-14">
                <h2 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-shard">
                  Featured
                </h2>
                <div className={containerClass}>
                  {featured.map((p) => (
                    <ProjectCard key={p.id} project={p} view={view} />
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-14">
              {grouped.map(({ category, items }) => (
                <div key={category}>
                  <h2 className="mb-5 flex flex-wrap items-baseline gap-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-shard">
                    {CATEGORY_LABELS[category] ?? category}
                    <span className="text-xs font-normal normal-case tracking-normal text-muted">
                      {items.length}
                    </span>
                  </h2>
                  <div className={containerClass}>
                    {items.map((p) => (
                      <ProjectCard key={p.id} project={p} view={view} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
