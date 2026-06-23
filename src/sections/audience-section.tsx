import {
  Building2,
  Factory,
  Landmark,
  Rocket
} from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'
import type { AudienceItem, SiteContent } from '../types/site'
import { SectionIntro } from '../ui/section-intro'

interface AudienceSectionProps {
  content: SiteContent['audiences']
}

const icons: Record<AudienceItem['icon'], typeof Rocket> = {
  rocket: Rocket,
  factory: Factory,
  building: Building2,
  landmark: Landmark
}

export function AudienceSection({ content }: AudienceSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)]" ref={revealRef}>
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionIntro eyebrow={content.eyebrow} title={content.title} />
          </div>

          <div className="grid gap-px bg-[var(--line)] md:grid-cols-2">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon]

            return (
              <article
                key={item.title}
                className={`${index === 0 ? 'bg-[var(--accent)] text-white' : index === 3 ? 'bg-[var(--panel)]' : 'bg-[var(--surface)]'} flex min-h-[260px] flex-col justify-between p-6 sm:p-8`}
                data-reveal
              >
                <Icon
                  className={`size-5 ${index === 0 ? 'text-white' : 'text-[var(--accent)]'}`}
                  aria-hidden="true"
                />
                <div>
                  <h3
                    className={`mt-10 text-[1.9rem] leading-none tracking-[-0.06em] ${index === 0 ? 'text-white' : 'text-[var(--ink)]'}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-sm text-sm leading-7 sm:text-base ${index === 0 ? 'text-[color:rgb(255_255_255_/_0.84)]' : 'text-[var(--muted)]'}`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
