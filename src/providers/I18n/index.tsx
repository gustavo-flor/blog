'use client'

import { createContext, useContext, ReactNode } from 'react'

interface I18nContextType {
  lang: string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  lang: string
  children: ReactNode
}

export function I18nProvider({ lang, children }: I18nProviderProps) {
  const value: I18nContextType = { lang }
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
