import i18next, { t } from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { defaultLanguage, getSupportedLanguages } from './lang';
import { resources, namespaces, defaultNamespace } from './../locales';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    resources,
    fallbackLng: defaultLanguage.code,
    supportedLngs: getSupportedLanguages().map(it => it.code),
    load: 'currentOnly',
    ns: namespaces,
    defaultNS: defaultNamespace,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'Preferred-Language'
    }
  });

export const i18n = i18next;

interface TranslateProps {
  ns: string,
  [any: string]: any
}

export const translate = (key: string, { ns, ...rest }: TranslateProps = { ns: defaultNamespace }) => {
  return t(key, { ns, ...rest })
}
