import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import NotFound from './NotFound';
import StudyKit from './StudyKit';
import SampleApp from '../Sample/Sample';

export default function HtmlRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/StudyKit/`} element={<StudyKit />} />
        <Route path={`/Sample/`} element={<SampleApp />} />
        <Route path={`/*/`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
