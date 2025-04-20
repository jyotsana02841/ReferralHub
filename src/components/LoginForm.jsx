import React from "react";
import { Link } from "react-router-dom";
import "./../styles/LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to ReferralHub</h2>

        <button className="google-btn">Continue with Google/Microsoft</button>

        <div className="section">
          <label>Magic Link Login</label>
          <input type="email" placeholder="Enter your email" />
          <button className="magic-btn">Send Magic Link</button>
        </div>

        <div className="or-divider"><span>or</span></div>

        <div className="section">
          <label>Email</label>
          <input type="email" placeholder="robert.fox@myemail.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className="login-btn">Login</button>
        </div>

        <div className="or-divider"><span>or</span></div>

        <div className="social-icons">
          <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
          <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="Mac" />
          <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="LinkedIn" />
        </div>

        <p className="register">
          Don't have an account? <Link to="/register">Register now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
