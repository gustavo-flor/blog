'use client'


import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import { useTranslation } from '@/hooks/useTranslation'

const NotFound = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <AppBar />
      <main className='container mx-auto flex items-center px-8 py-16 md:py-20'>
        <h1 className='text-3xl text-gray-400'>
          {t('pageNotFound')}
        </h1>
      </main>
      <Footer />
    </>
  )
}

export default NotFound
