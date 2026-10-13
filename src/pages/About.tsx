import { Link } from 'react-router-dom';
import Achievements from '../components/Achievements';
import EmptyState from '../components/EmptyState';
import ResumeButton from '../components/ResumeButton';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/headings';
import { IconArrowRight } from '../components/icons';
import { hasEducation, profile } from '../data/profile';
import { journey } from '../data/journey';
import { projectStats } from '../data/projects';

const DRIVERS = [
  {
    title: 'Curiosity that has to be tested',
    body: 'An idea only becomes interesting to me once it is running. Reading about a technique is the starting point; getting it working is the actual goal.',
  },
  {
    title: 'Interfaces people can feel',
    body: 'I am drawn to input that goes beyond a click — a hand in front of a camera, a scan, a scroll that drives a story. Interaction is where technology becomes tangible.',
  },
  {
    title: 'Finishing things',
    body: 'A prototype that nobody can open does not count. I would rather ship a small build than describe a large one.',
  },
];

const HOW_I_WORK = [
  { step: 'Idea', body: 'Write down what the thing should do before writing any code.' },
  { step: 'Research', body: 'Find out what already exists and what the hard part will be.' },
  { step: 'Prototype', body: 'Build the smallest version that proves the idea works.' },
  { step: 'Test', body: 'Use it, break it, watch someone else try it.' },
  { step: 'Improve', body: 'Fix what failed and cut what nobody needed.' },
  { step: 'Present', body: 'Ship it somewhere it can actually be opened.' },
];

export default function About() {
  const education = profile.education;

  return (
    <>
      <Seo
        title={`About — ${profile.name}`}
        description="First-year B.Tech student exploring AI, computer vision, gesture interfaces and creative technology by building and shipping real projects."
      />

      <PageHeader
        eyebrow="About"
        title="My Story"
        gradient
        description={profile.story}
      >
        <div className="flex flex-wrap gap-3">
          <ResumeButton />
          <Link className="btn-secondary" to="/contact">
            Contact me
            <IconArrowRight aria-hidden="true" />
          </Link>
        </div>
      </PageHeader>

      {/* ---------------- Education ---------------- */}
      <section className="shell pb-16" aria-labelledby="education-heading">
        <SectionHeading eyebrow="Background" title="Education" id="education-heading" />
        <div className="mt-8">
          {hasEducation(education) ? (
            <div className="surface grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Institution', education.college],
                ['Programme', education.branch],
                ['Location', education.location],
                ['Expected graduation', education.graduationYear],
              ]
                .filter(([, value]) => Boolean(value))
                .map(([label, value]) => (
                  <div key={label as string}>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {label}
                    </p>
                    <p className="mt-1.5 font-display text-base text-ink">{value}</p>
                  </div>
                ))}
            </div>
          ) : (
            <EmptyState
              title="Education details are being added."
              description="Institution, programme, location and expected graduation year will appear here once confirmed."
            />
          )}
        </div>
      </section>

      {/* ---------------- What drives me ---------------- */}
      <section className="shell pb-16" aria-labelledby="drives-heading">
        <SectionHeading eyebrow="Motivation" title="What drives me" id="drives-heading" />
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {DRIVERS.map((d, i) => (
            <li key={d.title}>
              <Reveal delay={i * 70} className="h-full">
                <div className="surface h-full p-6">
                  <h3 className="font-display text-base font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------------- How I work ---------------- */}
      <section className="shell pb-16" aria-labelledby="process-heading">
        <SectionHeading
          eyebrow="Process"
          title="How I work"
          id="process-heading"
          description="Idea → research → prototype → test → improve → present."
        />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_I_WORK.map((s, i) => (
            <li key={s.step}>
              <Reveal delay={i * 50} className="h-full">
                <div className="surface flex h-full gap-4 p-5">
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-violet/35 bg-violet/10 font-display text-sm font-bold text-violet"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-ink">{s.step}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- Journey ---------------- */}
      <section className="shell pb-16" aria-labelledby="journey-heading">
        <SectionHeading
          eyebrow="Timeline"
          title="How the work has grown"
          id="journey-heading"
          description={`Traced from the archive itself — ${projectStats.totalBuilds} builds, from first web experiments to deployed applications.`}
        />
        <ol className="relative mt-10 space-y-8 border-l pl-6 sm:pl-8">
          {journey.map((j, i) => (
            <li key={j.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-violet bg-base sm:-left-[2.15rem]"
              />
              <Reveal delay={i * 70}>
                <p className="text-xs font-semibold uppercase tracking-wider text-shard">
                  {j.period}
                </p>
                <h3 className="mt-1.5 font-display text-lg text-ink">{j.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{j.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------------- Interests ---------------- */}
      <section className="shell pb-16" aria-labelledby="interests-heading">
        <SectionHeading eyebrow="Outside the work" title="Interests" id="interests-heading" />
        <div className="mt-8">
          {profile.interests.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {profile.interests.map((it) => (
                <li key={it} className="chip">
                  {it}
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              compact
              title="Interests are being added."
              description="This section stays empty until the details are confirmed."
            />
          )}
        </div>
      </section>

      <Achievements />
    </>
  );
}
