import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { findBySlug, posts } from '@/repositories/post'
import Article from '@/screens/Article'
import { readFile } from '@/services/file'
import { getLanguageByCode, supportedLanguages } from '@/services/lang'

export const revalidate = false 

export const generateStaticParams = async () => {
  return supportedLanguages.flatMap(language =>
    posts.map(post => ({
      lang: language.code.toLowerCase(),
      slug: post.slug
    }))
  )
}

export const dynamicParams = false

interface PageProps {
  params: Promise<{ 
    lang: string
    slug: string 
  }>
}

export default async function Page({ params }: PageProps) {
  const { lang, slug } = await params
  const post = findBySlug(slug)
  const language = getLanguageByCode(lang)

  if (!post || !language) {
    return notFound()
  }

  const content = await readFile(`/markdown/${language.code}/${post.slug}.md`)
  return <Article post={post} content={content} />
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const post = findBySlug(slug)
  const language = getLanguageByCode(lang)
  
  if (!post || !language) {
    return notFound()
  }

  const { t } = useTranslation()
  const title = t(`${post.slug}.title`, { ns: 'posts' })
  const description = t(`${post.slug}.description`, { ns: 'posts' })

  return {
    title: `${title} | Gustavo Flôr`,
    description: description
  }
} 