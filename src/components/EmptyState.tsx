import type { ReactNode } from 'react';

/**
 * Neutral placeholder for sections whose real content has not been supplied
 * yet. It states plainly that content is being added — it never fabricates a
 * sample record, and it never renders a raw `[PLACEHOLDER]` token.
 */
export default function EmptyState({
  title,
  description,
  action,
  compact = false,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`surface flex flex-col items-center gap-3 border-dashed text-center ${
        compact ? 'px-5 py-8' : 'px-6 py-14'
      }`}
    >
      <p className="font-display text-lg text-ink">{title}</p>
      {description && <p className="max-w-md text-sm leading-relaxed text-muted">{description}</p>}
      {action}
    </div>
  );
}
