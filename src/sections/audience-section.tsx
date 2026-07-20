import { Building2, Factory, Landmark, Rocket } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'
import type { AudienceItem, SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface AudienceSectionProps {
  content: SiteContent['audiences']
}

const icons: Record<AudienceItem['icon'], typeof Rocket> = {
  building: Building2,
  factory: Factory,
  landmark: Landmark,
  rocket: Rocket
}

export function AudienceSection({ content }: AudienceSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      id="audiences"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon]

            return (
              <article
                key={item.title}
                className="flex flex-col rounded-[26px] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(240,220,235,0.64))] p-6 shadow-[0_14px_40px_rgba(17,17,17,0.05)]"
                data-reveal
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-[14px] border border-[var(--line)] bg-white text-[var(--accent-deep)]">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                    ({String(index + 1).padStart(2, '0')})
                  </span>
                </div>

                <h3 className="mt-6 text-[1.6rem] font-[700] leading-[0.98] tracking-[-0.04em] text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
