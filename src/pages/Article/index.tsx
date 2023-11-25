import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Post, findBySlug } from './../../services/post';
import NotFound from './../NotFound';

import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import Markdown from '../../components/Markdown';
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
      <main>
        <ul>{post.tags.map(tag => 
          <li key={tag}>
            <span>#{tag}</span>
          </li>
        )}</ul>
        <h1>{post.title}</h1>
        <span>{post.createdAt.toLocaleDateString('pt-BR')}</span>
        
        <Markdown fileName={post.fileName} />
      </main>
      <Footer />
    </>
  );
}

export default Article;
