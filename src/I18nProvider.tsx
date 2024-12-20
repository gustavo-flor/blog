import { I18nextProvider } from 'react-i18next'

import { i18n } from './services/i18n'

interface Props {
  children?: React.ReactNode;
}

const I18nProvider = ({ children }: Props) => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
)

export default I18nProvider
