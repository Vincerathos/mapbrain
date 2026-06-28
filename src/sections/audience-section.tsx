import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface AudienceSectionProps {
  content: SiteContent['audiences']
}

interface AudienceVisual {
  alt: string
  src: string
}

const visuals: AudienceVisual[] = [
  {
    alt: 'Illustration locale de cerveau IA bleu electrique',
    src: '/ai-brain-illustration.svg'
  },
  {
    alt: 'Architecture premium aux lignes courbes',
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80'
  },
  {
    alt: 'Equipe en reunion autour d un ordinateur',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    alt: 'Macro de circuit electronique sombre',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80'
  }
]

export function AudienceSection({ content }: AudienceSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  const columns = content.items.slice(0, 4).map((item, index) => ({
    image: visuals[index],
    item,
    reverse: index % 2 === 1,
    step: `STEP - ${String(index + 1).padStart(2, '0')}`,
    visualStep: `VISUAL - ${String(index + 1).padStart(2, '0')}`
  }))

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      id="audiences"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {columns.map((column) => {
            const textCard = (
              <article
                className="flex h-[250px] flex-col justify-between rounded-[20px] border border-[var(--line)] bg-white px-6 py-6 xl:h-[270px]"
                data-reveal
              >
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--ink)]">
                  {column.step}
                </span>

                <div>
                  <h3 className="max-w-[11ch] text-[clamp(2rem,2.5vw,2.8rem)] font-[550] leading-[0.94] tracking-[-0.08em] text-[var(--ink)]">
                    {column.item.title}
                  </h3>
                  <p className="mt-3 max-w-[28rem] text-[0.94rem] leading-7 text-[var(--muted)]">
                    {column.item.description}
                  </p>
                </div>
              </article>
            )

            const imageCard = (
              <article
                className="relative h-[250px] overflow-hidden rounded-[20px] border border-[var(--line)] bg-white xl:h-[270px]"
                data-reveal
              >
                <img
                  alt={column.image.alt}
                  className="h-full w-full object-cover"
                  height="1200"
                  loading="lazy"
                  src={column.image.src}
                  width="1200"
                />
                <span className="absolute left-5 top-5 rounded-full bg-white/82 px-3 py-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--ink)] backdrop-blur-sm">
                  {column.visualStep}
                </span>
              </article>
            )

            return (
              <div
                key={column.item.title}
                className="grid gap-3"
              >
                {column.reverse ? imageCard : textCard}
                {column.reverse ? textCard : imageCard}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
