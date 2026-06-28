import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { siteContent } from './data/site-content'
import { isLocale } from './lib/locale'
import { AudienceSection } from './sections/audience-section'
import { AboutSection } from './sections/about-section'
import { AutomationSection } from './sections/automation-section'
import { CapabilitySection } from './sections/capability-section'
import { FaqSection } from './sections/faq-section'
import { FinalCtaSection } from './sections/final-cta-section'
import { Footer } from './sections/footer'
import { Header } from './sections/header'
import { HeroSection } from './sections/hero-section'
import { LogoMarqueeSection } from './sections/logo-marquee-section'
import { PartnersSection } from './sections/partners-section'
import { ProjectsSection } from './sections/projects-section'
import type { Locale } from './types/site'

function App() {
  const { i18n, t } = useTranslation()

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

      <Header currentLocale={locale} onLocaleChange={handleLocaleChange} />

      <main id="content">
        <HeroSection content={content.hero} />
        <LogoMarqueeSection />
        <AboutSection content={content.about} />
        <ProjectsSection content={content.projects} />
        <AudienceSection content={content.audiences} />
        <AutomationSection content={content.automation} />
        <CapabilitySection content={content.capabilities} />
        <PartnersSection content={content.partners} />
        <FaqSection content={content.faq} />
        <FinalCtaSection content={content.finalCta} />
      </main>

      <Footer
        content={content.footer}
        currentLocale={locale}
        items={content.navigation.items}
      />
    </div>
  )
}

export default App
