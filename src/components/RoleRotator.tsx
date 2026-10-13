import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

/**
 * Cycles through the approved role labels.
 *
 * The full list is always present in the DOM for assistive technology (as a
 * comma-separated sentence), while sighted users see one at a time. Under
 * reduced motion the rotation stops and the list renders statically, so the
 * information is never motion-dependent.
 */
export default function RoleRotator({ roles }: { roles: readonly string[] }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || roles.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, [reduced, roles.length]);

  if (reduced) {
    return <span className="text-shard">{roles.join(' · ')}</span>;
  }

  return (
    <>
      <span aria-hidden="true" className="relative inline-block align-bottom">
        <span
          key={index}
          className="inline-block animate-fade-up text-shard"
          style={{ animationDuration: '.45s' }}
        >
          {roles[index]}
        </span>
      </span>
      <span className="sr-only">{roles.join(', ')}</span>
    </>
  );
}
