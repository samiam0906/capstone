import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      
      <form>
        <label>Email</label>
        <input type="text" name="email" />

        <label>Password</label>
        <input type="text" name="password" />

        <input type="submit" name="submit" value="Log In" />
      </form>
    </div>
  )
}

export default LogIn;
