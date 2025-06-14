import { notFound } from 'next/navigation'

import Tag from '@/enums/tag'
import PostsByTag from '@/screens/PostsByTag'
import { getLanguageByCode, supportedLanguages } from '@/services/lang'

export const revalidate = false

export const generateStaticParams = async () => {
  return supportedLanguages.flatMap(language =>
    Object.values(Tag).map(tag => ({
      lang: language.code.toLowerCase(),
      tag
    }))
  )
}

export const dynamicParams = false

interface PageProps {
  params: Promise<{
    lang: string
    tag: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { lang, tag } = await params
  const language = getLanguageByCode(lang)

  if (!language) {
    notFound()
  }

  return <PostsByTag tag={tag} />
} 