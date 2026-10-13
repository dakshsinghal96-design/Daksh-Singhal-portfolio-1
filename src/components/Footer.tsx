import { Link } from 'react-router-dom';
import { hasChannel, profile } from '../data/profile';
import { IconArrowUp, IconInstagram, IconLinkedIn, IconMail } from './icons';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

const QUICK_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const reduced = usePrefersReducedMotion();
  const { email, linkedin, instagram } = profile.contact;

  // Only channels with real values are rendered — no dead icons.
  const socials = [
    hasChannel(email) && {
      key: 'email',
      href: `mailto:${email.value}`,
      label: 'Email',
      Icon: IconMail,
      external: false,
    },
    hasChannel(linkedin) && {
      key: 'linkedin',
      href: linkedin.value,
      label: 'LinkedIn',
      Icon: IconLinkedIn,
      external: true,
    },
    hasChannel(instagram) && {
      key: 'instagram',
      href: instagram.value,
      label: 'Instagram',
      Icon: IconInstagram,
      external: true,
    },
  ].filter(Boolean) as {
    key: string;
    href: string;
    label: string;
    Icon: typeof IconMail;
    external: boolean;
  }[];

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });

  return (
    <footer className="relative z-10 mt-24 border-t bg-deep/50 backdrop-blur-xl">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="font-display text-base font-bold text-ink hover:text-violet">
            {profile.wordmark}
          </Link>
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with curiosity.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted transition hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ key, href, label, Icon, external }) => (
            <a
              key={key}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="grid h-10 w-10 place-items-center rounded-full border text-muted transition hover:border-violet/50 hover:text-ink"
              aria-label={external ? `${label} (opens in a new tab)` : label}
            >
              <Icon />
            </a>
          ))}
          <button
            type="button"
            onClick={toTop}
            className="grid h-10 w-10 place-items-center rounded-full border text-muted transition hover:border-violet/50 hover:text-ink"
            aria-label="Back to top"
          >
            <IconArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
