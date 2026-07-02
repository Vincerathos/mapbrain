import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { CtaLink, Locale, NavItem } from '../types/site'
import { LocaleSwitcher } from '../ui/locale-switcher'

interface HeaderProps {
  currentLocale: Locale
  cta: CtaLink
  items: NavItem[]
  onLocaleChange: (locale: Locale) => void
}

export function Header({
  currentLocale,
  cta,
  items,
  onLocaleChange
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-[1720px] px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <div className="rounded-[28px] border border-[color:rgb(17_17_17_/_0.08)] bg-[color:rgb(255_255_255_/_0.72)] px-4 py-3 shadow-[0_14px_34px_rgba(17,17,17,0.06)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <a
              className="shrink-0 text-[1rem] font-semibold tracking-[-0.06em] text-[var(--ink)]"
              href="#top"
              onClick={handleCloseMobileMenu}
            >
              MAPBRAIN
            </a>

            <nav aria-label="Navigation principale" className="hidden xl:block">
              <ul className="flex items-center gap-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      className="inline-flex min-h-10 items-center rounded-full px-4 py-2 text-[0.76rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-2 sm:gap-3 md:flex">
              <a
                className="hidden min-h-11 items-center rounded-full bg-[var(--ink)] px-4 py-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[var(--accent-deep)] md:inline-flex"
                href={cta.href}
                rel={cta.external ? 'noreferrer' : undefined}
                target={cta.external ? '_blank' : undefined}
              >
                {cta.label}
              </a>
              <LocaleSwitcher currentLocale={currentLocale} onChange={onLocaleChange} />
            </div>

            <button
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] md:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              type="button"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-4 border-t border-[var(--line)] pt-4 md:hidden">
              <nav aria-label="Navigation mobile principale">
                <ul className="grid gap-2">
                  {items.map((item) => (
                    <li key={item.href}>
                      <a
                        className="flex min-h-12 items-center rounded-[16px] border border-[var(--line)] bg-white px-4 py-3 text-[0.82rem] font-medium uppercase tracking-[0.12em] text-[var(--ink)]"
                        href={item.href}
                        onClick={handleCloseMobileMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-4 flex items-center justify-between gap-3">
                <LocaleSwitcher currentLocale={currentLocale} onChange={onLocaleChange} />
                <a
                  className="inline-flex min-h-11 items-center rounded-full bg-[var(--ink)] px-4 py-2.5 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-white"
                  href={cta.href}
                  rel={cta.external ? 'noreferrer' : undefined}
                  target={cta.external ? '_blank' : undefined}
                  onClick={handleCloseMobileMenu}
                >
                  {cta.label}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
