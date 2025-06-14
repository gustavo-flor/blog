import Link from 'next/link'

import Tags from '@/components/Tags'
import { IPost } from '@/schemas/post'

interface Props {
  post: IPost
}

const Card = ({ post }: Props) => {
  return (
    <div>
      <Tags tags={post.tags} />
      <Link href={`/posts/${post.slug}`}>
        <h3 className='text-xl font-bold hover:opacity-60 my-2'>{post.icon} {post.title}</h3>
      </Link>
      <p className='opacity-80'>{post.description}</p>
    </div>
  )
}

export default Card
