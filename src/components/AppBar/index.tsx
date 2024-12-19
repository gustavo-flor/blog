import { Link } from 'react-router-dom';

import Brand from '../Brand';
import LanguageSwitcher from '../LanguageSwitcher';

import Lotus from './../../assets/lotus.svg';

const AppBar = () => {
  return (
    <header className='bg-zinc-900'>
      <nav className='container mx-auto p-8 flex justify-between items-center'>
        <Link to='/' className='flex gap-2 items-center hover:opacity-80'>
          <img src={Lotus} width={32} alt='Lotus Icon' />
          <Brand className='text-2xl' />
        </Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default AppBar;
