import { useReveal } from '../hooks/use-reveal'
import type { HeroContent } from '../types/site'
import { ButtonLink } from '../ui/button-link'

interface HeroSectionProps {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="border-b border-[var(--line)]"
      ref={revealRef}
    >
      <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="mb-6 max-w-xl font-mono text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]"
              data-reveal
            >
              {content.eyebrow}
            </p>
            <h1
              className="max-w-6xl text-[clamp(3.35rem,15vw,8.6rem)] leading-[0.86] tracking-[-0.07em] text-[var(--ink)]"
              data-reveal
              id="hero-title"
            >
              {content.title}
            </h1>
          </div>

          <aside
            className="w-full max-w-[320px] rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5"
            data-reveal
          >
            <div className="flex items-center gap-3">
              <div className="size-14 overflow-hidden rounded-[18px] bg-[var(--accent-soft)]">
                <img
                  alt={content.image.alt}
                  className="size-full object-cover"
                  height="112"
                  fetchPriority="high"
                  loading="eager"
                  src={content.image.src}
                  width="112"
                />
              </div>
              <div>
                <p className="text-lg leading-none tracking-[-0.03em] text-[var(--ink)]">
                  {content.badgeTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {content.badgeBody}
                </p>
              </div>
            </div>
            <a
              className="mt-5 flex min-h-12 items-center justify-between rounded-[18px] bg-[var(--ink)] px-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[var(--accent)] hover:text-[var(--ink)]"
              href={content.primaryCta.href}
            >
              <span>{content.primaryCta.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>

        <div className="mt-8 overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--accent-soft)]" data-reveal>
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="flex flex-col justify-between bg-[var(--accent)] p-5 text-white sm:p-8 lg:p-10">
              <div>
                <p className="text-[clamp(1.1rem,2.8vw,1.85rem)] leading-[1.08] tracking-[-0.03em]">
                  {content.subtitle}
                </p>
                <p className="mt-6 max-w-xl text-base leading-7 text-[color:rgb(255_255_255_/_0.86)] sm:text-lg sm:leading-8">
                  {content.body}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  className="border-[var(--surface)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
                  link={content.primaryCta}
                />
                <ButtonLink link={content.secondaryCta} tone="secondary" />
              </div>
            </div>

            <div className="hero-wave-field flex min-h-[280px] items-end overflow-hidden p-6 sm:min-h-[360px] sm:p-8 lg:min-h-full lg:p-10">
              <div className="hero-wave-layer" />
              <div className="hero-wave-ribbon" />
              <div className="hero-wave-copy relative z-10 max-w-md text-white">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[color:rgb(255_255_255_/_0.82)]">
                  {content.visualEyebrow}
                </p>
                <p className="mt-4 text-[clamp(1.7rem,4vw,3rem)] leading-[0.95] tracking-[-0.05em]">
                  {content.visualTitle}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-px border-t border-[color:rgb(17_17_17_/_0.12)] bg-[color:rgb(17_17_17_/_0.12)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-px bg-[color:rgb(17_17_17_/_0.12)] sm:grid-cols-3">
              {content.metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="bg-[var(--accent-soft)] p-4 sm:p-5"
                >
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-[var(--ink)] sm:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {metric.label}
                  </p>
                </article>
              ))}
            </div>

            <div className="grid gap-px bg-[color:rgb(17_17_17_/_0.12)] sm:grid-cols-2">
            {content.serviceTags.map((tag) => (
              <div
                key={tag}
                className="bg-[var(--surface)] px-4 py-3 text-sm text-[var(--muted)]"
              >
                {tag}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
