import i18next, { t } from 'i18next'
import { initReactI18next } from 'react-i18next';

import { getSupportedLanguages } from './lang';
import { resources, namespaces, defaultNamespace } from './../locales';

i18next
  .use(initReactI18next)
  .init({
    debug: true,
    resources,
    lng: 'en-US',
    fallbackLng: 'pt-BR',
    supportedLngs: getSupportedLanguages().map(it => it.code),
    load: 'currentOnly',
    ns: namespaces,
    defaultNS: defaultNamespace,
    interpolation: { escapeValue: false }
  });

export const i18n = i18next;

interface TranslateProps {
  ns: string,
  [any: string]: any
}

export const translate = (key: string, { ns, ...rest }: TranslateProps = { ns: defaultNamespace }) => {
  return t(key, { ns, ...rest })
}
