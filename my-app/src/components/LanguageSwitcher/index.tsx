import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { supportedLanguages } from '@/services/lang'

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useTranslation()
  const [currentLocale, setCurrentLocale] = useState<string>()
 
  const getResources = () => pathname?.split('/').slice(2) ?? []

  useEffect(() => {
    const locale = pathname?.split('/')[1]
    setCurrentLocale(locale)
  }, [pathname])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value
    if (currentLocale !== code) {
      const target = [`/${code}`, ...getResources()].join('/')
      router.push(target)
    }
  }

  if (!currentLocale) return null

  return (
    <select 
      value={currentLocale}
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