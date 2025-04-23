import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [magicEmail, setMagicEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleMagicLink = async () => {
    setError("");
    setSuccess("");

    if (!magicEmail) {
      setError("Please enter your email for magic link.");
      return;
    }

    // Simulate magic link sent
    setTimeout(() => {
      console.log("Magic link sent to:", magicEmail);
      setSuccess("Magic link sent to your email!");
    }, 1000);
  };

  const handleLogin = async () => {
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Simulated login (accepts any credentials)
    setTimeout(() => {
      console.log("Login successful (mock):", email);
      setSuccess("Login successful!");
      localStorage.setItem("token", "mocked_token_123"); // Store a dummy token
      navigate("/page"); // Redirect after login
    }, 1000);
  };

  return (
    <div className="auth-wrapper">
      <div className="login-box">
        <h2>Login to ReferralHub</h2>

        <button className="google-btn">Continue with Google/Microsoft</button>

        <div className="section">
          <label>Magic Link Login</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={magicEmail}
            onChange={(e) => setMagicEmail(e.target.value)}
          />
          <button className="magic-btn" onClick={handleMagicLink}>
            Send Magic Link
          </button>
        </div>

        <div className="or-divider">
          <span>or</span>
        </div>

        <div className="section">
          <label>Email</label>
          <input
            type="email"
            placeholder="robert.fox@myemail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
        )}

        <div className="or-divider">
          <span>or</span>
        </div>

        <div className="social-icons">
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="Google"
          />
          <img
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="Facebook"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/mac-os.png"
            alt="Mac"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/linkedin.png"
            alt="LinkedIn"
          />
        </div>

        <p className="register">
          Don't have an account? <Link to="/register">Register now</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
