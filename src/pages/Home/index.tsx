import AppBar from '../../components/AppBar'
import Footer from '../../components/Footer'
import Highlight from '../../components/Highlight'
import LastPosts from '../../components/LastPosts'
import Presentation from '../../components/Presentation'

const Home = () => (
  <>
    <AppBar />
    <Presentation />
    <Highlight />
    <LastPosts />
    <Footer />
  </>
)

export default Home
