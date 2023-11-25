import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import Presentation from '../../components/Presentation';

import Posts from '../../components/Posts';
import './style.css';

const Home = () => (
  <>
    <AppBar />
    <Presentation />
    <Posts />
    <Footer />
  </>
);

export default Home;
