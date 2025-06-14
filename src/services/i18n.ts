import { Dictionary } from './dictionary'

export interface TranslateOptions {
  ns?: string
  values?: Record<string, string | number>
}

export const withTranslation = (dictionaries: Record<string, Dictionary>) => {
  const interpolateVariables = (text: string, values: Record<string, string | number> = {}): string => {
    return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return values[key]?.toString() || match
    })
  }

  const t = (key: string, options: TranslateOptions = {}): string => {
    const { ns = 'common', values } = options
    const translation = dictionaries[ns]?.[key] || key
    
    if (values) {
      return interpolateVariables(translation, values)
    }
    
    return translation
  }

  return t
} 