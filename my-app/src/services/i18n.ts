import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { resources, namespaces, defaultNamespace } from '@/locales'
import { defaultLanguage, supportedLanguages } from '@/services/lang'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    resources,
    fallbackLng: defaultLanguage.code,
    supportedLngs: supportedLanguages.map(it => it.code),
    load: 'currentOnly',
    ns: namespaces,
    defaultNS: defaultNamespace,
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
      lookupLocalStorage: 'Preferred-Language'
    }
  })

export const i18n = i18next