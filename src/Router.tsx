import { HashRouter, Route, Routes } from 'react-router-dom';

import Article from './pages/Article';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<Home />} />
      <Route path='/posts/:slug' element={<Article />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </HashRouter>
);

export default Router;
