import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar.js";
import Main from '../Main.js'
import { useState } from "react";

function App() {
  const [color, changeColor] = useState("#171a40");
  document.body.style.backgroundColor = color;

  const changeBg = (bg) => {
    changeColor(bg)
  }
  
  const [auths, setAuths] = useState([]);
  
  const addAuth = (cred) => {
    if(!checkAuth(cred)) {
      setAuths(
        [
          ...auths,
          cred
        ]
      )
    }
  }
  const checkAuth = (cred) => {
    return auths.includes(cred)
  }

  return (
    <div className="App">
      <div>
        <Navbar
          changeBg={changeBg}
          />
      </div>
      <div>
        <Main
          addAuth={addAuth}
          checkAuth={checkAuth}
          />
      </div>
    </div>
  );
}


export default App;
