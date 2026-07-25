import { Check, Clock, Users } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { ButtonLink } from '../ui/button-link'
import { SectionIntro } from '../ui/section-intro'

interface FormationsSectionProps {
  content: SiteContent['formations']
}

// Couleur d'identité de chaque parcours (même ordre que content.programs) :
// AI Essentials, Automatisation & Agents, Productivity Suite,
// IA & Productivité, Automatiser son entreprise, Business Transformation.
const programPalette = ['#2f6fb5', '#c04b4b', '#7b4fa6', '#3d8a52', '#d07b2f', '#2b2b30']

export function FormationsSection({ content }: FormationsSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section
      aria-labelledby="formations-title"
      className="scroll-mt-6 border-b border-[var(--line)] bg-[var(--surface)]"
      id="formations"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            body={content.body}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          <div className="shrink-0" data-reveal>
            <ButtonLink link={content.cta} />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {content.programs.map((program, index) => {
            return (
              <article
                key={program.title}
                className="flex flex-col overflow-hidden rounded-[26px] border border-[color:rgb(17_17_17_/_0.08)] bg-white shadow-[0_18px_44px_rgba(17,17,17,0.05)]"
                data-reveal
              >
                <figure className="relative">
                  <img
                    alt={program.image.alt}
                    className="aspect-[16/9] w-full object-cover"
                    height="675"
                    loading="lazy"
                    src={program.image.src}
                    width="1200"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[var(--ink)] shadow-[0_8px_20px_rgba(17,17,17,0.1)]">
                    ({String(index + 1).padStart(2, '0')})
                  </span>
                  {program.badge ? (
                    <span className="absolute right-4 top-4 rounded-full bg-[var(--ink)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(17,17,17,0.2)]">
                      {program.badge}
                    </span>
                  ) : null}
                </figure>

                <span
                  aria-hidden="true"
                  className="block h-1.5 w-full"
                  style={{ background: programPalette[index % programPalette.length] }}
                />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3 py-1 text-[0.72rem] font-medium text-[var(--ink)]">
                    {program.level}
                  </span>
                  <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-[0.72rem] text-[var(--muted)]">
                    {program.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-[1.45rem] leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {program.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {program.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[var(--ink)]"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-[var(--accent-deep)]"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--line)] pt-5 text-[0.8rem] text-[var(--muted)]">
                  <span className="mt-5 inline-flex items-center gap-2">
                    <Users aria-hidden="true" className="size-4" />
                    {program.audience}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2">
                    <Clock aria-hidden="true" className="size-4" />
                    {program.duration}
                  </span>
                </div>
                </div>
              </article>
            )
          })}
        </div>

        <div
          className="mt-6 overflow-hidden rounded-[26px] border border-[color:rgb(17_17_17_/_0.08)] bg-[linear-gradient(135deg,#2e1f45_0%,#7b4fa6_45%,#c05a7f_75%,#e09347_100%)] p-6 text-white sm:p-8"
          data-reveal
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-white/70">
                {content.formatsTitle}
              </p>
              <p className="mt-4 max-w-[26rem] text-sm leading-6 text-white/85">
                {content.note}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.formats.map((format) => (
                <li
                  key={format}
                  className="flex items-start gap-2.5 rounded-[16px] border border-white/15 bg-[color:rgb(255_255_255_/_0.1)] px-4 py-3 text-sm leading-6"
                >
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0" />
                  <span>{format}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
