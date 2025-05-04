import Link from 'next/link'

import Brand from '@/components/Brand'

interface AppBarProps {
  center?: boolean
}

const AppBar = ({ center }: AppBarProps) => {
  return (
    <header className='w-full bg-zinc-900 text-gray-200'>
      <nav className={`container mx-auto p-8 flex items-center ${center ? 'justify-center' : ''}`}>
        <Link href='/' className='flex gap-2 items-center hover:opacity-80'>
          <img src='/images/lotus.svg' width={32} height={32} alt='Lotus Icon' />
          <Brand className='text-2xl' />
        </Link>
      </nav>
    </header>
  )
}

export default AppBar
