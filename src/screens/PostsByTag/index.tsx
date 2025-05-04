'use client'

import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import LastPosts from '@/components/LastPosts'
import Presentation from '@/components/Presentation'

interface PostsByTagProps {
  tag: string
}

const PostsByTag = ({ tag }: PostsByTagProps) => {
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