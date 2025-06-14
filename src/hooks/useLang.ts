import { useContext } from 'react'

import { I18nContext } from '@/providers/I18n'
import { Language } from '@/services/lang'

export function useLang(): Language {
  const context = useContext(I18nContext)
  if (!context.i18n) {
    throw new Error('useLang must be used within an I18nProvider')
  }
  return context.language
}