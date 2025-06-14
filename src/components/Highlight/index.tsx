import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { useTranslation } from 'react-i18next'

import Button from '@/components/Button'
import Tags from '@/components/Tags'
import { getHighlight } from '@/repositories/post'
import { getPrettyDate } from '@/services/date'
import { defaultLanguage } from '@/services/lang'

const Highlight = () => {
  const { t } = useTranslation()
  const post = getHighlight()
  const title = t(`${post.slug}.title`, { ns: 'posts' })
  const description = t(`${post.slug}.description`, { ns: 'posts' })
  const lang = defaultLanguage

  return (
    <section className='border-b pb-16 lg:pb-0'>
      <div className='container mx-auto px-8 flex flex-col lg:flex-row items-center mt-[-2.5rem]'>
        <div className='lg:w-[70%] lg:border-r pt-24 lg:pr-8'>
          <span className='text-xs opacity-80'>
            {getPrettyDate(post.publishedAt, lang, t)}
          </span>
          <Link href={`/posts/${post.slug}`} className='hover:opacity-60 cursor-pointer'>
            <h2 className='lg:w-11/12 text-3xl sm:text-5xl font-bold mt-4'>
              {post.icon} {title}
            </h2>
          </Link>
          <figure className='mt-8'>
            <img 
              src={`${post.cover.href}?q=768&w=1024`} 
              alt={t('cover.alt', { ns: 'highlight', values: { authorName: post.cover.author.name } })} 
            />
          </figure>
        </div>
        <aside className='lg:w-[30%] lg:pl-8 flex flex-col justify-start mt-4 lg:mt-0'>
          <Tags tags={post.tags} />
          <p className='my-4'>{description}</p>
          <Link href={`/posts/${post.slug}`} className='transition-opacity hover:opacity-90 self-start'>
            <Button className='w-full cursor-pointer' title={t('readMore')}>
              <ArrowRight weight='bold' width={32} />
            </Button>
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default Highlight
