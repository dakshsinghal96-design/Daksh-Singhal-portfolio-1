import { useEffect, useState } from 'react';

export type AssetState = 'checking' | 'available' | 'missing';

/**
 * Probes whether a static asset really exists.
 *
 * The SPA rewrite means a missing path still answers 200 — with index.html.
 * So a bare `response.ok` proves nothing; the content type has to match what
 * we asked for. This is what lets the résumé button refuse to pretend it works
 * when the PDF has not been added yet.
 */
export function useAssetAvailable(url: string, expectedType: string): AssetState {
  const [state, setState] = useState<AssetState>('checking');

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    fetch(url, { method: 'HEAD', signal: controller.signal })
      .then((res) => {
        if (cancelled) return;
        const type = res.headers.get('content-type') ?? '';
        setState(res.ok && type.includes(expectedType) ? 'available' : 'missing');
      })
      .catch(() => {
        if (!cancelled) setState('missing');
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [url, expectedType]);

  return state;
}
