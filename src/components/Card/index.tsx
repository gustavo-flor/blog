import { Link } from 'react-router-dom';
import { Post } from '../../services/post';
import Tags from '../Tags';

interface Props {
  post: Post
}

const Card = ({ post }: Props) => (
  <div>
    <Tags tags={post.tags} />
    <Link to={`/posts/${post.slug}`}>
      <h4 className='text-xl font-bold hover:opacity-60 my-2'>{post.title}</h4>
    </Link>
    <p className='opacity-80'>{post.description}</p>
  </div>
);

export default Card;
