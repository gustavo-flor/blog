import { translate } from '../../services/i18n';
import Brand from '../Brand';

interface Props {
  alwaysCenter?: boolean
}

const ns = 'footer'

const Footer = ({ alwaysCenter = false }: Props) => {
  const copyright = translate('copyright', { ns })
  const justify = alwaysCenter ? 'md:justify-center' : 'md:justify-start';
  return (
    <footer className='w-full bg-zinc-900 text-gray-200'>
      <div className={`container mx-auto p-8 flex justify-center ${justify}`}>
        <p><Brand /> &copy; {new Date().getFullYear()}. {copyright}.</p>
      </div>
    </footer>
  );
}

export default Footer;
