import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar.js";
import Main from '../Main.js'

function App() {
  const [color, changeColor] = React.useState("#99f7e0");
  document.body.style.backgroundColor = color;

  const changeBg = (bg) => {
    changeColor(bg)
  }
  
  const auths = [];
  
  const addAuth = (cred) => {
    if(!checkAuth(cred)) {
      auths.push(cred)
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