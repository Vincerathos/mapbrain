import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { CtaLink, Locale, NavItem } from '../types/site'
import { ButtonLink } from '../ui/button-link'
import { LocaleSwitcher } from '../ui/locale-switcher'

interface HeaderProps {
  cta: CtaLink
  currentLocale: Locale
  isMenuOpen: boolean
  items: NavItem[]
  onLocaleChange: (locale: Locale) => void
  onToggleMenu: () => void
}

export function Header({
  cta,
  currentLocale,
  isMenuOpen,
  items,
  onLocaleChange,
  onToggleMenu
}: HeaderProps) {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:rgb(247_245_239_/_0.94)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a
          className="flex items-baseline gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[var(--ink)]"
          href="#top"
        >
          <span className="font-mono text-[var(--accent)]">MB</span>
          <span>MAPBRAIN</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              className="text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher currentLocale={currentLocale} onChange={onLocaleChange} />
          <ButtonLink link={cta} tone="secondary" />
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
          className="inline-flex size-11 items-center justify-center border border-[var(--line)] text-[var(--ink)] lg:hidden"
          onClick={onToggleMenu}
          type="button"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-[var(--line)] lg:hidden">
          <div className="mx-auto max-w-[1600px] px-5 py-5 sm:px-8">
            <nav className="flex flex-col gap-4">
              {items.map((item) => (
                <a
                  key={item.href}
                  className="flex min-h-11 items-center text-base text-[var(--ink)]"
                  href={item.href}
                  onClick={onToggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <LocaleSwitcher currentLocale={currentLocale} onChange={onLocaleChange} />
              <ButtonLink link={cta} tone="secondary" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
