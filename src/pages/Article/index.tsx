import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Me from '../../assets/me-in-purple.jpg';
import Anchor from '../../components/Anchor';
import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import Markdown from '../../components/LazyMarkdown';
import Tags from '../../components/Tags';
import { defaultLanguage, getPreferredLanguage } from './../../services/lang';
import { Post, findBySlug, getKey, getNumberOfWords, getPublishedAt, getReadTime } from './../../services/post';
import NotFound from './../NotFound';
import Translate from '../../components/Translate';

import './style.css';

const ns = 'article';

const Article = () => {
  const { t } = useTranslation()
  const lang = getPreferredLanguage()
  const { slug } = useParams();
  const [post, setPost] = useState<Post | undefined>();
  const [content, setContent] = useState('');
  const [numberOfWords, setNumberOfWords] = useState(0);
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
      const supportsLang = post.availableLanguages.includes(lang.code)
      const supportedLang = supportsLang ? lang : defaultLanguage
      fetch(`/markdown/${supportedLang.code}/${post.fileName}.md`)
        .then(file => file.text())
        .then(text => setContent(text));
    }
    loadContent();
  }, [post, t]);

  useEffect(() => {
    setNumberOfWords(getNumberOfWords(content));
    setReadTime(getReadTime(content));
  }, [content]);

  if (post === undefined) {
    return <NotFound />
  }

  const postTitle = t(`${getKey(post)}.title`, { ns: 'posts' })

  return (
    <>
      <AppBar alwaysCenter={true} />
      <main className='container lg:max-w-3xl mx-auto px-8 py-8 sm:py-16 md:pb-20'>
        {post.cover != undefined && 
          <figure>
            <img 
              src={`${post.cover.href}?q=85&w=768`} 
              alt={t('cover.alt', { ns, authorName: post.cover.author.name })} 
            />
            <figcaption className='text-center text-gray-400 text-sm mt-4'>
              <Translate 
                i18nKey='cover.description'
                ns={ns}
                values={{ authorName: post.cover.author.name }}
                components={{
                  'author-anchor': <Anchor className='text-purple-500 underline' href={post.cover.author.href} />
                }}
              />
            </figcaption>
          </figure>
        }
        <header className='mb-8 pt-8'>
          <Tags tags={post.tags} />
          <h1 className='text-3xl sm:text-5xl font-bold mt-4'>{postTitle}</h1>
          {post.origin != undefined && 
            <span className='text-xs opacity-40 mt-4 block'>
              <Translate 
                i18nKey='origin.description'
                ns={ns}
                values={{ site: post.origin.hostname }}
                components={{
                  anchor: <Anchor className='text-purple-500 underline' href={post.origin.href} />
                }}
              />
            </span>
          }
          <div className='flex items-center gap-x-2 mt-8'>
            <div className='w-20 h-20 flex items-center rounded-full overflow-hidden border-2'>
              <img src={Me} alt='Fotografia do autor' />
            </div>
            <div className='flex flex-col text-gray-500'>
              <span className='font-bold text-gray-700'>Gustavo Flôr</span>
              <span className='text-xs opacity-80'>
                {getPublishedAt(post)}
              </span>
              <span className='text-xs'>
                {t('readTime', { ns, numberOfWords, readTime })}
              </span>
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
