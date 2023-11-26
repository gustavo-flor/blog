import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import LastPosts from '../../components/LastPosts';
import Presentation from '../../components/Presentation';

import './style.css';

const Home = () => (
  <>
    <AppBar />
    <Presentation />
    <LastPosts />
    <Footer />
  </>
);

export default Home;
