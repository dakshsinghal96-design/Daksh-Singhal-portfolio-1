import { Link } from 'react-router-dom';
import GradientText from '../components/GradientText';
import ProfilePortrait from '../components/ProfilePortrait';
import ProjectCard from '../components/ProjectCard';
import ResumeButton from '../components/ResumeButton';
import Reveal from '../components/Reveal';
import RoleRotator from '../components/RoleRotator';
import Seo from '../components/Seo';
import { SectionHeading } from '../components/headings';
import { IconArrowRight, IconCode, IconHand, IconLayers, IconSpark } from '../components/icons';
import { profile } from '../data/profile';
import { featuredProjects, projectStats } from '../data/projects';
import TextLoop from '../components/TextLoop';

const WHAT_I_BUILD = [
  {
    Icon: IconSpark,
    title: 'AI Prototypes',
    body: 'Assistant interfaces, command cores and scan-style demos that turn a model into something you can actually use.',
  },
  {
    Icon: IconHand,
    title: 'Gesture & Motion Interfaces',
    body: 'Camera-driven controls built on hand and pose tracking, where movement replaces the mouse.',
  },
  {
    Icon: IconCode,
    title: 'Web Experiences',
    body: 'Brand sites, product pages and scroll-driven stories built to feel fast and considered.',
  },
  {
    Icon: IconLayers,
    title: 'Simulations & Tools',
    body: 'Interactive models, record systems and utilities that make something complex easier to explore.',
  },
];

/** Stats read straight off the archive, so they can never drift out of date. */
const STATS = [
  { value: projectStats.projects, label: 'Projects' },
  { value: projectStats.viewable, label: 'Viewable builds' },
  { value: projectStats.live, label: 'Live apps' },
  { value: projectStats.totalBuilds, label: 'Total builds' },
];

export default function Home() {
  // Only asserts what is verifiably true: a name and the archive as a work list.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: profile.siteUrl,
    description: profile.intro,
    knowsAbout: [
      'Artificial Intelligence',
      'Computer Vision',
      'Web Development',
      'Interaction Design',
    ],
  };

  return (
    <>
      <Seo
        title={profile.seo.title}
        description={profile.seo.description}
        structuredData={structuredData}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="relative pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div className="scrim">
            <p className="eyebrow">{profile.role}</p>

            <h1 className="mt-5">
              <span className="block font-display text-2xl font-medium text-muted sm:text-3xl">
                Hi, I&rsquo;m
              </span>
              <GradientText
                colors={['#A855F7', '#4079FF', '#40FFAA', '#4079FF', '#A855F7']}
                animationSpeed={3}
                showBorder={false}
                className="hero-gradient-text mt-1 block font-display font-bold"
              >
                {profile.name}
              </GradientText>
            </h1>

            <p className="mt-5 font-display text-lg text-muted sm:text-xl">
              <RoleRotator roles={profile.roles} />
            </p>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-start gap-3">
              <Link className="btn-primary" to="/projects">
                View Projects
                <IconArrowRight aria-hidden="true" />
              </Link>
              <ResumeButton />
              <Link className="btn-secondary" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>

          <ProfilePortrait />
        </div>
      </section>

      {/* ---------------- Text Loop Marquee ---------------- */}
      <section className="relative -my-8 overflow-hidden lg:-my-12" aria-hidden="true">
        <TextLoop
          text="AI ✦ Web Dev ✦ Creative Tech ✦ Daksh Sinhghal"
          shape="wave"
          speed={90}
          direction="forward"
          separator="✦"
          curviness={90}
          fontSize={46}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="#5227FF"
          ribbonWidth={86}
          pauseOnHover
        />
      </section>

      {/* ---------------- Stats ---------------- */}
      <section className="pb-20" aria-labelledby="stats-heading">
        <div className="shell">
          <h2 id="stats-heading" className="sr-only">
            Archive at a glance
          </h2>
          <Reveal>
            <dl className="surface grid grid-cols-2 gap-px overflow-hidden bg-line/10 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-raised/60 px-5 py-7 text-center">
                  <dt className="order-2 mt-1.5 text-xs font-medium uppercase tracking-wider text-muted">
                    {s.label}
                  </dt>
                  <dd className="order-1 font-display text-3xl font-bold text-ink sm:text-4xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Featured projects ---------------- */}
      <section className="pb-20" aria-labelledby="featured-heading">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Work"
              title="Selected Projects"
              gradient
              description="Six builds from across the archive — health scanning, anatomy, gesture interfaces, AI command tooling and product sites."
            />
            <Link className="btn-secondary" to="/projects">
              All {projectStats.projects} projects
              <IconArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- What I build ---------------- */}
      <section className="pb-20" aria-labelledby="build-heading">
        <div className="shell">
          <SectionHeading
            eyebrow="Focus"
            title="What I Build"
            id="build-heading"
            description="Four threads run through the archive. Most projects sit in one of them; the interesting ones sit in two."
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_I_BUILD.map(({ Icon, title, body }, i) => (
              <li key={title}>
                <Reveal delay={i * 60} className="h-full">
                  <div className="surface surface-hover flex h-full flex-col gap-3 p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-violet/30 bg-violet/10 text-violet">
                      <Icon width={20} height={20} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section className="pb-8">
        <div className="shell">
          <Reveal>
            <div className="surface scrim flex flex-col items-center gap-6 px-6 py-14 text-center">
              <h2 className="max-w-2xl text-3xl sm:text-4xl">
                <GradientText
                  colors={['#A855F7', '#4079FF', '#40FFAA', '#4079FF', '#A855F7']}
                  animationSpeed={6}
                >
                  Let&rsquo;s build something interesting.
                </GradientText>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted">
                Open to collaboration, internships and any project where I get to learn something
                by building it.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link className="btn-primary" to="/contact">
                  Get in touch
                  <IconArrowRight aria-hidden="true" />
                </Link>
                <Link className="btn-secondary" to="/about">
                  More about me
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
