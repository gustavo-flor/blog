import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Me from '../../assets/me.jpg';
import Anchor from '../../components/Anchor';
import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import Markdown from '../../components/Markdown';
import Tags from '../../components/Tags';
import { Post, findBySlug } from './../../services/post';
import NotFound from './../NotFound';

import './style.css';

type Params = {
  slug: string;
}

const Article = () => {
  const { slug } = useParams<Params>();
  const [post, setPost] = useState<Post | undefined>();

  useEffect(() => {
    if (slug === undefined) {
      return;
    }
    setPost(findBySlug(slug));
  }, [slug]);

  if (post === undefined) {
    return <NotFound />
  }
  
  return (
    <>
      <AppBar alwaysCenter={true} />
      <main className='container lg:max-w-4xl mx-auto px-8 py-8 sm:py-16 md:py-20'>
        <header className='mb-8 sm:mb-16'>
          <Tags tags={post.tags} />
          <h1 className='text-3xl sm:text-5xl font-bold mt-4'>{post.title}</h1>
          <div className='flex items-center gap-x-2 mt-8'>
            <div className='w-20 rounded-full overflow-hidden border-2 border-purple-500 cursor-pointer'>
              <img src={Me} alt='Uma foto minha criada por IA' />
            </div>
            <div className='flex flex-col text-gray-500'>
              <span className='font-bold'>Gustavo Flôr</span>
              <span className='text-xs'>
                {post.createdAt.toLocaleDateString('pt-BR')} - {post.durationInMinutes} minutos de leitura
              </span>
              {post.publishedOn != undefined && 
                <span className='text-xs opacity-80'>
                  Originalmente publicado em <Anchor className='text-purple-500 underline' target='_blank' href={post.publishedOn.href}>{post.publishedOn.label}</Anchor>
                </span>
              }
            </div>
          </div>
        </header>
        <Markdown fileName={post.fileName} />
      </main>
      <Footer alwaysCenter={true} />
    </>
  );
}

export default Article;
