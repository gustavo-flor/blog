import { useEffect, useState } from 'react';
import { Post, findAll } from '../../services/post';
import Card from '../Card';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(findAll());
  }, []);

  return (
    <section className='w-full p-8'>
      <h2 className='text-2xl'>Veja as <strong>últimas publicações</strong></h2>
      <ul>{posts.map(post => 
        <li key={post.slug}><Card post={post} /></li>
      )}</ul>
    </section>
  )
}

export default Posts;