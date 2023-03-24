import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Register from '../Register';
import Login from '../Login';
import NotFound from '../NotFound';

const HtmlRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/*/`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HtmlRouter;
