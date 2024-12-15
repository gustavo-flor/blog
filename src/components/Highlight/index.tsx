import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { getHighlight, getPublishedAt } from '../../services/post';
import Button from '../Button';
import Tags from '../Tags';

const Highlight = () => {
  const post = getHighlight();

  return (
    <section className='border-b pb-16 lg:pb-0'>
      <div className='container mx-auto px-8 flex flex-col lg:flex-row items-center mt-[-2.5rem]'>
        <div className='lg:w-[70%] lg:border-r pt-24 lg:pr-8'>
          <span className='text-xs opacity-80'>
            {getPublishedAt(post)}
          </span>
          <Link to={`/posts/${post.fileName}`} className='hover:opacity-60'>
            <h2 className='lg:w-11/12 text-3xl sm:text-5xl font-bold mt-4'>
              {post.title}
            </h2>
          </Link>
          <figure className='mt-8'>
            <img src={`${post.cover.href}?q=768&w=1024`} alt={`Fotografia de ${post.cover.author.name}`} />
          </figure>
        </div>
        <aside className='lg:w-[30%] lg:pl-8 flex flex-col justify-start mt-4 lg:mt-0'>
          <Tags tags={post.tags} />
          <p className='my-4'>{post.description}</p>
          <Link to={`/posts/${post.fileName}`} className='transition-opacity hover:opacity-90 self-start'>
            <Button className='w-full' title='Ler mais'><ArrowRight weight='bold' width={32} /></Button>
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Highlight;
