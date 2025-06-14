import { ArrowCircleDown, CircleNotch } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'

import Button from '@/components/Button'
import Card from '@/components/Card'
import { useTranslation } from '@/hooks/useTranslation'
import { findAll, findAllByTag } from '@/repositories/post'
import { IPost } from '@/schemas/post'

interface Props {
  tag?: string;
}

const LastPosts = ({ tag }: Props) => {
  const { i18n, t } = useTranslation()
  const [pageNumber, setPageNumber] = useState(1)
  const [nextPageNumber, setNextPageNumber] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const page = tag != undefined 
      ? findAllByTag(tag, pageNumber) 
      : findAll(pageNumber)
    setNextPageNumber(page.nextPage)
    setPosts([...posts, ...page.items])
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber])

  const nextPage = () => {
    if (nextPageNumber) {
      setLoading(true)
      setPageNumber(nextPageNumber)
    }
  }

  const LoadingButton = () => (
    <Button className='animate-spin' title={t('loading')} disabled variant='key-button'>
      <CircleNotch size={48} />
    </Button>
  )

  const LoadMoreButton = () => (
    <Button onClick={() => nextPage()} className='animate-bounce' title={t('loadMore')} variant='key-button'>
      <ArrowCircleDown size={48} />
    </Button>
  )

  return (
    <section className='container mx-auto px-8 pt-8 pb-16 sm:py-16 md:py-20'>
      <h2 className='text-2xl'>
        <Trans 
          i18n={i18n}
          i18nKey="title" 
          ns="last-posts"
          components={{
            bold: <strong />
          }}
        />
      </h2>
      <ul className='flex flex-wrap justify-start gap-x-[5%] gap-y-8 sm:gap-y-16 mt-8'>{posts.map(post => 
        <li key={post.slug} className='md:w-[47.5%] lg:w-[30%]'><Card post={post} /></li>
      )}</ul>
      {nextPageNumber != null && 
        <footer className='flex justify-center mt-16'>
          {loading ? <LoadingButton /> : <LoadMoreButton />}
        </footer>
      }
    </section>
  )
}

export default LastPosts