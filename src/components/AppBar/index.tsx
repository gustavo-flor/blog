import { Link } from 'react-router-dom';
import Brand from '../Brand';

const AppBar = () => (
  <header className='w-full flex items-center p-8 bg-zinc-900'>
    <Link to='/'>
      <Brand />
    </Link>
  </header>
);

export default AppBar;
