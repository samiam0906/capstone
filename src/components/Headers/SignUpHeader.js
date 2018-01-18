import React from 'react';
import LogIn from '../LogIn';
import { Link } from 'react-router-dom';

const SignUpHeader = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <LogIn />
    </nav>
  )
}

export default SignUpHeader;
