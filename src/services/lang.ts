export enum Languages {
  PT_BR = "pt-BR",
  EN_US = "en-US",
  ES_ES = "es-ES"
}

export const getDefaultLanguage = () => Languages.PT_BR

export const getLanguage = (defaultValue: Languages = getDefaultLanguage()) => {
  return defaultValue
}
