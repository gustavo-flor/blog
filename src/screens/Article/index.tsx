'use client'

import Anchor from '@/components/Anchor'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Markdown from '@/components/LazyMarkdown'
import Tags from '@/components/Tags'
import Trans from '@/components/Trans'
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
  const title = t(`${post.slug}.title`, { ns: 'posts' })
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
              <Trans 
                i18nKey="cover.description" 
                ns="article"
                values={{ authorName: post.cover.author.name }}
                components={{
                  link: <Anchor className='text-purple-500 underline' href={post.cover.author.href} />
                }}
              />
            </figcaption>
          </figure>
        }
        <header className='mb-8 pt-8'>
          <Tags tags={post.tags} />
          <h1 className='text-3xl sm:text-5xl font-bold mt-4'>{post.icon} {title}</h1>
          {post.origin != undefined && 
            <span className='text-xs opacity-40 mt-4 block'>
              <Trans 
                i18nKey="origin.description" 
                ns="article"
                values={{ site: post.origin.hostname }}
                components={{
                  'link': <Anchor className='text-purple-500 underline' href={post.origin.href} />
                }}
              />
            </span>
          }
          <div className='flex items-center gap-x-2 mt-8'>
            <div className='w-20 h-20 flex items-center rounded-full overflow-hidden border-2'>
              <img src='/images/me-in-purple.jpg' alt={t('authorImage.alt', { ns: 'presentation' })} />
            </div>
            <ul className='flex flex-col text-gray-500'>
              <li title={t('tooltips.author')} className='font-bold text-gray-700'>
                Gustavo Flôr
              </li>
              <li title={t('tooltips.publishDate')} className='text-xs opacity-80'>
                {getPrettyDate(post.publishedAt, lang, t)}
              </li>
              <li title={t('tooltips.readingInfo')} className='text-xs'>
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
