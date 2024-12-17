import i18next from 'i18next'
import { initReactI18next } from 'react-i18next';

import { getSupportedLanguages } from './lang';
import { resources, namespaces } from './../locales';

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
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  });

export const i18n = i18next;
