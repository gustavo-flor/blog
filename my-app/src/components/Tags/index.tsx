import Link from 'next/link'

interface Props {
  selectedTag?: string;
  tags: string[];
}

const Tags = ({ selectedTag, tags }: Props) => {
  const getLink = (tag: string) => !selectedTag || tag != selectedTag ? `/tags/${tag}` : '/'
  const getLinkStyle = (tag: string) => selectedTag && tag != selectedTag ? 'cursor-text pointer-events-none' : ''
  const getStyle = (tag: string) => !selectedTag || tag != selectedTag 
    ? 'opacity-40 hover:opacity-100 hover:rounded-xl transition-all' 
    : ''
  return (
    <ul className='flex flex-wrap gap-x-2'>{tags.map(tag =>
      <li key={tag}>
        <Link href={getLink(tag)} className={getLinkStyle(tag)}>
          <div className={`rounded-2xl bg-gray-50 text-zinc-700 px-2 py-1 ${getStyle(tag)}`}>
            <strong className='font-normal text-purple-500'>#</strong>{tag}
          </div>
        </Link>
      </li> 
    )}</ul>
  )
}

export default Tags
