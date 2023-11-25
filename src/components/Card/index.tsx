import { Link } from 'react-router-dom';
import { Post } from '../../services/post';

interface Props {
  post: Post
}

const Card = ({ post }: Props) => (
  <div>
    <ul>{post.tags.map(tag =>
      <li key={tag}>
        <span>#{tag}</span>
      </li> 
    )}</ul>
    <Link to={`/posts/${post.slug}`}>
      <h3>{post.title}</h3>
    </Link>
    <p>{post.description}</p>
  </div>
);

export default Card;
