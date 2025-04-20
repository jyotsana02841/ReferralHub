import React from "react";
import { Link } from "react-router-dom";
import "./../styles/RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register for ReferralHub</h2>

        <form>
          <label>Email ID</label>
          <input type="email" placeholder="robert.fox@myemail.com" />

          <label>Create Password</label>
          <input type="password" placeholder="Enter password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter password" />

          <button className="register-btn">Register</button>
        </form>

        <div className="or-divider"><span>or</span></div>

        <div className="social-icons">
          <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
          <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
          <img src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="Mac" />
          <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="LinkedIn" />
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
