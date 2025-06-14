'use client'

import { createContext, useContext, ReactNode } from 'react'

import { Dictionary } from '@/services/dictionary' 

interface TranslateOptions {
  ns?: string
  values?: Record<string, string | number>
}

export type TranslateFn = (key: string, options?: TranslateOptions) => string

interface I18nContextType {
  lang: string  
  t: TranslateFn
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  lang: string
  dictionaries: Record<string, Dictionary>
  children: ReactNode
} 

const interpolate = (text: string, values?: Record<string, string | number>): string => {
  if (!values) {
    return text
  }
  
  return Object.entries(values).reduce((result, [key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g')
    return result.replace(regex, String(value))
  }, text)
}

export function I18nProvider({ lang, dictionaries, children }: I18nProviderProps) {
  const t: TranslateFn = (key: string, options?: TranslateOptions) => {
    const ns = options?.ns || 'common'
    const translation = dictionaries[ns]?.[key] || key
    return interpolate(translation, options?.values)
  }
  
  const value: I18nContextType = { lang, t }
  
  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
