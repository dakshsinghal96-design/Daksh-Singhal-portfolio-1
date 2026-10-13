import { useEffect, useState } from 'react';

/** Subscribes to a media query, SSR-safe and cleaned up on unmount. */
export function useMediaQuery(query: string, initial = false): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return initial;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

/** True when the visitor has asked the OS to reduce motion. */
export const usePrefersReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)', false);

/**
 * Best-effort "this is a small or low-powered device" signal, used to dial the
 * shard field down. Coarse pointer plus a narrow viewport is a better proxy
 * than user-agent sniffing, and `deviceMemory`/`hardwareConcurrency` catch
 * weak laptops that a width check would miss.
 */
export function useLowPowerDevice(): boolean {
  const narrow = useMediaQuery('(max-width: 900px)', false);
  const coarse = useMediaQuery('(pointer: coarse)', false);
  const [weak, setWeak] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4;
    const fewCores =
      typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
    setWeak(lowMemory || fewCores);
  }, []);

  return narrow || coarse || weak;
}
