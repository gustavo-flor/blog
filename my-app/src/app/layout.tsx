import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import type { Metadata } from 'next'

import I18nProvider from '@/providers/I18nProvider'
import { defaultLanguage } from '@/services/lang'

import './style.css'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  icons: [
    {
      url: '/images/lotus.svg',
      type: 'image/svg+xml',
      rel: 'icon'
    }
  ],
  title: 'Gustavo Flôr',
  description: 'Este é o lugar em que escrevo o que gostaria de ler, falo sobre o que estou estudando e publico sobre sistemas que você utiliza todos os dias.'
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang={defaultLanguage.code}>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default Layout
