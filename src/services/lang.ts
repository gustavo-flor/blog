export enum LanguageCode {
  PT_BR = 'pt-BR',
  EN_US = 'en-US'
}

export interface Language {
  code: LanguageCode;
  flag: string;
  displayName: string;
}

const portuguese = { 
  code: LanguageCode.PT_BR,
  flag: '🇧🇷',
  displayName: 'Português'
}

// const english = { 
//   code: LanguageCode.EN_US,
//   flag: '🇺🇸',
//   displayName: 'English'
// }

export const supportedLanguages: Language[] = [portuguese]

export const defaultLanguage = portuguese

export const getPreferredLanguage = () => defaultLanguage
