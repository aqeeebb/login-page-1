import React from 'react';
import './Lstyles.css'; // Make sure to import your CSS file

const LoginPage = () => {
  return (
    <div className="container">
       
        <img
        src="https://static.vecteezy.com/system/resources/previews/008/944/912/original/mint-green-background-concept-free-vector.jpg"
        alt="Sample Image"
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
        <a href="#" className="forgot">Forgot Username/Password?</a>
        <div className="create">
          <a href="#">Create Your Account</a>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;