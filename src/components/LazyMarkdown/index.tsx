import { CircleNotch } from 'phosphor-react'
import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@/components/Button'

const Markdown = React.lazy(() => import('@/components/Markdown'))

interface Props {
  content: string;
}

const LazyMarkdown = ({ content }: Props) => {
  const { t } = useTranslation()
  
  const Loading = () => (
    <div className='flex justify-center'>
      <Button className='animate-spin bg-gray-200 text-purple-500' title={t('loading')} disabled variant='key-button'>
        <CircleNotch size={48} />
      </Button>
    </div>
  )
  
  return (
    <Suspense fallback={<Loading />}>
      <Markdown content={content} />
    </Suspense>
  )
}

export default LazyMarkdown
