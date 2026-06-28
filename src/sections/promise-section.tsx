import { useTranslation } from 'react-i18next'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface PromiseSectionProps {
  content: SiteContent['promise']
}

export function PromiseSection({ content }: PromiseSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const { t } = useTranslation()

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" id="promise" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow={content.eyebrow} title={t('promiseBandTitle')} />

        <div
          className="mt-12 overflow-hidden rounded-[30px] border border-[color:rgb(17_17_17_/_0.08)] bg-[var(--hero-dark)]"
          data-reveal
        >
          <div className="relative grid min-h-[560px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <div
              className="relative overflow-hidden p-7 sm:p-10 lg:p-12"
              style={{
                background:
                  'linear-gradient(180deg, rgba(248,244,239,0.06), rgba(248,244,239,0.02)), repeating-linear-gradient(90deg, rgba(248,244,239,0.09) 0px, rgba(248,244,239,0.09) 52px, rgba(248,244,239,0.02) 52px, rgba(248,244,239,0.02) 102px)'
              }}
            >
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-r from-transparent via-[color:rgb(12_31_47_/_0.22)] to-[color:rgb(248_244_239_/_0.16)] blur-2xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-[var(--accent-alt)]" />
                    <span className="font-mono text-[0.76rem] uppercase tracking-[0.24em] text-white/70">
                      Single partner model
                    </span>
                  </div>
                  <p className="mt-10 max-w-[14ch] text-[clamp(2.9rem,5.8vw,5.8rem)] leading-[0.9] tracking-[-0.08em] text-white">
                    {content.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-end bg-[radial-gradient(circle_at_70%_16%,rgba(255,255,255,0.75),transparent_16%),linear-gradient(135deg,#ff844e_0%,#f68e69_28%,#efb4ae_56%,#f3d6d1_100%)] p-7 sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_48%,rgba(255,255,255,0.2))]" />
              <p className="relative z-10 max-w-[12ch] text-[clamp(2.3rem,4.6vw,4.5rem)] leading-[0.92] tracking-[-0.07em] text-white">
                {content.body}
              </p>
            </div>

            <div className="absolute inset-x-4 bottom-4 z-20 rounded-[20px] bg-[color:rgb(19_19_19_/_0.26)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-6">
              {content.points.map((point, index) => (
                <div
                  key={point.title}
                  className={`${index > 0 ? 'border-t border-white/12 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0' : ''}`}
                >
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/56">
                    ({(index + 1).toString().padStart(2, '0')})
                  </p>
                  <p className="mt-3 text-[1.15rem] leading-[1.1] tracking-[-0.04em] text-white">
                    {point.title}
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/78">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
