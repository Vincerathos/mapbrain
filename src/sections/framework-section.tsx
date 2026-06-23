import { useReveal } from '../hooks/use-reveal'
import type { FrameworkStep, SiteContent } from '../types/site'
import { SectionIntro } from '../ui/section-intro'

interface FrameworkSectionProps {
  content: SiteContent['framework']
}

function FrameworkCard({
  gainsLabel,
  index,
  step,
  whatWeDoLabel
}: {
  gainsLabel: string
  index: number
  step: FrameworkStep
  whatWeDoLabel: string
}) {
  const reversed = index % 2 === 1

  return (
    <article className="overflow-hidden border border-[var(--line)]" data-reveal>
      <div className="grid lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
        <div
          className={`${reversed ? 'lg:order-2' : ''} ${index === 1 ? 'bg-[var(--panel)]' : 'bg-[var(--surface)]'} flex flex-col justify-between p-6 sm:p-8 lg:p-10`}
        >
          <div>
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-end gap-4">
                <span className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
                  {step.label}
                </span>
                <span className="text-sm text-[var(--muted)]">{step.step}</span>
              </div>
              <span className="hidden text-[clamp(3.5rem,10vw,6.5rem)] leading-none tracking-[-0.08em] text-[var(--line-strong)] md:block">
                {step.step}
              </span>
            </div>
            <h3 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,4rem)] leading-[0.92] tracking-[-0.05em] text-[var(--ink)]">
              {step.title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
              {step.description}
            </p>
          </div>

          <div className="mt-8 grid gap-px bg-[var(--line)] lg:grid-cols-2">
            <div className="bg-[var(--accent-soft)] p-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]">
                {whatWeDoLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                {step.whatWeDo.map((item) => (
                  <li key={item} className="border-b border-[color:rgb(17_17_17_/_0.12)] pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--surface)] p-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink)]">
                {gainsLabel}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                {step.gains.map((item) => (
                  <li key={item} className="border-b border-[var(--line)] pb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <figure className={`${reversed ? 'lg:order-1' : ''} bg-[var(--panel)]`}>
          <img
            alt={step.image.alt}
            className="aspect-[5/4] w-full object-cover lg:h-full"
            height="1200"
            loading="lazy"
            src={step.image.src}
            width="1500"
          />
        </figure>
      </div>
    </article>
  )
}

export function FrameworkSection({ content }: FrameworkSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)]" id="framework" ref={revealRef}>
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionIntro body={content.body} eyebrow={content.eyebrow} title={content.title} />
        <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">
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
