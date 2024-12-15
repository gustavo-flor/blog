export enum LanguageCode {
  PT_BR = "pt-BR",
  EN_US = "en-US"
}

interface Language {
  code: LanguageCode;
  label: string
}

export const languages: Language[] = [
  { 
    code: LanguageCode.PT_BR,
    label: "🇧🇷"
  },
  { 
    code: LanguageCode.EN_US,
    label: "🇺🇸"
  }
]

export const defaultLanguage = languages.find(it => it.code === LanguageCode.PT_BR)!

export const getLanguage = (defaultValue: Language = defaultLanguage) => defaultValue
