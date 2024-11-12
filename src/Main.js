import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shrine from './pages/Shrine';
import Authenticate from './pages/Authenticate';
import CalendarPage from './pages/CalendarPage';
import Profile from './pages/Profile';
import Resume from './pages/Resume';
import Blog from './pages/Blog';

const Main = ({addAuth, checkAuth}) => {
  return (
    <div className='box'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/shrine' element={<Shrine checkAuth={checkAuth}/>} />
        <Route path='/calendar' element={<CalendarPage checkAuth={checkAuth}/>} />
        <Route path='/auth' element={<Authenticate addAuth={addAuth} checkAuth={checkAuth}/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Main;