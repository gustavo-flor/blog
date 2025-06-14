'use client'

import Anchor from '@/components/Anchor'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Markdown from '@/components/LazyMarkdown'
import Tags from '@/components/Tags'
import { getReadTime, getNumberOfWords } from '@/repositories/post'
import { IPost } from '@/schemas/post'
import { getPrettyDate } from '@/services/date'
import { defaultLanguage } from '@/services/lang'
import { useI18n } from '@/providers/I18n'

interface ArticleProps {
  post: IPost,
  content: string
}

const Article = ({ post, content }: ArticleProps) => {
  const { t } = useI18n()
  const lang = defaultLanguage
  const numberOfWords = getNumberOfWords(content)
  const readTime = getReadTime(numberOfWords)
  return (
    <>
      <AppBar center />
      <main className='container lg:max-w-3xl mx-auto px-8 py-8 sm:py-16 md:pb-20'>
        {post.cover != undefined && 
          <figure>
            <img 
              src={`${post.cover.href}?q=85&w=768`} 
              alt={t('cover.alt', { ns: 'article', values: { authorName: post.cover.author.name } })} 
            />
            <figcaption className='text-center text-gray-400 text-sm mt-4'>
              Fotografia de <Anchor className='text-purple-500 underline' href={post.cover.author.href}>{post.cover.author.name}</Anchor>
            </figcaption>
          </figure>
        }
        <header className='mb-8 pt-8'>
          <Tags tags={post.tags} />
          <h1 className='text-3xl sm:text-5xl font-bold mt-4'>{post.icon} {post.title}</h1>
          {post.origin != undefined && 
            <span className='text-xs opacity-40 mt-4 block'>
              Publicado em <Anchor className='text-purple-500 underline' href={post.origin.href}>{post.origin.hostname}</Anchor>
            </span>
          }
          <div className='flex items-center gap-x-2 mt-8'>
            <div className='w-20 h-20 flex items-center rounded-full overflow-hidden border-2'>
              <img src='/images/me-in-purple.jpg' alt='Fotografia do autor' />
            </div>
            <ul className='flex flex-col text-gray-500'>
              <li title='Autor' className='font-bold text-gray-700'>
                Gustavo Flôr
              </li>
              <li title='Data de publicação' className='text-xs opacity-80'>
                {getPrettyDate(post.publishedAt, lang, t)}
              </li>
              <li title='Número de palavras e tempo de leitura' className='text-xs'>
                {t('readTime', { ns: 'article', values: { numberOfWords, readTime } })}
              </li>
            </ul>
          </div>
        </header>
        <Markdown content={content} />
      </main>
      <Footer />
    </>
  )
}

export default Article
