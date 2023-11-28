import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';

const NotFound = () => (
  <>
    <AppBar />
    <main className='container mx-auto flex items-center px-8 py-16 md:py-20'>
      <h1 className='text-3xl text-gray-400'>Página não encontrada</h1>
    </main>
    <Footer />
  </>
);

export default NotFound;
