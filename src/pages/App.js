import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/Navbar.js";
import Main from '../Main.js'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
