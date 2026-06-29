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
      return 'text-[clamp(2.35rem,3.2vw,3.15rem)] leading-[0.9] tracking-[-0.08em]'
    }

    if (value === 'Worldwide') {
      return 'text-[clamp(2.55rem,3.7vw,3.5rem)] leading-[0.92] tracking-[-0.085em]'
    }

    return 'text-[clamp(2.6rem,4.4vw,4rem)] leading-none tracking-[-0.08em]'
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
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]" data-reveal>
            <div
              className="min-h-[270px] overflow-hidden rounded-[20px] border border-[var(--line)] bg-[linear-gradient(135deg,#f1d4d5_0%,#d09880_26%,#d088a8_58%,#b880c0_100%)]"
            >
              <div className="h-full w-full bg-[radial-gradient(circle_at_62%_34%,rgba(255,255,255,0.26),transparent_18%),linear-gradient(115deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_42%,rgba(255,255,255,0.14))]" />
            </div>
            <div
              className="min-h-[270px] overflow-hidden rounded-[20px] border border-[var(--line)] bg-[linear-gradient(145deg,#f4edf1_0%,#ecd7e6_30%,#d8abc5_62%,#d09880_100%)]"
            >
              <div className="h-full w-full bg-[radial-gradient(circle_at_30%_28%,rgba(208,136,168,0.54),transparent_15%),linear-gradient(100deg,rgba(255,255,255,0),rgba(255,255,255,0.34),rgba(255,255,255,0)_70%)]" />
            </div>
          </div>

          <div className="mt-8 grid gap-5 border-t border-[var(--line)] pt-7 md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))] 2xl:grid-cols-[repeat(5,minmax(0,1fr))]" data-reveal>
            {content.figures.map((item, index) => (
              <div
                key={item.label}
                className={`min-w-0 ${
                  index > 0
                    ? 'md:border-l md:border-[var(--line)] md:pl-6 xl:border-l xl:border-[var(--line)] 2xl:pl-6'
                    : ''
                }`}
              >
                <p
                  className={`${getFigureValueClassName(item.value)} text-[var(--ink)]`}
                >
                  {formatFigureValue(item.value)}
                </p>
                <p className="mt-3 max-w-[16ch] text-[0.98rem] leading-6 text-[var(--muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-7">
            <p className="max-w-[58rem] text-[1rem] leading-8 text-[var(--muted)]" data-reveal>
              {content.body}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3" data-reveal>
              {content.recognition.map((item) => (
                <article
                  key={`${item.value}-${item.label}`}
                  className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] px-5 py-4"
                >
                  <p className="text-[1.15rem] font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
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
