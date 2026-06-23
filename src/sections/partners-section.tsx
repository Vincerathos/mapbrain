import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionIntro } from '../ui/section-intro'

interface PartnersSectionProps {
  content: SiteContent['partners']
}

export function PartnersSection({ content }: PartnersSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--panel)]"
      id="partners"
      ref={revealRef}
    >
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionIntro body={content.body} eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.5fr)]">
          <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10" data-reveal>
            <div className="grid gap-px bg-[var(--line)] sm:grid-cols-2 xl:grid-cols-3">
              {content.logos.map((logo, index) => (
                <div
                  key={logo.name}
                  className={`${index % 5 === 0 ? 'bg-[var(--accent-soft)]' : 'bg-[var(--surface)]'} flex min-h-24 items-end px-5 py-4 text-[1.4rem] tracking-[-0.04em] text-[var(--ink)] sm:min-h-28`}
                >
                  {logo.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-px bg-[var(--line)] sm:grid-cols-3" data-reveal>
              {content.stats.map((stat, index) => (
                <article
                  key={stat.value}
                  className={`${index === 0 ? 'bg-[var(--accent)] text-white' : index === 1 ? 'bg-[var(--accent-soft)]' : 'bg-[var(--surface)]'} p-5`}
                >
                  <p className="text-[1.9rem] leading-none tracking-[-0.06em]">
                    {stat.value}
                  </p>
                  <p className={`mt-3 text-sm leading-6 ${index === 0 ? 'text-[color:rgb(255_255_255_/_0.82)]' : 'text-[var(--muted)]'}`}>
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>

            <div className="border border-[var(--line)] bg-[var(--accent-soft)] p-6 sm:p-8" data-reveal>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--accent)]">
                {content.perksLabel}
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {content.perks.map((perk, index) => (
                  <li
                    key={perk}
                    className={`${index === content.perks.length - 1 ? '' : 'border-b border-[color:rgb(17_17_17_/_0.12)] pb-4'}`}
                  >
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
