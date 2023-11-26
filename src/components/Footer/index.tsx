import Brand from '../Brand';

const Footer = () => (
  <footer className='w-full bg-zinc-900 text-gray-200'>
    {/* <div>
      <h4>Conecte-se</h4>
      <ul>
        <li><a href="https://github.com/gustavo-flor">Github (@gustavo-flor)</a></li>
        <li><a href="https://instagram.com/gustavoflor_">Instagram (@gustavoflor_)</a></li>
        <li><a href="https://www.linkedin.com/in/gustavoflor/">LinkedIn (@gustavoflor)</a></li>
      </ul>
    </div>
    <div>
      <h4>Créditos</h4>
      <ul>
        <li><a href="https://www.freepik.com/icon/rose_2926754">Ícones por Triberion</a></li>
      </ul>
    </div> */}
    <div className='container mx-auto p-8'>
      <p><Brand /> &copy; {new Date().getFullYear()}. Alguns direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
