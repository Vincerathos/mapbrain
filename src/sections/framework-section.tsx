import { useReveal } from '../hooks/use-reveal'
import type { FrameworkStep, SiteContent } from '../types/site'
import { SectionBandHeading } from '../ui/section-band-heading'

interface FrameworkSectionProps {
  content: SiteContent['framework']
}

interface FrameworkCardProps {
  gainsLabel: string
  index: number
  step: FrameworkStep
  whatWeDoLabel: string
}

function FrameworkCard({
  gainsLabel,
  index,
  step,
  whatWeDoLabel
}: FrameworkCardProps) {
  const reversed = index % 2 === 1

  return (
    <article className="overflow-hidden rounded-[8px] border border-[color:rgb(17_17_17_/_0.08)] bg-white" data-reveal>
      <div
        className={`grid ${
          reversed
            ? 'lg:grid-cols-[minmax(0,1fr)_420px]'
            : 'lg:grid-cols-[420px_minmax(0,1fr)]'
        }`}
      >
        <figure className={`${reversed ? 'lg:order-2' : ''} bg-[var(--panel)]`}>
          <img
            alt={step.image.alt}
            className="aspect-[4/4.3] w-full object-cover lg:h-full"
            height="1200"
            loading="lazy"
            src={step.image.src}
            width="1200"
          />
        </figure>

        <div className={`${reversed ? 'lg:order-1' : ''} p-6 sm:p-8 lg:p-10`}>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="inline-flex size-10 items-center justify-center rounded-[14px] bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-deep)]">
                {step.step}
              </span>
              <span className="text-[clamp(2rem,3vw,2.6rem)] leading-none tracking-[-0.06em] text-[var(--ink)]">
                {step.label}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.76rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                Case
              </span>
              <span className="h-px w-8 bg-[var(--line)]" />
              <span className="font-mono text-[0.76rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                ({step.step})
              </span>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--line)] pt-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)]">
              <div>
                <h3 className="max-w-[12ch] text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[0.95] tracking-[-0.07em] text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[1.15rem] leading-7 tracking-[-0.03em] text-[color:rgb(17_17_17_/_0.28)]">
                  {step.gains[0]}
                </p>
              </div>

              <div className="border-l border-[var(--line)] pl-0 lg:pl-8">
                <p className="text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-px bg-[var(--line)] lg:grid-cols-2">
            <div className="bg-[var(--panel)] p-5 sm:p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]">
                {whatWeDoLabel}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                {step.whatWeDo.map((item) => (
                  <li key={item} className="border-b border-[color:rgb(17_17_17_/_0.08)] pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${index === 1 ? 'bg-[var(--accent-soft)]' : 'bg-[var(--surface)]'} p-5 sm:p-6`}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]">
                {gainsLabel}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                {step.gains.map((item) => (
                  <li key={item} className="border-b border-[color:rgb(17_17_17_/_0.08)] pb-3 text-[var(--ink)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function FrameworkSection({ content }: FrameworkSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]" id="framework" ref={revealRef}>
      <div className="section-shell mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8">
        <SectionBandHeading eyebrow="MAPBRAIN" title={content.eyebrow} />

        <p className="mt-8 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8" data-reveal>
          {content.body}
        </p>

        <div className="mt-10 space-y-6 lg:mt-14 lg:space-y-8">
          {content.steps.map((step, index) => (
            <FrameworkCard
              gainsLabel={content.gainsLabel}
              key={step.step}
              index={index}
              step={step}
              whatWeDoLabel={content.whatWeDoLabel}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
