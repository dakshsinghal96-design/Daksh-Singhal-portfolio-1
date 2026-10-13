import type { ReactNode } from 'react';
import GradientText from './GradientText';

/**
 * GradientHeading — a real heading element whose text carries the animated
 * gradient. Reserved for a handful of short, important headings; body copy,
 * navigation and labels stay solid-coloured.
 */
export function GradientHeading({
  children,
  level = 2,
  className = '',
}: {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={className}>
      <GradientText
        colors={['#A855F7', '#4079FF', '#40FFAA', '#4079FF', '#A855F7']}
        animationSpeed={6}
      >
        {children}
      </GradientText>
    </Tag>
  );
}

/** Section heading with an optional eyebrow and supporting line. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  gradient = false,
  align = 'left',
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  gradient?: boolean;
  align?: 'left' | 'center';
  id?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      {gradient ? (
        <GradientHeading level={2} className="text-3xl sm:text-4xl">
          {title}
        </GradientHeading>
      ) : (
        <h2 id={id} className="text-3xl text-ink sm:text-4xl">
          {title}
        </h2>
      )}
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

/** Top-of-page header used by every route except Home. */
export function PageHeader({
  eyebrow,
  title,
  description,
  gradient = false,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  gradient?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className="scrim pb-10 pt-14 sm:pt-20">
      <div className="shell">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        {gradient ? (
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            <GradientText
              colors={['#A855F7', '#4079FF', '#40FFAA', '#4079FF', '#A855F7']}
              animationSpeed={6}
            >
              {title}
            </GradientText>
          </h1>
        ) : (
          <h1 className="text-4xl text-ink sm:text-5xl lg:text-6xl">{title}</h1>
        )}
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
