import { Link } from 'react-router-dom';

import Brand from '../Brand';

import Lotus from './../../assets/lotus.svg';

interface Props {
  alwaysCenter?: boolean;
}

const AppBar = ({ alwaysCenter = false }: Props) => {
  const justify = alwaysCenter ? 'md:justify-center' : 'md:justify-start';
  return (
    <header className='bg-zinc-900'>
      <nav className={`container mx-auto p-8 flex justify-center ${justify}`}>
        <Link to='/' className='flex gap-2 items-center hover:opacity-80'>
          <img src={Lotus} width={32} alt='Lotus Icon' />
          <Brand className='text-2xl' />
        </Link>
      </nav>
    </header>
  );
}

export default AppBar;
