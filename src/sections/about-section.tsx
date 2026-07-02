import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface AboutSectionProps {
  content: SiteContent['about']
}

export function AboutSection({ content }: AboutSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  const getFigureValueClassName = (value: string) => {
    if (value === 'Several / Week') {
      return 'text-[clamp(2rem,3vw,2.75rem)] leading-[0.92] tracking-[-0.065em]'
    }

    if (value === 'Worldwide') {
      return 'text-[clamp(2.15rem,3.3vw,3rem)] leading-[0.94] tracking-[-0.07em]'
    }

    return 'text-[clamp(2.15rem,3.4vw,3rem)] leading-[0.94] tracking-[-0.065em]'
  }

  const formatFigureValue = (value: string) => {
    if (value === 'Several / Week') {
      return (
        <>
          <span>Several</span>
          <span className="block">/ Week</span>
        </>
      )
    }

    return value
  }

  return (
    <section
      className="border-b border-[var(--line)] bg-[var(--surface)]"
      id="about"
      ref={revealRef}
    >
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={content.title} />

        <div className="mt-10">
          <div className="grid gap-5 border-t border-[var(--line)] pt-7 md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))] 2xl:grid-cols-[repeat(5,minmax(0,1fr))]" data-reveal>
            {content.figures.map((item, index) => (
              <div
                key={item.label}
                className={`min-w-0 ${
                  index > 0
                    ? 'md:border-l md:border-[var(--line)] md:pl-6 xl:border-l xl:border-[var(--line)] 2xl:pl-6'
                    : ''
                } flex flex-col items-center text-center md:items-start md:text-left`}
              >
                <p
                  className={`${getFigureValueClassName(item.value)} text-[var(--ink)]`}
                >
                  {formatFigureValue(item.value)}
                </p>
                <p className="mt-2 max-w-[16ch] text-[0.92rem] leading-6 text-[var(--muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-7">
            <p
              className="section-title-break max-w-[36ch] text-[clamp(1.95rem,5vw,3.6rem)] leading-[0.98] tracking-[-0.055em] text-[var(--ink)]"
              data-reveal
            >
              {content.body}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3" data-reveal>
              {content.recognition.map((item) => (
                <article
                  key={`${item.value}-${item.label}`}
                  className="min-h-[164px] rounded-[24px] border border-[var(--line)] bg-[var(--surface)] px-6 py-6 sm:min-h-[176px] sm:px-8 sm:py-7"
                >
                  <p className="text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--ink)] sm:text-[1.9rem]">
                    {item.value}
                  </p>
                  <p className="mt-4 max-w-[22ch] text-[1.05rem] leading-7 text-[var(--muted)] sm:text-[1.08rem]">
                    {item.label}
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
