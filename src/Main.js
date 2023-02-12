import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shrine from './pages/Shrine';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shrine' element={<Shrine/>}></Route>
    </Routes>
  );
}

export default Main;