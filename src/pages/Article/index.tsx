import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Me from '../../assets/me.jpg';
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
      <AppBar />
      <main className='container mx-auto px-8 py-8 sm:py-16 md:py-20'>
        <header className='mb-16'>
          <Tags tags={post.tags} />
          <h1 className='text-3xl sm:text-5xl font-bold mt-4 lg:w-5/6'>{post.title}</h1>
          <div className='flex items-center gap-x-2 mt-8'>
            <div className='w-12 rounded-full overflow-hidden opacity-80'>
              <img src={Me} alt="Foto do autor feita por IA" />
            </div>
            <div className='flex flex-col text-gray-500'>
              <span className='font-bold'>Gustavo Flôr</span>
              <span className='text-xs'>
                {post.createdAt.toLocaleDateString('pt-BR')} - {post.durationInMinutes} minutos de leitura
              </span>
            </div>
          </div>
        </header>
        <Markdown fileName={post.fileName} />
      </main>
      <Footer />
    </>
  );
}

export default Article;
