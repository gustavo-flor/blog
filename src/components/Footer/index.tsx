import Brand from '@/components/Brand'
import { useI18n } from '@/providers/I18n'

const Footer = () => {
  const { t } = useI18n()
  return (
    <footer className='w-full bg-zinc-900 text-gray-200'>
      <div className='container mx-auto p-8 flex flex-row justify-center items-center'>
        <div className='flex flex-col sm:flex-row gap-1'>
          <p><Brand /> &copy; {new Date().getFullYear()}.</p>
          <p>{t('copyright', { ns: 'footer' })}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
