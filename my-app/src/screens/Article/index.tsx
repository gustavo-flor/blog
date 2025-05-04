'use client'

import { useEffect, useState } from 'react'

import Anchor from '@/components/Anchor'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Markdown from '@/components/LazyMarkdown'
import Tags from '@/components/Tags'
import { Post, getNumberOfWords, getPublishedAt, getReadTime } from '@/services/post'

interface ArticleProps {
  post: Post,
  content: string,
}

const Article = ({ post, content }: ArticleProps) => {
  const [numberOfWords, setNumberOfWords] = useState(0)
  const [readTime, setReadTime] = useState(1)

  useEffect(() => {
    setNumberOfWords(getNumberOfWords(content))
    setReadTime(getReadTime(content))
  }, [content])

  return (
    <>
      <AppBar />
      <main className='container lg:max-w-3xl mx-auto px-8 py-8 sm:py-16 md:pb-20'>
        {post.cover != undefined && 
          <figure>
            <img 
              src={`${post.cover.href}?q=85&w=768`} 
              alt={`Fotografia de ${post.cover.author.name}`} 
            />
            <figcaption className='text-center text-gray-400 text-sm mt-4'>
              Fotografia de <Anchor className='text-purple-500 underline' href={post.cover.author.href}>{post.cover.author.name}</Anchor>
            </figcaption>
          </figure>
        }
        <header className='mb-8 pt-8'>
          <Tags tags={post.tags} />
          <h1 className='text-3xl sm:text-5xl font-bold mt-4'>{post.title}</h1>
          {post.origin != undefined && 
            <span className='text-xs opacity-40 mt-4 block'>
              Publicado em <Anchor className='text-purple-500 underline' href={post.origin.href}>{post.origin.hostname}</Anchor>
            </span>
          }
          <div className='flex items-center gap-x-2 mt-8'>
            <div className='w-20 h-20 flex items-center rounded-full overflow-hidden border-2'>
              <img src="/images/me-in-purple.jpg" alt="Fotografia do autor" />
            </div>
            <div className='flex flex-col text-gray-500'>
              <span className='font-bold text-gray-700'>Gustavo Flôr</span>
              <span className='text-xs opacity-80'>
                {getPublishedAt(post)}
              </span>
              <span className='text-xs'>
                {`${numberOfWords} palavras | ${readTime} min. de leitura`}
              </span>
            </div>
          </div>
        </header>
        <Markdown content={content} />
      </main>
      <Footer />
    </>
  )
}

export default Article
