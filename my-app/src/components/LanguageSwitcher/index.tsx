import { useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { supportedLanguages } from '@/services/lang'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const currentLanguage = i18n.language
 
  const getResources = () => pathname?.split('/').slice(2) ?? []

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value
    if (currentLanguage !== code) {
      const target = [`/${code}`, ...getResources()].join('/')
      i18n.changeLanguage(code)
      router.push(target)
    }
  }

  return (
    <select 
      disabled={supportedLanguages.length === 1}
      value={currentLanguage}
      onChange={handleChange}
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