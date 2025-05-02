import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'
import { useTranslation } from 'react-i18next'

import Button from '@/components/Button'
import Tags from '@/components/Tags'
import { getHighlight, getKey, getPublishedAt } from '@/services/post'

const ns = 'highlight'

const Highlight = () => {
  const { t } = useTranslation()
  const post = getHighlight()
  const postTitle = t(`${getKey(post)}.title`, { ns: 'posts' })
  const postDescription = t(`${getKey(post)}.description`, { ns: 'posts' })

  return (
    <section className='border-b pb-16 lg:pb-0'>
      <div className='container mx-auto px-8 flex flex-col lg:flex-row items-center mt-[-2.5rem]'>
        <div className='lg:w-[70%] lg:border-r pt-24 lg:pr-8'>
          <span className='text-xs opacity-80'>
            {getPublishedAt(post)}
          </span>
          <Link href={`/posts/${post.fileName}`} className='hover:opacity-60'>
            <h2 className='lg:w-11/12 text-3xl sm:text-5xl font-bold mt-4'>
              {postTitle}
            </h2>
          </Link>
          <figure className='mt-8'>
            <img 
              src={`${post.cover.href}?q=768&w=1024`} 
              alt={t('cover.alt', { ns, authorName: post.cover.author.name })} 
            />
          </figure>
        </div>
        <aside className='lg:w-[30%] lg:pl-8 flex flex-col justify-start mt-4 lg:mt-0'>
          <Tags tags={post.tags} />
          <p className='my-4'>{postDescription}</p>
          <Link href={`/posts/${post.fileName}`} className='transition-opacity hover:opacity-90 self-start'>
            <Button className='w-full' title='Ler mais'><ArrowRight weight='bold' width={32} /></Button>
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default Highlight
