import type { Locale } from '../types/site'

interface LocaleSwitcherProps {
  currentLocale: Locale
  onChange: (locale: Locale) => void
}

export function LocaleSwitcher({
  currentLocale,
  onChange
}: LocaleSwitcherProps) {
  return (
    <div
      className="inline-flex items-center border border-[var(--line)]"
      role="group"
    >
      {(['fr', 'en'] as const).map((locale) => {
        const isActive = locale === currentLocale

        return (
          <button
            key={locale}
            aria-pressed={isActive}
            className={`min-h-11 min-w-11 px-3 text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] ${
              isActive
                ? 'bg-[var(--ink)] text-[var(--surface)]'
                : 'text-[var(--muted)] hover:text-[var(--ink)]'
            }`}
            onClick={() => onChange(locale)}
            type="button"
          >
            {locale}
          </button>
        )
      })}
    </div>
  )
}
