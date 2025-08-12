import React from 'react';
import './Lstyles.css'; 
import bg1 from './assets/bg1.jpg';

const LoginPage = () => {
  return (
    <div className="container">
      {/* Fixed alt text: Removed the word "Image" */}
      <img
        src={bg1}
        alt="Login page background"
      />

      <div className="login">
        <h3 className="title">User Login</h3>
        
        <div className="text-input">
          <i className="ri-user-fill"></i>
          <input type="text" placeholder="Username" />
        </div>
        
        <div className="text-input">
          <i className="ri-lock-fill"></i>
          <input type="password" placeholder="Password" />
        </div>
        
        <button className="login-btn">LOGIN</button>
        
        {/* Fixed invalid href: changed to a button for non-navigation */}
        <button
          className="forgot"
          onClick={() => alert("Forgot password flow not implemented yet")}
          style={{ background: "none", border: "none", color: "blue", cursor: "pointer", padding: 0 }}
        >
          Forgot Username/Password?
        </button>
        
        <div className="create">
          {/* Changed to a real route link (can adjust as per your app) */}
          <a href="/signup">Create Your Account</a>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
