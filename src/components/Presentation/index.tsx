import Me from './../../assets/me.jpg';

const Presentation = () => (
  <main>
    <div className='border-b flex flex-col items-center mb-10 py-10'>
      <div className='container mx-auto flex items-center px-8 py-12 sm:py-16 md:py-20'>
        <h1 className='lg:w-2/3 text-2xl sm:text-3xl text-gray-400'>
          Olá, este é o lugar em que <strong className='text-purple-500'>escrevo o que gostaria de ler</strong>, falo sobre o que estou estudando e publico <s>devaneios</s> sobre sistemas que você utiliza todos os dias. 🦎
        </h1>
      </div>
      <div className='w-20 rounded-full overflow-hidden border-2 hover:border-purple-500 mb-[-5rem] transition-all hover:scale-150 cursor-pointer'>
        <img src={Me} alt='Uma foto minha criada por IA' />
      </div>
    </div>
  </main>
);

export default Presentation;
