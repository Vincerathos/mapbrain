import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
interface PromiseSectionProps {
  content: SiteContent['promise']
}

export function PromiseSection({ content }: PromiseSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--panel)]"
      id="promise"
      ref={revealRef}
    >
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="overflow-hidden border border-[var(--line)]">
          <div className="grid lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
            <div className="bg-[var(--accent)] p-6 text-white sm:p-8 lg:p-10">
              <p
                className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[color:rgb(255_255_255_/_0.78)]"
                data-reveal
              >
                {content.eyebrow}
              </p>
              <h2
                className="mt-5 max-w-4xl text-[clamp(2.2rem,7vw,5.2rem)] leading-[0.94] tracking-[-0.06em]"
                data-reveal
              >
                {content.title}
              </h2>
              <p
                className="mt-6 max-w-2xl text-base leading-7 text-[color:rgb(255_255_255_/_0.86)] sm:text-lg sm:leading-8"
                data-reveal
              >
                {content.body}
              </p>
            </div>

            <div className="grid gap-px bg-[var(--line)]">
              {content.points.map((point) => (
                <article
                  key={point.title}
                  className="bg-[var(--surface)] p-6 sm:p-8"
                  data-reveal
                >
                  <h3 className="max-w-xl text-[1.5rem] leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-[2rem]">
                    {point.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
