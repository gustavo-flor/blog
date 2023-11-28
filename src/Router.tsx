import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Article from './pages/Article';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PostsByTag from './pages/PostsByTag';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<Home />} />
      <Route path='/posts/:slug' element={<Article />} />
      <Route path='/tags/:tag' element={<PostsByTag />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
