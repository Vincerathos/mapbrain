import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionIntro } from '../ui/section-intro'

interface ProjectsSectionProps {
  content: SiteContent['projects']
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)]" id="projects" ref={revealRef}>
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionIntro body={content.body} eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-10 space-y-6 lg:space-y-8">
          {content.items.map((item, index) => {
            const reversed = index % 2 === 1

            return (
              <article
                key={item.title}
                className="overflow-hidden border border-[var(--line)]"
                data-reveal
              >
                <div className="grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
                  <div
                    className={`${reversed ? 'lg:order-2' : ''} flex flex-col justify-between ${index === 0 ? 'bg-[var(--accent)] text-white' : index === 1 ? 'bg-[var(--panel)]' : 'bg-[var(--accent-soft)]'} p-6 sm:p-8 lg:p-10`}
                  >
                    <div>
                      <p
                        className={`font-mono text-[0.72rem] uppercase tracking-[0.24em] ${index === 0 ? 'text-[color:rgb(255_255_255_/_0.76)]' : 'text-[var(--accent)]'}`}
                      >
                        {item.sector}
                      </p>
                      <h3 className="mt-6 max-w-xl text-[clamp(2rem,4vw,4rem)] leading-[0.94] tracking-[-0.06em]">
                        {item.title}
                      </h3>
                      <p
                        className={`mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${index === 0 ? 'text-[color:rgb(255_255_255_/_0.86)]' : 'text-[var(--muted)]'}`}
                      >
                        {item.description}
                      </p>
                    </div>

                    <ul className="mt-8 grid gap-px bg-[color:rgb(17_17_17_/_0.12)] sm:grid-cols-3">
                      {item.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className={`${index === 0 ? 'bg-[color:rgb(255_255_255_/_0.12)] text-white' : 'bg-[var(--surface)] text-[var(--ink)]'} px-4 py-4 text-sm leading-6`}
                        >
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <figure className={`${reversed ? 'lg:order-1' : ''} bg-[var(--surface)]`}>
                    <img
                      alt={item.image.alt}
                      className="aspect-[16/11] w-full object-cover lg:h-full"
                      height="1100"
                      loading="lazy"
                      src={item.image.src}
                      width="1600"
                    />
                  </figure>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
