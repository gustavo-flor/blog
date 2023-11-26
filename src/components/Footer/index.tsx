import Brand from '../Brand';

const Footer = () => (
  <footer className='w-full bg-zinc-900 text-gray-200'>
    <div className='container mx-auto p-8 flex justify-center lg:justify-start'>
      <p><Brand /> &copy; {new Date().getFullYear()}. Alguns direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
