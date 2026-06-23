import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        closeMenu: 'Fermer la navigation',
        languageLabel: 'Langue du site',
        languageNames: {
          en: 'anglais',
          fr: 'français'
        },
        openMenu: 'Ouvrir la navigation',
        skipToContent: 'Aller au contenu principal',
        switchLanguage: 'Passer en {{language}}'
      }
    },
    en: {
      translation: {
        closeMenu: 'Close navigation',
        languageLabel: 'Website language',
        languageNames: {
          en: 'English',
          fr: 'French'
        },
        openMenu: 'Open navigation',
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
