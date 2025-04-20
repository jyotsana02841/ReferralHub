import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Dummy API call
import "./../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [magicEmail, setMagicEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      // Dummy API call
      const response = await axios.post("https://dummyapi.io/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);
      setSuccess("Logged in successfully!");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials. Try again.");
    }
  };

  const handleMagicLink = async () => {
    setError("");
    setSuccess("");

    if (!magicEmail) {
      setError("Please enter your email for magic link.");
      return;
    }

    try {
      // Dummy API for magic link
      const response = await axios.post("https://dummyapi.io/magic-link", {
        email: magicEmail,
      });

      console.log("Magic link sent:", response.data);
      setSuccess("Magic link sent to your email!");
    } catch (err) {
      console.error("Magic link error:", err);
      setError("Failed to send magic link.");
    }
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

        <div className="or-divider"><span>or</span></div>

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
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

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
