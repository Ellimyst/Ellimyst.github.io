import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <header className="App-header">
        <h1>WORK IN PROGRESS</h1>
        <p>hi.</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <table>
          <tr>A</tr>
          <tr>BASSA</tr>
          <tr>C</tr>
        </table>
      </header>
    </div>
  );
}

export default App;
