import React from "react";
import { Link } from "react-router-dom"; // Use Link for SPA navigation
import "./Lstyles.css";
import bg1 from "./assets/bg1.jpg";

const LoginPage = () => {
  return (
    <div className="container">
      {/* Background image with better alt text */}
      <img src={bg1} alt="Background for login page" />

      <div className="login">
        <h3 className="title">User Login</h3>

        {/* Username input */}
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input id="username" type="text" placeholder="Username" />
        </div>

        {/* Password input */}
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input id="password" type="password" placeholder="Password" />
        </div>

        <button className="login-btn">LOGIN</button>

        {/* Forgot password as a button */}
        <button
          className="forgot"
          onClick={() =>
            alert("Forgot password feature is not implemented yet.")
          }
        >
          Forgot Username/Password?
        </button>

        <div className="create">
          {/* SPA link for account creation */}
          <Link to="/signup">Create Your Account</Link>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
