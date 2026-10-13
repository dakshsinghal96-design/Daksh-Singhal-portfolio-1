/**
 * GradientText — an animated gradient sweep painted onto real text.
 *
 * The text stays real text: selectable, searchable, screen-reader friendly and
 * whatever element the caller asks for. The gradient is a background clipped to
 * the glyphs, never an image or a canvas. Under reduced motion the sweep stops
 * and the gradient sits still; where `background-clip: text` is unsupported the
 * stylesheet falls the text back to a solid violet.
 */
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

export interface GradientTextProps {
  children: ReactNode;
  /** First and last colour should match so the loop has no visible seam. */
  colors?: string[];
  /** Seconds per full sweep. */
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  /** Rendered element. Defaults to `span` so callers own the heading level. */
  as?: ElementType;
  style?: CSSProperties;
}

export default function GradientText({
  children,
  colors = ['#A855F7', '#4079FF', '#40FFAA', '#4079FF', '#A855F7'],
  animationSpeed = 3,
  showBorder = false,
  className = '',
  as: Tag = 'span',
  style,
}: GradientTextProps) {
  const reduced = usePrefersReducedMotion();

  if (import.meta.env.DEV && colors.length > 1 && colors[0] !== colors[colors.length - 1]) {
    console.warn(
      '[GradientText] First and last colours differ, so the loop will visibly seam:',
      colors
    );
  }

  const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;

  const content = (
    <Tag
      className={`gradient-text ${reduced ? '' : 'animate-gradient-pan'} ${className}`.trim()}
      style={{
        backgroundImage: gradient,
        ['--gt-duration' as string]: `${animationSpeed}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );

  if (!showBorder) return content;

  return (
    <span className="relative inline-block">
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 rounded-xl ${reduced ? '' : 'animate-gradient-pan'}`}
        style={{
          backgroundImage: gradient,
          backgroundSize: '300% 100%',
          ['--gt-duration' as string]: `${animationSpeed}s`,
          padding: 1,
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {content}
    </span>
  );
}
