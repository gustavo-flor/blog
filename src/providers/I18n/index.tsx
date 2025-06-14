import i18next from 'i18next'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

import { loadResources } from '@/services/i18n'

interface I18nProviderProps {
  lang: string
  children: ReactNode
}

export async function I18nProvider({ lang, children }: I18nProviderProps) {
  const resources = await loadResources(lang)
  
  await i18next.init({
    lng: lang,
    resources: {
      [lang]: resources
    },
    interpolation: {
      escapeValue: false
    }
  })

  return (
    <I18nextProvider i18n={i18next} defaultNS={'common'}>
      {children}
    </I18nextProvider>
  )
}
