import { Link } from 'react-router-dom';
import Brand from '../Brand';

const AppBar = () => (
  <header className='bg-zinc-900'>
    <nav className='container mx-auto p-8'>
      <Link to='/'>
        <Brand className='text-2xl hover:text-gray-300' />
      </Link>
    </nav>
  </header>
);

export default AppBar;
