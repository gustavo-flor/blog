export enum Languages {
  PT_BR = "pt-BR",
  EN_US = "en-US",
}

export const getDefaultLanguage = () => Languages.PT_BR

export const getLanguage = (defaultValue: Languages = getDefaultLanguage()) => {
  return defaultValue
}
