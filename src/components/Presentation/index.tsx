import Me from './../../assets/me-in-purple.jpg';
import { translate } from '../../services/i18n';
import Translate from '../Translate';

const ns = 'presentation'

const Presentation = () => (
  <main>
    <div className='border-b flex flex-col items-center mb-10 pb-10'>
      <div className='container mx-auto flex items-center px-8 py-8 sm:py-16 md:py-20'>
        <h1 className='lg:w-2/3 text-2xl sm:text-3xl text-gray-400'>
          <Translate 
            i18nKey='title'
            ns={ns} 
            components={{
              highlight: <strong className='text-purple-500' />,
              stroke: <s />
            }}
          />
        </h1>
      </div>
      <div className='w-20 h-20 flex relative items-center rounded-full overflow-hidden border-2 mb-[-5rem] transition-all hover:scale-150 cursor-pointer'>
        <img src={Me} alt={translate('authorImage.alt', { ns })} />
      </div>
    </div>
  </main>
);

export default Presentation;
