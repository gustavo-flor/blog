'use client'

import { useParams } from 'next/navigation'

import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import LastPosts from '@/components/LastPosts'
import Presentation from '@/components/Presentation'
import NotFound from '@/pages/NotFound'

const PostsByTag = () => {
  const params = useParams<{ tag: string }>()
  const tag = params?.tag

  if (tag == undefined) {
    return <NotFound />
  }

  return (
    <>
      <AppBar />
      <Presentation />
      <LastPosts tag={tag} />
      <Footer />
    </>
  )
}

export default PostsByTag