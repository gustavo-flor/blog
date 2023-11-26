interface Props {
  tags: string[];
}

const Tags = ({ tags }: Props) => (
  <ul className='flex flex-wrap gap-x-2'>{tags.map(tag =>
    <li className='rounded-2xl bg-gray-50 text-zinc-700 px-2 py-1 opacity-80 hover:opacity-100 cursor-pointer' key={tag}>
      <strong className='font-normal text-purple-500'>#</strong>{tag}
    </li> 
  )}</ul>
);

export default Tags;
