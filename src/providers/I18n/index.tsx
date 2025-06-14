'use client'

import { createContext, useContext, ReactNode } from 'react'

import { Dictionary } from '@/services/dictionary'
import { withTranslation, TranslateOptions } from '@/services/i18n'

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

export function I18nProvider({ lang, dictionaries, children }: I18nProviderProps) {
  const t = withTranslation(dictionaries)
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
