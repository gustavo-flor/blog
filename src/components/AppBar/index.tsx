import { Link } from 'react-router-dom';
import Brand from '../Brand';

import Lotus from './../../assets/lotus.svg';

const AppBar = () => (
  <header className='bg-zinc-900'>
    <nav className='container mx-auto p-8 flex justify-center lg:justify-start'>
      <Link to='/' className='flex gap-2 items-center hover:opacity-80'>
        <img src={Lotus} width={32} />
        <Brand className='text-2xl' />
      </Link>
    </nav>
  </header>
);

export default AppBar;
