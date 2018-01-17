import React from 'react';

const SignUpHeader = () => {
  return (
    <nav>
      <form>
        <label>Email</label>
        <input type="string" name="email" />

        <label>Password</label>
        <input type="string" name="password" />

        <input type="submit" name="submit" value="Log In" />
      </form>
    </nav>
  )
}

export default SignUpHeader;
