import { useEffect, useId, useRef, type ReactNode } from 'react';
import { IconClose } from './icons';

/**
 * Accessible modal dialog.
 *
 * Handles the four things a dialog must get right: it is announced as a modal,
 * Escape closes it, Tab stays inside it, and focus returns to whatever opened
 * it. The page behind is locked and marked inert to pointer traffic.
 */
export default function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    restoreRef.current = document.activeElement as HTMLElement | null;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the panel itself so the dialog's name is announced on open.
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-deep/80 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="surface relative max-h-[88dvh] w-full max-w-2xl overflow-y-auto rounded-b-none bg-raised/95 p-6 shadow-lift sm:rounded-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-6">
          <h2 id={titleId} className="text-xl text-ink sm:text-2xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border text-muted transition hover:border-violet/50 hover:text-ink"
            aria-label="Close dialog"
          >
            <IconClose />
          </button>
        </div>
        <div className="mt-5">{children}</div>
        {footer && <div className="mt-7 flex flex-wrap gap-3">{footer}</div>}
      </div>
    </div>
  );
}
