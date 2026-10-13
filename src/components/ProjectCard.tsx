import type { Project } from '../data/projects';
import { buildUrl, formatDate, formatSize, STATUS_LABEL } from '../lib/projectHelpers';
import { IconDownload, IconExternal } from './icons';

/**
 * A single archive record.
 *
 * Actions are derived strictly from what the archive says exists:
 *   • live      → "Open live" to the external deployment
 *   • viewable  → "View" the in-repo build, plus "Download" for single files
 *   • source    → no actions at all
 * A source-only project therefore never shows a View or Open button.
 */
export default function ProjectCard({
  project,
  view = 'grid',
}: {
  project: Project;
  view?: 'grid' | 'list';
}) {
  const { title, category, date, note, sizeKb, status, tech, isOlderVersion, featured, limitation } =
    project;

  /**
   * Shown whenever the published build is incomplete. Deliberately not styled
   * as an error — the project is still worth opening, the notice just stops the
   * card from promising more than the build delivers.
   */
  const limitationNotice = limitation && (
    <p className="flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-xs leading-relaxed text-amber-100/90">
      <span aria-hidden="true" className="mt-px font-semibold">
        !
      </span>
      <span>{limitation}</span>
    </p>
  );

  const statusTone =
    status === 'live'
      ? 'border-mint/45 bg-mint/10 text-mint'
      : status === 'source'
        ? 'border-muted/30 bg-muted/10 text-muted'
        : 'border-shard/45 bg-shard/10 text-shard';

  const actions = (
    <>
      {status === 'live' && project.liveUrl && (
        <a
          className="btn-primary"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open live
          <IconExternal aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}

      {status === 'viewable' && project.href && (
        <>
          <a
            className="btn-secondary"
            href={buildUrl(project.href)}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
            <IconExternal aria-hidden="true" />
            <span className="sr-only">{title} (opens in a new tab)</span>
          </a>
          {project.downloadable && (
            <a className="btn-ghost" href={buildUrl(project.href)} download>
              <IconDownload aria-hidden="true" />
              Download
              <span className="sr-only">{title}</span>
            </a>
          )}
        </>
      )}
    </>
  );

  const meta = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted">
      <span className={`rounded-full border px-2.5 py-1 font-semibold ${statusTone}`}>
        {STATUS_LABEL[status]}
      </span>
      <span className="rounded-full border px-2.5 py-1">{category}</span>
      {date && <time dateTime={date}>{formatDate(date)}</time>}
      {sizeKb ? <span>{formatSize(sizeKb)}</span> : null}
      {isOlderVersion && (
        <span className="rounded-full border border-dashed px-2.5 py-1">older version</span>
      )}
    </div>
  );

  const tags = tech.length > 0 && (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-violet/25 bg-violet/10 px-2 py-0.5 text-[11px] font-medium text-ink/85"
        >
          {t}
        </li>
      ))}
    </ul>
  );

  if (view === 'list') {
    return (
      <article
        className={`surface surface-hover flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between ${
          isOlderVersion ? 'opacity-80' : ''
        }`}
      >
        <div className="min-w-0 space-y-2.5">
          <h3 className="font-display text-base font-semibold text-ink">
            {title}
            {featured && <span className="ml-2 text-xs font-semibold text-violet">Featured</span>}
          </h3>
          {note && <p className="text-sm text-muted">{note}</p>}
          {meta}
          {tags}
          {limitationNotice}
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>
      </article>
    );
  }

  return (
    <article
      className={`surface surface-hover flex h-full flex-col gap-4 p-5 ${
        isOlderVersion ? 'opacity-80' : ''
      }`}
    >
      <div className="space-y-2.5">
        <h3 className="font-display text-base font-semibold leading-snug text-ink">
          {title}
          {featured && <span className="ml-2 text-xs font-semibold text-violet">Featured</span>}
        </h3>
        {note && <p className="text-sm leading-relaxed text-muted">{note}</p>}
      </div>
      {meta}
      {tags}
      {limitationNotice}
      <div className="mt-auto flex flex-wrap gap-2 pt-1">{actions}</div>
    </article>
  );
}
