import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Article from './pages/Article';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PostsByTag from './pages/PostsByTag';
import { getSupportedLanguages } from './services/lang';
import React from 'react';

const Router = () => {
  const supportedLanguages = getSupportedLanguages()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Home />} />
        <Route path='/posts/:slug' element={<Article />} />
        <Route path='/tags/:tag' element={<PostsByTag />} />
        {supportedLanguages.map(language => 
          <React.Fragment key={language.code}>
            <Route path={`/${language.code}`} element={<Home />} />
            <Route path={`/${language.code}/posts`} element={<Home />} />
            <Route path={`/${language.code}/posts/:slug`} element={<Article />} />
            <Route path={`/${language.code}/tags/:tag`} element={<PostsByTag />} />
          </React.Fragment>
        )}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
