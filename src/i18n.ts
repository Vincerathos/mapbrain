import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        closeMenu: 'Fermer la navigation',
        contactFormHeading: 'Une question, un challenge ou un lancement à cadrer ?',
        contactFormMessage:
          'Dites-nous ce que MAPBRAIN doit structurer, construire ou accélérer.',
        contactFormName: 'Nom complet',
        contactFormEmail: 'Email',
        headerMenuCardBody:
          'Stratégie, produit, design et IA dans un seul studio.',
        languageLabel: 'Langue du site',
        languageNames: {
          en: 'anglais',
          fr: 'français'
        },
        letsTalkTitle: 'Parlons-en',
        menuViewLabel: 'voir',
        openMenu: 'Ouvrir la navigation',
        promiseBandTitle: 'Pourquoi MAPBRAIN',
        skipToContent: 'Aller au contenu principal',
        switchLanguage: 'Passer en {{language}}'
      }
    },
    en: {
      translation: {
        closeMenu: 'Close navigation',
        contactFormHeading: 'Got a question, challenge, or launch to shape?',
        contactFormMessage:
          'Tell us what MAPBRAIN should structure, build or accelerate.',
        contactFormName: 'Full name',
        contactFormEmail: 'Email',
        headerMenuCardBody:
          'Strategy, product, design and AI in one studio.',
        languageLabel: 'Website language',
        languageNames: {
          en: 'English',
          fr: 'French'
        },
        letsTalkTitle: "Let's Talk",
        menuViewLabel: 'view',
        openMenu: 'Open navigation',
        promiseBandTitle: 'Why MAPBRAIN',
        skipToContent: 'Skip to main content',
        switchLanguage: 'Switch to {{language}}'
      }
    }
  },
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false
  },
  lng: 'fr'
})

export default i18n
