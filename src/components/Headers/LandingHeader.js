import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  )
}

export default LandingHeader;
