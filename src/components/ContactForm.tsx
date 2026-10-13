import { useId, useRef, useState, type FormEvent } from 'react';
import { hasChannel, profile } from '../data/profile';

type FieldName = 'name' | 'email' | 'subject' | 'message';
type Errors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMPTY = { name: '', email: '', subject: '', message: '' };

/** Two submissions per minute is generous for a human and useless for a bot. */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 2;
const RATE_KEY = 'ds-contact-submits';

function recentSubmissions(): number[] {
  try {
    const raw = sessionStorage.getItem(RATE_KEY);
    const list: number[] = raw ? JSON.parse(raw) : [];
    return list.filter((t) => Date.now() - t < RATE_WINDOW_MS);
  } catch {
    return [];
  }
}

function recordSubmission(times: number[]) {
  try {
    sessionStorage.setItem(RATE_KEY, JSON.stringify([...times, Date.now()]));
  } catch {
    /* storage blocked — rate limiting degrades, the form still works */
  }
}

function validate(values: typeof EMPTY): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That does not look like a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  if (!values.message.trim()) errors.message = 'Please write a message.';
  else if (values.message.trim().length < 10)
    errors.message = 'Please write at least 10 characters.';
  return errors;
}

/**
 * Contact form.
 *
 * Two honest modes, decided by whether a backend has been configured:
 *   • endpoint set  → the message is POSTed, and success is only reported when
 *     the server actually accepts it.
 *   • no endpoint   → the form opens a prefilled mail draft and says so on the
 *     button itself. It never claims a message was sent.
 * If neither an endpoint nor an email address exists, the form is not rendered
 * at all — the page explains what is missing instead.
 */
export default function ContactForm() {
  const ids = {
    name: useId(),
    email: useId(),
    subject: useId(),
    message: useId(),
  };
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  // Honeypot: invisible to people, irresistible to naive bots.
  const honeypot = useRef<HTMLInputElement>(null);

  const endpoint = profile.contactFormEndpoint;
  const email = profile.contact.email;
  const mailtoMode = !endpoint && hasChannel(email);

  const set = (field: FieldName, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    // Clear a field's error as soon as the user starts fixing it.
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError('');

    if (honeypot.current?.value) {
      // Silently drop: telling a bot it was caught only helps the bot.
      setStatus('sent');
      return;
    }

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(ids[Object.keys(found)[0] as FieldName]);
      first?.focus();
      return;
    }

    const times = recentSubmissions();
    if (times.length >= RATE_MAX) {
      setStatus('error');
      setServerError('Too many messages just now. Please wait a minute and try again.');
      return;
    }

    if (mailtoMode) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      window.location.href = `mailto:${email!.value}?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(body)}`;
      recordSubmission(times);
      // Deliberately NOT 'sent': the draft still has to be sent by the user.
      setStatus('idle');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(endpoint!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      recordSubmission(times);
      setStatus('sent');
      setValues(EMPTY);
    } catch (err) {
      setStatus('error');
      setServerError(
        err instanceof Error
          ? `Message could not be sent (${err.message}).`
          : 'Message could not be sent.'
      );
    }
  };

  if (!endpoint && !mailtoMode) {
    return (
      <div className="surface border-dashed p-6">
        <p className="font-display text-base text-ink">Contact form is not configured yet.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          It needs either a form endpoint (<code className="text-ink/80">contactFormEndpoint</code>)
          or an email address in <code className="text-ink/80">src/data/profile.ts</code>. Until one
          exists, the form is hidden rather than shown as a button that does nothing.
        </p>
      </div>
    );
  }

  if (status === 'sent') {
    return (
      <div className="surface p-6" role="status" aria-live="polite">
        <p className="font-display text-lg text-ink">Message sent.</p>
        <p className="mt-2 text-sm text-muted">Thanks for reaching out — I&rsquo;ll reply soon.</p>
        <button type="button" className="btn-secondary mt-5" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    );
  }

  const field = (
    name: FieldName,
    label: string,
    type: 'text' | 'email' | 'textarea',
    autoComplete?: string
  ) => {
    const errorId = `${ids[name]}-error`;
    const invalid = Boolean(errors[name]);
    const shared = {
      id: ids[name],
      name,
      value: values[name],
      'aria-invalid': invalid,
      'aria-describedby': invalid ? errorId : undefined,
      className: `field ${invalid ? 'border-red-400/70' : ''}`,
      onChange: (e: { target: { value: string } }) => set(name, e.target.value),
    };

    return (
      <div>
        <label htmlFor={ids[name]} className="mb-1.5 block text-sm font-medium text-ink">
          {label} <span className="text-muted">*</span>
        </label>
        {type === 'textarea' ? (
          <textarea {...shared} rows={6} />
        ) : (
          <input {...shared} type={type} autoComplete={autoComplete} />
        )}
        {invalid && (
          <p id={errorId} className="mt-1.5 text-sm text-red-300">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot. Hidden from sight and from assistive technology, but a bot
          filling every input will trip it. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="ds-website">Website</label>
        <input id="ds-website" ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {field('name', 'Name', 'text', 'name')}
        {field('email', 'Email', 'email', 'email')}
      </div>
      {field('subject', 'Subject', 'text')}
      {field('message', 'Message', 'textarea')}

      {status === 'error' && serverError && (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {serverError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : mailtoMode ? 'Open email draft' : 'Send message'}
        </button>
        {mailtoMode && (
          <p className="text-xs text-muted">
            No form backend is configured, so this opens a prefilled draft in your mail app.
          </p>
        )}
      </div>
    </form>
  );
}
