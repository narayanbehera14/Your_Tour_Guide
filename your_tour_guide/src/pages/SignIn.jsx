import React from "react";

const SignIn = () => {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>

      <form className="signin-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
