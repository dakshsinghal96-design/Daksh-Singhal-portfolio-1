import { useCallback, useMemo, useRef, useState, type ReactNode } from 'react';
import { ToastContext } from './toastContext';

/**
 * Minimal toast system.
 *
 * The live region is always mounted and always in the DOM, which is what makes
 * announcements reliable — screen readers ignore a region that appears at the
 * same moment as its text. `role="status"` keeps it polite so it never
 * interrupts what the user is doing.
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  const timer = useRef<number | undefined>(undefined);

  const show = useCallback((text: string) => {
    window.clearTimeout(timer.current);
    setMessage(text);
    timer.current = window.setTimeout(() => setMessage(''), 2600);
  }, []);

  const value = useMemo(() => show, [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4"
      >
        {message && (
          <div className="animate-toast-in rounded-full border border-violet/40 bg-deep/95 px-5 py-2.5 text-sm font-medium text-ink shadow-lift backdrop-blur-xl">
            {message}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
