import type { Locale } from '../types/site'
import { LocaleSwitcher } from '../ui/locale-switcher'

interface HeaderProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function Header({ currentLocale, onLocaleChange }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1720px] justify-end border-b border-[color:rgb(17_17_17_/_0.1)] px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <LocaleSwitcher currentLocale={currentLocale} onChange={onLocaleChange} />
      </div>
    </header>
  )
}
