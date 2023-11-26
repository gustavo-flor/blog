import { Link } from 'react-router-dom';
import { Post } from '../../services/post';

interface Props {
  post: Post
}

const Card = ({ post }: Props) => (
  <div>
    <ul className='flex flex-wrap gap-2 mb-2'>{post.tags.map(tag =>
      <li key={tag}>
        <span className='rounded-2xl bg-gray-50 text-zinc-700 px-2 py-1'>
          <strong className='text-purple-500'>#</strong>{tag}
        </span>
      </li> 
    )}</ul>
    <Link to={`/posts/${post.slug}`}>
      <h4 className='text-xl font-bold hover:opacity-60'>{post.title}</h4>
    </Link>
    <p className='mt-2 opacity-80'>{post.description}</p>
  </div>
);

export default Card;
