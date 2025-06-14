'use client'

import i18next, { i18n, InitOptions, TFunction } from 'i18next'
import { createContext, ReactNode } from 'react'

import { Language } from '@/services/lang'

interface I18nContextType {
  i18n: i18n
  t: TFunction
  options: InitOptions,
  language: Language
}

export const I18nContext = createContext<I18nContextType>({} as I18nContextType)

interface I18nProviderProps {
  children: ReactNode
  options: InitOptions
  language: Language
}

export function I18nProvider({ options, children, language }: I18nProviderProps) {
  const i18n = i18next.createInstance(options)

  i18n.init()

  return (
    <I18nContext.Provider value={{ i18n, t: i18n.t, options, language }}>
      {children}
    </I18nContext.Provider>
  )
}
