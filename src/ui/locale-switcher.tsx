import { useTranslation } from 'react-i18next'
import type { Locale } from '../types/site'

interface LocaleSwitcherProps {
  currentLocale: Locale
  onChange: (locale: Locale) => void
}

export function LocaleSwitcher({
  currentLocale,
  onChange
}: LocaleSwitcherProps) {
  const { t } = useTranslation()
  const locales: Locale[] = ['fr', 'en']
  const activeIndex = locales.indexOf(currentLocale)

  return (
    <div
      aria-label={t('languageLabel')}
      className="inline-flex rounded-full border border-[color:rgb(17_17_17_/_0.08)] bg-[color:rgb(255_255_255_/_0.9)] p-1 text-[var(--ink)] shadow-[0_8px_20px_rgba(17,17,17,0.04)]"
      role="group"
    >
      <div className="relative grid grid-cols-2 rounded-full bg-[color:rgb(17_17_17_/_0.04)] p-0.5">
        <span
          aria-hidden="true"
          className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-full bg-[var(--ink)] shadow-[0_6px_16px_rgba(17,17,17,0.14)] transition-transform duration-300 ease-out ${
            activeIndex === 1 ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        {locales.map((locale) => {
          const isActive = locale === currentLocale
          const nextLocaleLabel = t(`languageNames.${locale}`)

          return (
            <button
              key={locale}
              aria-pressed={isActive}
              aria-label={t('switchLanguage', {
                language: nextLocaleLabel
              })}
              className={`relative z-10 min-w-[2.8rem] rounded-full px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] ${
                isActive ? 'text-white' : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
              onClick={() => onChange(locale)}
              type="button"
            >
              {locale}
            </button>
          )
        })}
      </div>
    </div>
  )
}
