'use client'

import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import { useI18n } from '@/providers/I18n'

const NotFound = () => {
  const { t } = useI18n()
  
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
