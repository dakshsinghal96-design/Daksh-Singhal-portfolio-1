import { useState } from 'react';
import { profile } from '../data/profile';

/**
 * Portrait frame.
 *
 * Falls back to an initials monogram if the photograph is absent or fails to
 * decode. No stand-in face is ever generated. The frame reserves its aspect
 * ratio up front so swapping between photo and monogram causes no layout shift.
 */
export default function ProfilePortrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
      {/* Soft glow behind the frame, purely decorative. */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-70 blur-2xl"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 35%, rgba(168,85,247,.45), transparent 70%),' +
            'radial-gradient(55% 55% at 70% 80%, rgba(64,121,255,.32), transparent 70%)',
        }}
      />

      <div className="surface overflow-hidden rounded-[1.75rem] p-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] bg-deep">
          {!failed ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              loading="eager"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              // Theme-aware: a hardcoded dark ground would leave a black panel
              // sitting in the middle of the light theme.
              className="grid h-full w-full place-items-center bg-[radial-gradient(70%_70%_at_50%_30%,rgb(var(--c-raised)),rgb(var(--c-base))_70%)]"
            >
              <span
                aria-hidden="true"
                className="font-display text-7xl font-bold tracking-tight text-shard/70"
              >
                {profile.initials}
              </span>
              <span className="sr-only">
                Portrait of {profile.name} is not available yet.
              </span>
            </div>
          )}
        </div>
      </div>

      <p className="surface absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-ink shadow-lift">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-mint" />
        {profile.badge}
      </p>
    </div>
  );
}
