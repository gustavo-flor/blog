'use client'

import i18next, { i18n, InitOptions, TFunction } from 'i18next'
import { createContext, ReactNode, useContext } from 'react'

interface I18nContextType {
  i18n: i18n
  t: TFunction
  options: InitOptions
}

const I18nContext = createContext<I18nContextType>({} as I18nContextType)

interface I18nProviderProps {
  children: ReactNode
  options: InitOptions
}

export function I18nProvider({ options, children }: I18nProviderProps) {
  const i18n = i18next.createInstance(options)

  i18n.init()

  return (
    <I18nContext.Provider value={{ i18n, t: i18n.t, options }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context.i18n) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
}
