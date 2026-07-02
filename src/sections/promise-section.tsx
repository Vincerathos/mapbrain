import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface PromiseSectionProps {
  content: SiteContent['promise']
}

export function PromiseSection({ content }: PromiseSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" id="promise" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow="MAPBRAIN" title={content.eyebrow} />

        <div
          className="mt-12 overflow-hidden rounded-[30px] border border-[color:rgb(17_17_17_/_0.08)] bg-[linear-gradient(135deg,#6b5476_0%,#8f6c95_38%,#d09880_100%)]"
          data-reveal
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.34),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />

            <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div
                className="relative overflow-hidden p-7 sm:p-10 lg:p-12"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,244,248,0.06), rgba(255,244,248,0.02)), repeating-linear-gradient(90deg, rgba(255,244,248,0.07) 0px, rgba(255,244,248,0.07) 48px, rgba(255,244,248,0.02) 48px, rgba(255,244,248,0.02) 96px)'
                }}
              >
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent via-[color:rgb(94_70_104_/_0.18)] to-transparent blur-xl" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-[var(--accent-alt)]" />
                    <span className="font-mono text-[0.76rem] uppercase tracking-[0.24em] text-white/72">
                      Single partner model
                    </span>
                  </div>
                  <h3 className="section-title-break mt-8 max-w-[10ch] text-[clamp(2.5rem,5.3vw,5.4rem)] leading-[0.92] tracking-[-0.03em] text-white">
                    {content.title}
                  </h3>
                </div>
              </div>

              <div className="relative flex items-center p-7 sm:p-10 lg:p-12">
                <p className="section-title-break relative z-10 max-w-[16ch] text-[clamp(1.65rem,3.2vw,3.2rem)] leading-[1] tracking-[-0.025em] text-white">
                  {content.body}
                </p>
              </div>
            </div>

            <div className="relative border-t border-white/12 bg-[color:rgb(34_22_41_/_0.24)] p-4 sm:p-5 lg:p-6">
              <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
                {content.points.map((point, index) => (
                  <div
                    key={point.title}
                    className="rounded-[18px] border border-white/12 bg-[color:rgb(255_255_255_/_0.08)] p-4 backdrop-blur-md"
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/58">
                      ({(index + 1).toString().padStart(2, '0')})
                    </p>
                    <p className="mt-4 text-[1.12rem] leading-[1.12] tracking-[-0.03em] text-white">
                      {point.title}
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
