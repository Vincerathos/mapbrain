import { useReveal } from '../hooks/use-reveal'
import type { Locale, NavItem, SiteContent } from '../types/site'

interface FooterProps {
  content: SiteContent['footer']
  currentLocale: Locale
  items: NavItem[]
}

export function Footer({ content, currentLocale, items }: FooterProps) {
  const revealRef = useReveal<HTMLElement>()
  const year = new Date().getFullYear()
  const primaryLinks = items.slice(0, 2)
  const secondaryLinks = items.slice(2, 4)
  const copy =
    currentLocale === 'fr'
      ? {
          audit: 'Réserver un audit',
          contact: 'hello@mapbrain.agency',
          copyright: `© ${year} MAPBRAIN`,
          strategy: 'Analyse. Build. Scale.'
        }
      : {
          audit: 'Book an audit',
          contact: 'hello@mapbrain.agency',
          copyright: `© ${year} MAPBRAIN`,
          strategy: 'Analyze. Build. Scale.'
        }

  return (
    <footer
      className="relative overflow-hidden border-t border-[rgba(17,17,17,0.08)] bg-[var(--surface)] text-[var(--ink)]"
      id="footer"
      ref={revealRef}
    >
      <div className="section-shell-top relative z-10 px-5 sm:px-8 lg:px-12" data-reveal>
        <div className="flex flex-col gap-5 pb-8 text-[0.72rem] uppercase tracking-[0.12em] text-[var(--muted)] sm:pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-3 lg:min-w-[240px]">
            <p>{copy.copyright}</p>
            <p className="max-w-[32ch] text-[0.74rem] normal-case tracking-[0.01em] text-[rgba(17,17,17,0.56)]">
              {content.blurb}
            </p>
          </div>

          <nav
            aria-label={currentLocale === 'fr' ? 'Navigation pied de page' : 'Footer navigation'}
            className="grid gap-2 sm:grid-cols-2 sm:gap-x-10 lg:justify-items-center"
          >
            {[...primaryLinks, ...secondaryLinks].map((item) => (
              <a
                key={item.href}
                className="transition-colors duration-200 hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-6 gap-y-2 lg:min-w-[280px] lg:justify-end">
            <a
              className="transition-colors duration-200 hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
              href="mailto:hello@mapbrain.agency"
            >
              {copy.contact}
            </a>
            <a
              className="transition-colors duration-200 hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
              href="mailto:hello@mapbrain.agency?subject=MAPBRAIN%20Strategic%20Audit"
            >
              {copy.audit}
            </a>
          </div>
        </div>
      </div>

      <div className="relative" data-reveal>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--surface)] via-[color:rgb(249_249_249_/_0.7)] to-transparent" />
        <div className="px-2 sm:px-3">
          <p
            aria-hidden="true"
            className="select-none overflow-hidden text-center font-[var(--font-display)] text-[clamp(4.6rem,22vw,21rem)] font-semibold uppercase leading-[0.78] tracking-[-0.12em] text-transparent [background-image:radial-gradient(circle,rgba(0,0,0,0.52)_1.15px,transparent_1.15px)] [background-position:center] [background-size:8px_8px] bg-clip-text"
          >
            MAPBRAIN
          </p>
        </div>

        <div className="relative z-10 -mt-2 flex items-center justify-between px-5 pb-4 sm:px-8 lg:px-12">
          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.68)]">
            MAPBRAIN
          </span>
          <span className="text-right text-[0.68rem] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.68)]">
            {copy.strategy}
          </span>
        </div>
      </div>
    </footer>
  )
}
