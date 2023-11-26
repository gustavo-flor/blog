import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Article from './pages/Article';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<Home />} />
      <Route path='/posts/:slug' element={<Article />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
