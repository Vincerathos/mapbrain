import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionIntro } from '../ui/section-intro'

interface CapabilitySectionProps {
  content: SiteContent['capabilities']
}

export function CapabilitySection({ content }: CapabilitySectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)]" id="capabilities" ref={revealRef}>
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="overflow-hidden border border-[var(--line)]">
          <div className="grid lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]">
            <div className="bg-[var(--surface)] p-6 sm:p-8 lg:p-10">
              <SectionIntro body={content.body} eyebrow={content.eyebrow} title={content.title} />
            </div>

            <figure className="bg-[var(--accent-soft)]" data-reveal>
              <img
                alt={content.image.alt}
                className="aspect-[3/2] w-full object-cover lg:h-full"
                height="1200"
                loading="lazy"
                src={content.image.src}
                width="1600"
              />
            </figure>
          </div>
        </div>

        <div className="mt-10 grid gap-px bg-[var(--line)] lg:grid-cols-3">
          {content.columns.map((column, index) => (
            <article
              key={column.title}
              className={`${index === 1 ? 'bg-[var(--accent)] text-white' : index === 2 ? 'bg-[var(--accent-soft)]' : 'bg-[var(--surface)]'} p-6 sm:p-8`}
              data-reveal
            >
              <h3 className={`text-[1.5rem] leading-none tracking-[-0.05em] ${index === 1 ? 'text-white' : 'text-[var(--ink)]'}`}>
                {column.title}
              </h3>
              <ul className={`mt-6 space-y-3 text-sm leading-7 sm:text-base ${index === 1 ? 'text-[color:rgb(255_255_255_/_0.84)]' : 'text-[var(--muted)]'}`}>
                {column.items.map((item) => (
                  <li
                    key={item}
                    className={`border-b pb-3 ${index === 1 ? 'border-[color:rgb(255_255_255_/_0.18)]' : 'border-[var(--line)]'}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
