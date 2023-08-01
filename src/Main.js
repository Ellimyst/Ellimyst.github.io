import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shrine from './pages/Shrine';
import Authenticate from './pages/Authenticate';
import CalendarPage from './pages/CalendarPage';

const Main = ({addAuth, checkAuth}) => {
  return (
    <div className='box'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shrine' element={<Shrine checkAuth={checkAuth}/>}></Route>
      <Route path='/calendar' element={<CalendarPage checkAuth={checkAuth}/>}></Route>
      <Route path='/auth' element={<Authenticate addAuth={addAuth} checkAuth={checkAuth}/>}></Route>
    </Routes>
    </div>
  );
}

export default Main;