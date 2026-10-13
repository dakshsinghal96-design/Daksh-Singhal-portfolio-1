import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { useTheme } from '../hooks/themeContext';
import { IconClose, IconMenu, IconMoon, IconSun } from './icons';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      className={`grid h-10 w-10 place-items-center rounded-full border text-muted transition
        hover:border-violet/50 hover:text-ink ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on navigation. Every route change dismisses the sheet, which also
  // covers taps on the link for the page you are already on.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes and returns focus to the button that opened the sheet.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      // Keep Tab inside the open sheet; it covers the page.
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
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
    // Stop the page behind the sheet from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('a[href]')?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b bg-base/70 backdrop-blur-xl">
        <nav className="shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
          <NavLink
            to="/"
            className="font-display text-lg font-bold tracking-tight text-ink transition hover:text-violet"
          >
            {profile.wordmark}
            <span className="sr-only"> — {profile.name}, home</span>
          </NavLink>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {/* Active state is not colour-only: an underline bar
                          carries the same information. */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-violet transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border text-muted transition hover:border-violet/50 hover:text-ink md:hidden"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div
          id={panelId}
          ref={panelRef}
          className="border-b bg-base/95 backdrop-blur-xl md:hidden"
        >
          <ul className="shell flex flex-col py-3">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition ${
                      isActive ? 'bg-violet/15 text-ink' : 'text-muted hover:bg-raised/70 hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-violet">
                          Current
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
