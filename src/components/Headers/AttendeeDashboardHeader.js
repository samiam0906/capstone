import React from 'react';
import { Link } from 'react-router-dom';

const AttendeeDashboardHeader = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
  )
}

export default AttendeeDashboardHeader;
