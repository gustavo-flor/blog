import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import { Post, findAll } from '../../services/post';

import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(findAll());
  }, []);

  return (
    <>
      <Header />
      <main>
        <strong>Olá,</strong>
        <p>meu nome é Gustavo Flôr</p>
        <h1>Este é o lugar onde escrevo o que gostaria de ler</h1>
      </main>
      <section>
        <h2>Veja as <strong>últimas publicações</strong></h2>
        <ul>{posts.map(post => 
          <li key={post.slug}>
            <ul>{post.tags.map(tag =>
              <li key={tag}>
                <span>#{tag}</span>
              </li> 
            )}</ul>
            <Link to={`/posts/${post.slug}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.description}</p>
          </li>
        )}</ul>
      </section>
    </>
  );
}

export default Home;
