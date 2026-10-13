import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

/**
 * Reveals its children once, when they first scroll into view.
 *
 * The element occupies its final space from the very first paint (only opacity
 * and a small translate animate), so revealing never shifts layout. Under
 * reduced motion the content is simply visible immediately.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  /** Stagger in milliseconds, for lists. */
  delay?: number;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: shown ? 1 : 0,
              transform: shown ? 'none' : 'translateY(14px)',
              transition: `opacity .6s cubic-bezier(.2,.7,.3,1) ${delay}ms, transform .6s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
