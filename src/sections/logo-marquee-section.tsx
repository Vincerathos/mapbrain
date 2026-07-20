import { useReveal } from '../hooks/use-reveal'
import type { SiteContent } from '../types/site'

interface LogoMarqueeSectionProps {
  content: SiteContent['partners']
}

export function LogoMarqueeSection({ content }: LogoMarqueeSectionProps) {
  const revealRef = useReveal<HTMLElement>()
  const loopedLogos = [...content.logos, ...content.logos]

  return (
    <section
      aria-label="Partenaires technologiques"
      className="relative -mt-4 border-b border-[var(--line)] bg-[var(--surface)]"
      ref={revealRef}
    >
      <div
        className="section-shell mx-auto max-w-[1720px] overflow-hidden px-4 sm:px-6 lg:px-8"
        data-reveal
      >
        <div className="logo-marquee-track flex min-w-max items-center gap-10 sm:gap-16">
          {loopedLogos.map((logo, index) => (
            <span
              key={`${logo.name}-${index}`}
              className="logo-marquee-mark shrink-0 whitespace-nowrap font-mono text-[0.9rem] font-medium uppercase tracking-[0.24em] text-[var(--ink)] sm:text-[1.05rem]"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
