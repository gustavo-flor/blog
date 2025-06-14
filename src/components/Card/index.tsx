import Link from 'next/link'

import Tags from '@/components/Tags'
import { useTranslation } from '@/providers/I18n'
import { IPost } from '@/schemas/post'

interface Props {
  post: IPost
}

const Card = ({ post }: Props) => {
  const { t } = useTranslation()
  const title = t(`${post.slug}.title`, { ns: 'posts' })
  const description = t(`${post.slug}.description`, { ns: 'posts' })
  
  return (
    <div>
      <Tags tags={post.tags} />
      <Link href={`/posts/${post.slug}`}>
        <h3 className='text-xl font-bold hover:opacity-60 my-2'>{post.icon} {title}</h3>
      </Link>
      <p className='opacity-80'>{description}</p>
    </div>
  )
}

export default Card
