import { i18n } from './i18n'

export enum LanguageCode {
  PT_BR = 'pt-BR',
  EN_US = 'en-US'
}

export interface Language {
  code: LanguageCode;
  flag: string
}

const portuguese = { 
  code: LanguageCode.PT_BR,
  flag: '🇧🇷'
}

const english = { 
  code: LanguageCode.EN_US,
  flag: '🇺🇸'
}

export const languages: Language[] = [portuguese, english]

export const defaultLanguage = portuguese

export const getPreferredLanguage = () => {
  return languages.find(it => it.code === i18n.language) ?? defaultLanguage
}

export const getSupportedLanguages = () => languages
