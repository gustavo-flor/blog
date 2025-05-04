import PostsByTag from '@/screens/PostsByTag'
import { Tag } from '@/services/post'

export const revalidate = false

export const generateStaticParams = async () => {
  return Object.values(Tag).map((tag) => ({ tag }))
}

export const dynamicParams = false

interface PageProps {
  params: Promise<{ tag: string }>
}

export default async function Page({ params }: PageProps) {
  const { tag } = await params

  return <PostsByTag tag={tag} />
}

