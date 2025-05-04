import Brand from '@/components/Brand'

const Footer = () => {
  return (
    <footer className='w-full bg-zinc-900 text-gray-200'>
      <div className='container mx-auto p-8 flex flex-row justify-center items-center'>
        <div className='flex flex-col sm:flex-row gap-1'>
          <p><Brand /> &copy; {new Date().getFullYear()}.</p>
          <p>Alguns direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
