import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Dummy API call
import "./../styles/RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Dummy API call
      const response = await axios.post("https://dummyapi.io/register", {
        email,
        password,
      });

      // Simulate success (fake success response)
      console.log("Registration successful:", response.data);
      setSuccess("Registered successfully!");
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register for ReferralHub</h2>

        <form onSubmit={handleSubmit}>
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="robert.fox@myemail.com"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Create Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="register-btn">Register</button>
        </form>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

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
