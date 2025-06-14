import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Metadata } from 'next'

import './style.css'
import { I18nProvider } from '@/providers/I18n'
import NotFound from '@/screens/NotFound'
import { loadDictionaries } from '@/services/dictionary'
import { defaultLanguage, getLanguageByCode, Language, LanguageCode, supportedLanguages } from '@/services/lang'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    lang: string
  }>
}

export async function generateStaticParams() {
  return supportedLanguages.map(language => ({
    lang: language.code.toLowerCase()
  }))
}

const getMetadata = (language: Language) => {
  const title = 'Gustavo Flôr'
  const description = language.code === LanguageCode.PT_BR 
    ? 'Este é o lugar em que escrevo o que gostaria de ler, falo sobre o que estou estudando e publico sobre sistemas que você utiliza todos os dias.'
    : 'This is the place where I write what I would like to read, talk about what I am studying and publish about systems you use every day.'

  return {
    icons: [
      {
        url: '/images/lotus.svg',
        type: 'image/svg+xml',
        rel: 'icon'
      }
    ],
    title,
    description
  }
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params
  const language = getLanguageByCode(lang)
  
  if (!language) {
    return getMetadata(defaultLanguage)
  }

  return getMetadata(language)
}

interface RootProps {
  content: React.ReactNode
  language: Language,
}

const Root = async ({ content, language }: RootProps) => {
  const dictionaries = await loadDictionaries(language.code)
  return (
    <html lang={language.code}>
      <body>
        <I18nProvider lang={language.code} dictionaries={dictionaries}>
          {content}
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params
  const language = getLanguageByCode(lang)
  
  if (!language) {
    return <Root language={defaultLanguage} content={<NotFound />} />
  }

  return <Root language={language} content={children} />
} 