import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text">
    <p className="title">WELCOME</p>
    <br></br>
    <br></br>
    {/* <p>I have never been able to express myself through words. I would rather visualize than construct sentences. I prefer pictures to language. So here is my attempt at expressing myself to the world using the one way I know.</p> */}
    
    <div className="nav-links">
      <Link to="/profile" className="nav-link">Profile</Link>
      <Link to="/resume" className="nav-link">Resume</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
    </div>
  </div>
);

export default Home;
