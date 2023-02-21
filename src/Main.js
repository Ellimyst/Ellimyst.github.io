import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shrine from './pages/Shrine';
import Authenticate from './pages/Authenticate';

const Main = ({addAuth, checkAuth}) => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shrine' element={<Shrine checkAuth={checkAuth}/>}></Route>
      <Route path='/auth' element={<Authenticate addAuth={addAuth} checkAuth={checkAuth}/>}></Route>
    </Routes>
  );
}

export default Main;