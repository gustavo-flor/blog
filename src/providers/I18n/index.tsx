import { ReactNode } from 'react'
import { I18nextProvider, I18nextProviderProps } from 'react-i18next'

interface I18nProviderProps extends I18nextProviderProps {
  children: ReactNode
}

export function I18nProvider({ i18n, children, ...rest }: I18nProviderProps) {
  return (
    <I18nextProvider i18n={i18n} defaultNS={'common'} {...rest}>
      {children}
    </I18nextProvider>
  )
}
