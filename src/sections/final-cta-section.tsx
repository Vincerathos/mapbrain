import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'
import { ButtonLink } from '../ui/button-link'

interface FinalCtaSectionProps {
  content: SiteContent['finalCta']
}

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  const revealRef = useReveal<HTMLElement>()

  return (
    <section className="border-b border-[var(--line)]" id="contact" ref={revealRef}>
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="overflow-hidden border border-[var(--line)]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.45fr)]">
            <div className="bg-[var(--accent)] p-6 text-white sm:p-8 lg:p-12">
            <p
              className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[color:rgb(255_255_255_/_0.78)]"
              data-reveal
            >
              {content.eyebrow}
            </p>
            <h2
              className="mt-5 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.05em]"
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
            <div className="mt-8" data-reveal>
              <ButtonLink link={content.primaryCta} />
            </div>
          </div>

            <div className="grid gap-px bg-[var(--line)]" data-reveal>
            {content.channels.map((channel) => (
              <a
                key={channel.label}
                className="flex min-h-28 flex-col justify-between bg-[var(--surface)] p-5 transition-colors duration-200 hover:bg-[var(--panel)]"
                href={channel.href}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  {channel.label}
                </span>
                <span className="max-w-xs text-lg leading-tight tracking-[-0.03em] text-[var(--ink)]">
                  {channel.value}
                </span>
              </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
