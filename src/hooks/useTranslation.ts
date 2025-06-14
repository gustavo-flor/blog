import { useContext } from 'react'

import { I18nContext } from '@/providers/I18n'

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context.i18n) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return { i18n: context.i18n, t: context.t }
}
