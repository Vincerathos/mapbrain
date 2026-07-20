import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteContent } from './data/site-content'
import { isLocale } from './lib/locale'
import { readViewFromHash, type View } from './lib/views'
import { AudienceSection } from './sections/audience-section'
import { AboutSection } from './sections/about-section'
import { AutomationSection } from './sections/automation-section'
import { FaqSection } from './sections/faq-section'
import { FinalCtaSection } from './sections/final-cta-section'
import { Footer } from './sections/footer'
import { FormationsSection } from './sections/formations-section'
import { Header } from './sections/header'
import { HeroSection } from './sections/hero-section'
import { LogoMarqueeSection } from './sections/logo-marquee-section'
import { PartnersSection } from './sections/partners-section'
import { PromiseSection } from './sections/promise-section'
import { ProjectsSection } from './sections/projects-section'
import { FrameworkSection } from './sections/framework-section'
import type { Locale } from './types/site'

function App() {
  const { i18n, t } = useTranslation()
  const [view, setView] = useState<View>(() => readViewFromHash())

  const locale: Locale = isLocale(i18n.resolvedLanguage)
    ? i18n.resolvedLanguage
    : 'fr'

  const content = siteContent[locale]

  useEffect(() => {
    const handleHashChange = () => {
      setView(readViewFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [view])

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

      <Header
        activeView={view}
        cta={content.navigation.cta}
        currentLocale={locale}
        items={content.navigation.items}
        onLocaleChange={handleLocaleChange}
      />

      <main className={view === 'home' ? undefined : 'pt-24 sm:pt-28 lg:pt-32'} id="content">
        {view === 'home' ? (
          <>
            <HeroSection content={content.hero} />
            <LogoMarqueeSection content={content.partners} />
            <PromiseSection content={content.promise} />
            <AudienceSection content={content.audiences} />
            <FinalCtaSection />
          </>
        ) : null}

        {view === 'method' ? <FrameworkSection content={content.framework} /> : null}

        {view === 'automation' ? (
          <AutomationSection content={content.automation} />
        ) : null}

        {view === 'formations' ? (
          <FormationsSection content={content.formations} />
        ) : null}

        {view === 'projects' ? <ProjectsSection content={content.projects} /> : null}

        {view === 'about' ? (
          <>
            <AboutSection content={content.about} />
            <PartnersSection content={content.partners} />
          </>
        ) : null}

        {view === 'contact' ? (
          <>
            <FaqSection content={content.faq} />
            <FinalCtaSection />
          </>
        ) : null}
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
