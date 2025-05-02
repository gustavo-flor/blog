import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import Tags from '@/components/Tags'
import { getKey, Post } from '@/services/post'

interface Props {
  post: Post
}

const Card = ({ post }: Props) => {
  const { t } = useTranslation()
  const postTitle = t(`${getKey(post)}.title`, { ns: 'posts' })
  const postDescription = t(`${getKey(post)}.description`, { ns: 'posts' })

  return (
    <div>
      <Tags tags={post.tags} />
      <Link href={`/posts/${post.fileName}`}>
        <h3 className='text-xl font-bold hover:opacity-60 my-2'>{postTitle}</h3>
      </Link>
      <p className='opacity-80'>{postDescription}</p>
    </div>
  )
}

export default Card
