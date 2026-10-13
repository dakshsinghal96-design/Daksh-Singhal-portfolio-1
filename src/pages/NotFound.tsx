import { Link, useLocation } from 'react-router-dom';
import GradientText from '../components/GradientText';
import Seo from '../components/Seo';
import { IconArrowRight } from '../components/icons';
import { profile } from '../data/profile';
import { projectStats } from '../data/projects';

export default function NotFound() {
  const { pathname } = useLocation();

  // A mistyped archive path is the likeliest way to land here, so point the
  // visitor at the archive rather than just apologising.
  const looksLikeArchivePath = /^\/(p|s)\//.test(pathname);

  return (
    <>
      <Seo
        title={`Page not found — ${profile.name}`}
        description="This page does not exist. Browse the project archive instead."
      />

      <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <div className="scrim flex flex-col items-center">
          <p className="eyebrow mb-4">Error 404</p>

          <h1 className="font-display text-6xl font-bold sm:text-8xl">
            <GradientText
              colors={['#A855F7', '#4079FF', '#40FFAA', '#4079FF', '#A855F7']}
              animationSpeed={5}
            >
              404
            </GradientText>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {looksLikeArchivePath ? (
              <>
                No archived build lives at{' '}
                <code className="break-all text-ink/85">{pathname}</code>. It may have been renamed
                — the full archive lists all {projectStats.totalBuilds} builds.
              </>
            ) : (
              <>
                There is nothing at <code className="break-all text-ink/85">{pathname}</code>. The
                link may be out of date.
              </>
            )}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" to="/projects">
              Browse projects
              <IconArrowRight aria-hidden="true" />
            </Link>
            <Link className="btn-secondary" to="/">
              Back home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
