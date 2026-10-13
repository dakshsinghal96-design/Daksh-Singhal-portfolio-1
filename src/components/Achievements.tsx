import { useMemo, useState } from 'react';
import AchievementCard from './AchievementCard';
import Dialog from './Dialog';
import EmptyState from './EmptyState';
import { SectionHeading } from './headings';
import { IconExternal } from './icons';
import {
  achievementYears,
  achievements,
  usedAchievementCategories,
  type Achievement,
} from '../data/achievements';
import { formatDate } from '../lib/projectHelpers';

const PAGE_SIZE = 9;

/**
 * Achievements browser.
 *
 * Built to hold 40+ records: featured row, category and year filters, "Load
 * more" pagination and an accessible detail dialog. With no records supplied it
 * degrades to a single honest empty state rather than showing demo data.
 */
export default function Achievements() {
  const [category, setCategory] = useState('All');
  const [year, setYear] = useState('All');
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [active, setActive] = useState<Achievement | null>(null);

  const categories = usedAchievementCategories();
  const years = achievementYears();

  const filtered = useMemo(
    () =>
      achievements
        .filter((a) => category === 'All' || a.category === category)
        .filter((a) => year === 'All' || a.date.startsWith(year))
        .sort((a, b) => b.date.localeCompare(a.date)),
    [category, year]
  );

  const featured = useMemo(() => achievements.filter((a) => a.featured).slice(0, 6), []);
  const filtersActive = category !== 'All' || year !== 'All';
  const shown = filtered.slice(0, limit);

  const reset = (fn: () => void) => {
    fn();
    setLimit(PAGE_SIZE); // a new filter always starts from the first page
  };

  return (
    <section className="shell pb-20" aria-labelledby="achievements-heading">
      <SectionHeading
        eyebrow="Recognition"
        title="Achievements"
        id="achievements-heading"
        description={
          achievements.length > 0
            ? 'Awards, hackathons, certifications and competitions.'
            : undefined
        }
      />

      {achievements.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="Achievement details are being added."
            description="Awards, hackathons, certifications and competitions will appear here once the records are confirmed."
          />
        </div>
      ) : (
        <>
          {!filtersActive && featured.length > 0 && (
            <div className="mt-10">
              <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-shard">
                Featured
              </h3>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((a) => (
                  <li key={a.id}>
                    <AchievementCard achievement={a} onOpen={setActive} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {['All', ...categories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => reset(() => setCategory(c))}
                aria-pressed={category === c}
                className={`chip ${category === c ? 'chip-on' : ''}`}
              >
                {c}
              </button>
            ))}

            {years.length > 1 && (
              <div className="ml-auto flex items-center gap-2">
                <label className="text-xs font-medium text-muted" htmlFor="achievement-year">
                  Year
                </label>
                <select
                  id="achievement-year"
                  value={year}
                  onChange={(e) => reset(() => setYear(e.target.value))}
                  className="field w-auto py-2"
                >
                  <option value="All">All</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <p className="mt-5 text-sm text-muted" role="status" aria-live="polite">
            Showing <span className="font-semibold text-ink">{shown.length}</span> of{' '}
            {filtered.length}
          </p>

          {filtered.length === 0 ? (
            <div className="mt-6">
              <EmptyState
                compact
                title="No achievements match those filters"
                action={
                  <button
                    type="button"
                    className="btn-secondary mt-1"
                    onClick={() =>
                      reset(() => {
                        setCategory('All');
                        setYear('All');
                      })
                    }
                  >
                    Clear filters
                  </button>
                }
              />
            </div>
          ) : (
            <>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((a) => (
                  <li key={a.id}>
                    <AchievementCard achievement={a} onOpen={setActive} />
                  </li>
                ))}
              </ul>

              {limit < filtered.length && (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setLimit((l) => l + PAGE_SIZE)}
                  >
                    Load more ({filtered.length - limit} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}

      <Dialog
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.title ?? ''}
        footer={
          active?.certificateUrl && (
            <a
              className="btn-primary"
              href={active.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View certificate
              <IconExternal aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )
        }
      >
        {active && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
              <span className="rounded-full border border-violet/35 bg-violet/10 px-2.5 py-1 font-medium text-ink/85">
                {active.category}
              </span>
              <span>{/^\d{4}$/.test(active.date) ? active.date : formatDate(active.date)}</span>
            </div>
            <p className="text-sm font-medium text-ink">{active.issuerOrEvent}</p>
            {active.image && (
              <img
                src={active.image}
                alt=""
                loading="lazy"
                className="w-full rounded-xl object-cover"
              />
            )}
            <p className="text-sm leading-relaxed text-muted">{active.description}</p>
          </div>
        )}
      </Dialog>
    </section>
  );
}
