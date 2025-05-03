import { createInstance } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

import { namespaces, defaultNamespace } from '@/locales'
import { defaultLanguage, supportedLanguages } from '@/services/lang'

const loadResources = (lang: string, ns: string) => import(`@/locales/${lang}/${ns}.json`)

export const loadInstance = () => {
  const i18n = createInstance()
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend(loadResources))

  i18n.init({
    debug: false,
    fallbackLng: defaultLanguage.code,
    supportedLngs: supportedLanguages.map(it => it.code),
    load: 'currentOnly',
    ns: namespaces,
    defaultNS: defaultNamespace,
    interpolation: { escapeValue: false }
  })

  return { i18n }
}
