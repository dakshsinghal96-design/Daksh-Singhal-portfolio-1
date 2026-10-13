import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import Reveal from '../components/Reveal';
import Seo from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/headings';
import { IconArrowRight, IconExternal } from '../components/icons';
import { profile } from '../data/profile';
import { currentlyLearning, relatedProjects, skillsByGroup } from '../data/skills';
import { buildUrl } from '../lib/projectHelpers';

/**
 * Skills page.
 *
 * No percentage bars — a number like "React 82%" is not a fact about anyone.
 * Instead each skill states what it is used for, cites the archive evidence
 * behind the claim, and links to the projects that demonstrate it.
 */
export default function Skills() {
  const groups = skillsByGroup();

  return (
    <>
      <Seo
        title={`Skills & Tools — ${profile.name}`}
        description="AI prototyping, computer vision and gesture interaction, web development, design thinking, and the tools behind the project archive."
      />

      <PageHeader
        eyebrow="Capabilities"
        title="Skills & Tools"
        gradient
        description="Grouped by what they are actually used for. Every entry is backed by something in the archive rather than a self-assigned score."
      />

      <section className="shell space-y-14 pb-16">
        {groups.map((group, gi) => (
          <div key={group.group}>
            <h2 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.16em] text-shard">
              {group.group}
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((skill, i) => {
                const related = relatedProjects(skill);
                return (
                  <li key={skill.name}>
                    <Reveal delay={(gi * 2 + i) * 40} className="h-full">
                      <div className="surface surface-hover flex h-full flex-col gap-3 p-5">
                        <div className="flex items-start justify-between gap-3">
                          <span
                            aria-hidden="true"
                            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet/30 bg-violet/10 text-lg text-violet"
                          >
                            {skill.icon}
                          </span>
                          {/* Only rendered once a confidence level is set. */}
                          {skill.confidenceLabel && (
                            <span className="rounded-full border border-shard/40 bg-shard/10 px-2.5 py-1 text-[11px] font-semibold text-shard">
                              {skill.confidenceLabel}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-base font-semibold text-ink">
                          {skill.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted">{skill.description}</p>

                        <p className="mt-auto border-t pt-3 text-xs leading-relaxed text-muted/80">
                          <span className="font-semibold text-muted">Evidence: </span>
                          {skill.evidence}
                        </p>

                        {related.length > 0 && (
                          <ul className="flex flex-wrap gap-1.5">
                            {related.map((p) => {
                              const href = p.liveUrl ?? (p.href ? buildUrl(p.href) : null);
                              const label = p.title.split('—')[0].trim();
                              return (
                                <li key={p.id}>
                                  {href ? (
                                    <a
                                      href={href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] text-muted transition hover:border-violet/45 hover:text-ink"
                                    >
                                      {label}
                                      <IconExternal width={11} height={11} />
                                      <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                  ) : (
                                    <span className="inline-block rounded-md border px-2 py-0.5 text-[11px] text-muted">
                                      {label}
                                    </span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ---------------- Currently learning ---------------- */}
      <section className="shell pb-20" aria-labelledby="learning-heading">
        <SectionHeading
          eyebrow="In progress"
          title="Currently learning"
          id="learning-heading"
        />
        <div className="mt-8">
          {currentlyLearning.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              compact
              title="Currently-learning list is being added."
              description="Edit currentlyLearning in src/data/skills.ts to fill this panel."
            />
          )}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="surface scrim flex flex-col items-center gap-5 px-6 py-12 text-center">
          <p className="max-w-xl text-base text-muted">
            The clearest picture of what I can do is the archive itself.
          </p>
          <Link className="btn-primary" to="/projects">
            Browse the projects
            <IconArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
