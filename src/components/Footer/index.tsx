import { useTranslation } from 'react-i18next'

import Brand from '../Brand'
import LanguageSwitcher from '../LanguageSwitcher'

const ns = 'footer'

const Footer = () => {
  const { t } = useTranslation()
  const copyright = t('copyright', { ns })
  return (
    <footer className='w-full bg-zinc-900 text-gray-200'>
      <div className='container mx-auto p-8 flex flex-row-reverse justify-between items-start sm:items-center'>
        <LanguageSwitcher />
        <div className='flex flex-col sm:flex-row gap-1'>
          <p><Brand /> &copy; {new Date().getFullYear()}.</p>
          <p>{copyright}.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
