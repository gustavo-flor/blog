import { Link, useParams } from 'react-router-dom';

interface Props {
  tags: string[];
}

const Tags = ({ tags }: Props) => {
  const { tag: query = '' } = useParams();
  const getLink = (tag: string) => tag != query ? `/tags/${tag}` : '/';
  const getStyle = (tag: string) => tag != query 
    ? ' opacity-40 hover:opacity-100 hover:rounded-xl transition-all' 
    : '';
  return (
    <ul className='flex flex-wrap gap-x-2'>{tags.map(tag =>
      <li key={tag}>
        <Link to={getLink(tag)}>
          <div className={`rounded-2xl bg-gray-50 text-zinc-700 px-2 py-1 ${getStyle(tag)}`}>
            <strong className='font-normal text-purple-500'>#</strong>{tag}
          </div>
        </Link>
      </li> 
    )}</ul>
  );
}

export default Tags;
