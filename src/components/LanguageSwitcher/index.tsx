import { redirect } from 'next/navigation'
import { usePathname } from 'next/navigation'

import { useLang } from '@/hooks/useLang'
import { useTranslation } from '@/hooks/useTranslation'
import { supportedLanguages } from '@/services/lang'

const LanguageSwitcher = () => {
  const { t } = useTranslation()
  const lang = useLang()
  const pathname = usePathname()

  const changeLanguage = (langCode: string) => {
    const segments = [langCode, ...pathname.split('/').slice(2)]
    redirect(`/${segments.join('/')}`)
  }

  return (
    <select 
      value={lang.code}
      onChange={event => changeLanguage(event.target.value)}
      className='appearance-none bg-transparent outline-none text-xl py-1 px-1 md:px-4'
      title={t('changeLanguage')}
    >
      {supportedLanguages.map(lang => 
        <option key={lang.code} value={lang.code} title={lang.displayName}>
          {lang.flag}
        </option>
      )}
    </select>
  )
}

export default LanguageSwitcher
