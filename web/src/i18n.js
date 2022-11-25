import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import locale files here.
import en_admin from './locales/en/admin.json'
import en_auth from './locales/en/auth.json'
import en_layouts from './locales/en/layouts.json'
import en_translations from './locales/en/translation.json'
import fr_admin from './locales/fr/admin.json'
import fr_auth from './locales/fr/auth.json'
import fr_layouts from './locales/fr/layouts.json'
import fr_translations from './locales/fr/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    resources: {
      en: {
        admin: en_admin,
        auth: en_auth,
        layouts: en_layouts,
        translation: en_translations,
      },
      fr: {
        admin: fr_admin,
        auth: fr_auth,
        layouts: fr_layouts,
        translation: fr_translations,
      },
    },
  })
export default i18n
