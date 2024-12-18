import { Link } from 'react-router-dom';
import { getKey, Post } from '../../services/post';
import Tags from '../Tags';
import { translate } from '../../services/i18n';

interface Props {
  post: Post
}

const Card = ({ post }: Props) => {
  const postTitle = translate(`${getKey(post)}.title`, { ns: 'posts' });
  const postDescription = translate(`${getKey(post)}.description`, { ns: 'posts' });

  return (
    <div>
      <Tags tags={post.tags} />
      <Link to={`/posts/${post.fileName}`}>
        <h3 className='text-xl font-bold hover:opacity-60 my-2'>{postTitle}</h3>
      </Link>
      <p className='opacity-80'>{postDescription}</p>
    </div>
  );
}

export default Card;
