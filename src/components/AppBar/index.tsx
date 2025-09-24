import Link from 'next/link'

import Brand from '@/components/Brand'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useLang } from '@/hooks/useLang'

const AppBar = () => {
  const lang = useLang().code.toLowerCase()
  return (
    <header className='w-full bg-zinc-900 text-gray-200'>
      <nav className='container mx-auto p-8 flex justify-between items-center'>
        <Link href={`/${lang}`} className='flex gap-2 items-center hover:opacity-80'>
          <img src='/images/lotus.svg' width={32} height={32} alt='Lotus' />
          <Brand className='text-2xl' />
        </Link>
        <LanguageSwitcher />
      </nav>
    </header>
  )
}

export default AppBar
