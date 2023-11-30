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

const Article = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | undefined>();
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState(1);

  useEffect(() => {
    if (slug === undefined) {
      return;
    }
    setPost(findBySlug(slug));
  }, [slug]);

  useEffect(() => {
    if (post === undefined) {
      return;
    }
    const loadContent = async () => {
      const module = await import(`./../../assets/markdown/${post.fileName}.md`);
      fetch(module.default)
        .then(file => file.text())
        .then(text => setContent(text));
    }
    loadContent();
  }, [post]);

  useEffect(() => {
    const wordsPerMinute = 265;
    const numberOfWords = content.split(/\s/g).length;
    const minutes = numberOfWords / wordsPerMinute;
    setReadTime(Math.ceil(minutes));
  }, [content]);

  if (post === undefined) {
    return <NotFound />
  }
  
  return (
    <>
      <AppBar alwaysCenter={true} />
      <main className='container lg:max-w-3xl mx-auto px-8 py-8 sm:py-16 md:pb-20'>
        {post.cover != undefined && 
          <figure>
            <img src={post.cover.href} />
            {post.cover.author != undefined && 
              <figcaption className='text-center text-gray-400 text-sm mt-4'>
                Fotografia de <a className='underline text-purple-500' href={post.cover.author.href}>{post.cover.author.name}</a>
              </figcaption>
            }
          </figure>
        }
        <header className='mb-8 sm:mb-16 pt-8'>
          <Tags tags={post.tags} />
          <h1 className='text-3xl sm:text-5xl font-bold mt-4'>{post.title}</h1>
          <div className='flex items-center gap-x-2 mt-8'>
            <div className='w-20 rounded-full overflow-hidden border-2 border-purple-500 cursor-pointer'>
              <img src={Me} alt='Uma foto minha criada por IA' />
            </div>
            <div className='flex flex-col text-gray-500'>
              <span className='font-bold'>Gustavo Flôr</span>
              <span className='text-xs'>
                {post.createdAt.toLocaleDateString('pt-BR')} - {readTime} min. de leitura
              </span>
              {post.origin != undefined && 
                <span className='text-xs opacity-80'>
                  Publicado em <Anchor className='text-purple-500 underline' target='_blank' href={post.origin.href}>{post.origin.hostname}</Anchor>
                </span>
              }
            </div>
          </div>
        </header>
        <Markdown content={content} />
      </main>
      <Footer alwaysCenter={true} />
    </>
  );
}

export default Article;
