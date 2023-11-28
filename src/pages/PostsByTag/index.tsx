import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar';
import Footer from '../../components/Footer';
import LastPosts from '../../components/LastPosts';
import Presentation from '../../components/Presentation';
import NotFound from '../NotFound';

const PostsByTag = () => {
  const { tag } = useParams();

  if (tag == undefined) {
    return <NotFound />
  }

  return (
    <>
      <AppBar />
      <Presentation />
      <LastPosts tag={tag} />
      <Footer />
    </>
  );
};

export default PostsByTag;