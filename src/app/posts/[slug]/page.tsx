import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Article from '@/screens/Article'
import { read } from '@/services/file'
import { defaultLanguage } from '@/services/lang'
import { findBySlug, posts } from '@/services/post'

export const revalidate = false

export const generateStaticParams = async () => {
  return posts.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const post = findBySlug(slug)

  if (post === undefined) {
    return notFound()
  }

  const lang = defaultLanguage
  const content = await read(`/markdown/${lang.code}/${post.slug}.md`)

  return <Article post={post} content={content} />
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = findBySlug(slug)

  if (post === undefined) {
    return notFound()
  }

  return {
    title: `${post.title} | Gustavo Flôr`,
    description: post.description
  }
}
