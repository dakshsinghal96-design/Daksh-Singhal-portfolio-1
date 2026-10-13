import type { Achievement } from '../data/achievements';
import { formatDate } from '../lib/projectHelpers';

/**
 * One achievement, as a button that opens the detail dialog. It is a real
 * <button> rather than a clickable <div>, so keyboard and screen-reader users
 * get the same affordance as a mouse user.
 */
export default function AchievementCard({
  achievement,
  onOpen,
}: {
  achievement: Achievement;
  onOpen: (a: Achievement) => void;
}) {
  const { title, issuerOrEvent, date, category, description, image, featured } = achievement;
  // Records may carry a bare year rather than a full date.
  const when = /^\d{4}$/.test(date) ? date : formatDate(date);

  return (
    <button
      type="button"
      onClick={() => onOpen(achievement)}
      className="surface surface-hover flex h-full w-full flex-col gap-3 p-5 text-left"
      aria-label={`${title} — view details`}
    >
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full rounded-xl object-cover"
        />
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
        <span className="rounded-full border border-violet/35 bg-violet/10 px-2.5 py-1 font-medium text-ink/85">
          {category}
        </span>
        <span>{when}</span>
        {featured && <span className="font-semibold text-violet">Featured</span>}
      </div>
      <h3 className="font-display text-base font-semibold leading-snug text-ink">{title}</h3>
      <p className="text-sm text-muted">{issuerOrEvent}</p>
      {description && (
        <p className="line-clamp-3 text-sm leading-relaxed text-muted/90">{description}</p>
      )}
    </button>
  );
}
