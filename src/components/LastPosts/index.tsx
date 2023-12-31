import { findAll, findAllByTag } from '../../services/post';
import Card from '../Card';

interface Props {
  tag?: string;
}

const LastPosts = ({ tag }: Props) => {
  const posts = tag != undefined ? findAllByTag(tag) : findAll();

  return (
    <section className='container mx-auto px-8 pt-8 pb-16 sm:py-16 md:py-20'>
      <h3 className='text-2xl'>Veja as <strong>últimas publicações</strong></h3>
      <ul className='flex flex-wrap justify-start gap-x-[5%] gap-y-8 sm:gap-y-16 mt-8'>{posts.map(post => 
        <li key={post.slug} className='md:w-[47.5%] lg:w-[30%]'><Card post={post} /></li>
      )}</ul>
    </section>
  )
}

export default LastPosts;