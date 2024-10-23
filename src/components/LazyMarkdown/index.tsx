import React, { Suspense } from 'react'
import Button from '../Button';
import { CircleNotch } from 'phosphor-react';

const Markdown = React.lazy(() => import('./../Markdown'))

interface Props {
  content: string;
}

const LazyMarkdown = ({ content }: Props) => {
  const Loading = () => (
    <div className='flex justify-center'>
      <Button className='animate-spin bg-gray-200 text-purple-500' title='Loading...' disabled variant='key-button'>
        <CircleNotch size={48} />
      </Button>
    </div>
  );
  
  return (
    <Suspense fallback={<Loading />}>
      <Markdown content={content} />
    </Suspense>
  )
}

export default LazyMarkdown
