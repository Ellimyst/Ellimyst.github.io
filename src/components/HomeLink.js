import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = () => (
  <div className="home-link-container">
    <Link to="/" className="home-link">
      <p>←Menu</p>
    </Link>
  </div>
);

export default HomeLink; 