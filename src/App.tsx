import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteContent } from './data/site-content'
import { isLocale } from './lib/locale'
import { AudienceSection } from './sections/audience-section'
import { AutomationSection } from './sections/automation-section'
import { CapabilitySection } from './sections/capability-section'
import { FinalCtaSection } from './sections/final-cta-section'
import { Footer } from './sections/footer'
import { FrameworkSection } from './sections/framework-section'
import { Header } from './sections/header'
import { HeroSection } from './sections/hero-section'
import { PartnersSection } from './sections/partners-section'
import { ProjectsSection } from './sections/projects-section'
import { PromiseSection } from './sections/promise-section'
import type { Locale } from './types/site'

function App() {
  const { i18n, t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const locale: Locale = isLocale(i18n.resolvedLanguage)
    ? i18n.resolvedLanguage
    : 'fr'

  const content = siteContent[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content.meta.title

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    )

    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }

    description.content = content.meta.description
  }, [content.meta.description, content.meta.title, locale])

  const handleLocaleChange = (nextLocale: Locale) => {
    setIsMenuOpen(false)
    void i18n.changeLanguage(nextLocale)
  }

  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[var(--ink)] focus:px-4 focus:py-3 focus:text-[var(--surface)]"
        href="#content"
      >
        {t('skipToContent')}
      </a>

      <Header
        cta={content.navigation.cta}
        currentLocale={locale}
        isMenuOpen={isMenuOpen}
        items={content.navigation.items}
        onLocaleChange={handleLocaleChange}
        onToggleMenu={() => {
          setIsMenuOpen((currentValue) => !currentValue)
        }}
      />

      <main id="content">
        <HeroSection content={content.hero} />
        <PromiseSection content={content.promise} />
        <AudienceSection content={content.audiences} />
        <FrameworkSection content={content.framework} />
        <AutomationSection content={content.automation} />
        <ProjectsSection content={content.projects} />
        <CapabilitySection content={content.capabilities} />
        <PartnersSection content={content.partners} />
        <FinalCtaSection content={content.finalCta} />
      </main>

      <Footer
        content={content.footer}
        currentLocale={locale}
        items={content.navigation.items}
        localeLabel={t('languageLabel')}
      />
    </div>
  )
}

export default App
