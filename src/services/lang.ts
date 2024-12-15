export enum LanguageCode {
  PT_BR = "pt-BR",
  EN_US = "en-US"
}

export interface Language {
  code: LanguageCode;
  label: string
}

const preferredLangCodeStorageKey = "Preferred-Lang-Code"

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

export const getLanguage = (defaultValue: Language = defaultLanguage) => {
  const preferredLangCode = localStorage.getItem(preferredLangCodeStorageKey)
  return languages.find(it => it.code === preferredLangCode) ?? defaultValue
}
