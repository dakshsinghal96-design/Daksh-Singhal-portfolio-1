import { useState, type ComponentType, type SVGProps } from 'react';
import { useToast } from './toastContext';
import { IconCheck, IconCopy, IconExternal } from './icons';

/**
 * One contact channel: an icon, a visible label, a real protocol link and an
 * optional copy button. Rendered only when the caller has a real value, so the
 * page never shows a dead row.
 */
export default function ContactCard({
  Icon,
  label,
  value,
  href,
  external = false,
  copyable = false,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  copyable?: boolean;
}) {
  const toast = useToast();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast(`${label} copied to clipboard`);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be denied outright; say so rather than failing mutely.
      toast(`Could not copy — ${value}`);
    }
  };

  return (
    <div className="surface surface-hover flex items-center gap-4 p-5">
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-violet/30 bg-violet/10 text-violet"
      >
        <Icon width={19} height={19} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
        {href ? (
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="mt-0.5 inline-flex items-center gap-1.5 break-all font-display text-sm text-ink transition hover:text-violet"
          >
            {value}
            {external && (
              <>
                <IconExternal width={13} height={13} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </>
            )}
          </a>
        ) : (
          <p className="mt-0.5 break-all font-display text-sm text-ink">{value}</p>
        )}
      </div>

      {copyable && (
        <button
          type="button"
          onClick={copy}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border text-muted transition hover:border-violet/50 hover:text-ink"
          aria-label={`Copy ${label.toLowerCase()}`}
        >
          {copied ? <IconCheck width={15} height={15} /> : <IconCopy width={15} height={15} />}
        </button>
      )}
    </div>
  );
}
