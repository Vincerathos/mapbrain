import { useState } from 'react'
import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface FrameworkSectionProps {
  content: SiteContent['framework']
}

export function FrameworkSection({ content }: FrameworkSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const [activeIndex, setActiveIndex] = useState(0)
  const step = content.steps[activeIndex] ?? content.steps[0]

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" id="framework" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow="MAPBRAIN" title={content.eyebrow} />

        <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8" data-reveal>
          {content.body}
        </p>

        <div
          aria-label={content.eyebrow}
          className="mt-8 grid gap-2 sm:grid-cols-3 sm:gap-3"
          data-reveal
          role="tablist"
        >
          {content.steps.map((item, index) => {
            const isActive = index === activeIndex

            return (
              <button
                aria-controls="framework-step-panel"
                aria-selected={isActive}
                className={`flex min-h-16 items-center justify-between gap-4 rounded-[18px] border px-5 py-4 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-deep)] ${
                  isActive
                    ? 'border-[var(--ink)] bg-[var(--ink)] text-white'
                    : 'border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--ink)]'
                }`}
                id={`framework-tab-${index}`}
                key={item.step}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              >
                <span className="text-[1.3rem] leading-none tracking-[-0.05em] sm:text-[1.6rem]">
                  {item.label}
                </span>
                <span className={`font-mono text-[0.72rem] uppercase tracking-[0.2em] ${isActive ? 'text-white/64' : 'text-[var(--muted)]'}`}>
                  ({item.step})
                </span>
              </button>
            )
          })}
        </div>

        <article
          aria-labelledby={`framework-tab-${activeIndex}`}
          className="mt-4 overflow-hidden rounded-[8px] border border-[color:rgb(17_17_17_/_0.08)] bg-white"
          data-reveal
          id="framework-step-panel"
          role="tabpanel"
        >
          <div className="grid lg:grid-cols-[380px_minmax(0,1fr)]">
            <figure className="bg-[var(--panel)]">
              <img
                alt={step.image.alt}
                className="aspect-[16/9] w-full object-cover lg:aspect-auto lg:h-full"
                height="1200"
                loading="lazy"
                src={step.image.src}
                width="1200"
              />
            </figure>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-[14px] bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-deep)]">
                  {step.step}
                </span>
                <h3 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[0.96] tracking-[-0.05em] text-[var(--ink)]">
                  {step.title}
                </h3>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                {step.description}
              </p>

              <div className="mt-7 grid gap-px bg-[var(--line)] lg:grid-cols-2">
                <div className="bg-[var(--panel)] p-5 sm:p-6">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]">
                    {content.whatWeDoLabel}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.whatWeDo.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:rgb(17_17_17_/_0.1)] bg-white px-3 py-1.5 text-[0.82rem] leading-6 text-[var(--ink)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[var(--accent-soft)] p-5 sm:p-6">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]">
                    {content.gainsLabel}
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[var(--ink)] sm:text-base sm:leading-7">
                    {step.gains.map((item) => (
                      <li key={item} className="border-b border-[color:rgb(17_17_17_/_0.08)] pb-2.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
