import React from "react";
import "./../styles/PlatformSetup1.css";

const PlatformSetup1 = ({ onNext }) => {
  return (
    <div>
      <div className="content-body">
        {/* Left Section - Get Started */}
        <div className="get-started">
          <h3>Get Started with ReferralHub</h3>
          <p>
            To get started with better referrals & rewards, complete your
            account setup in a few easy steps.
          </p>
          <div className="setup-steps">
            <div className="step not-started">
              <span className="circle"></span> Set Up Business Profile
              <span className="status">Not Started</span>
            </div>
            <div className="step not-started">
              <span className="circle"></span> Sync Your Customer Data
              <span className="status">Not Started</span>
            </div>
            <div className="step not-started">
              <span className="circle"></span> Set Up AI Agent Rules
              <span className="status">Not Started</span>
            </div>
            <div className="step not-started">
              <span className="circle"></span> Set Up First Campaign
              <span className="status">Not Started</span>
            </div>
          </div>
        </div>

        {/* Right Section - Build Your Business Identity */}
        <div className="business-profile-form">
          <h3>Build Your Business Identity</h3>
          <p className="form-description">
            Help us tailor the referral experience by adding key details about
            your business.
          </p>

          <div className="form-group logo-upload">
            <label htmlFor="businessLogo">Business Logo</label>
            <div className="logo-input">
              <input
                type="file"
                id="businessLogo"
                accept="image/*"
                style={{ display: "none" }}
              />
              <button
                type="button"
                onClick={() => document.getElementById("businessLogo").click()}
              >
                Choose Image
              </button>
              {/* You might display the selected image preview here */}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="businessDescription">Business Description</label>
            <textarea
              id="businessDescription"
              rows="3"
              placeholder="Enter business description"
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                placeholder="Enter bussiness name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="businessEmail">Business Email</label>
              <input
                type="email"
                id="businessEmail"
                placeholder="e.g, robert.fox@myemail.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="businessPhone">Business Phone No.</label>
              <input
                type="tel"
                id="businessPhone"
                placeholder="Enter phone no."
              />
            </div>
            <div className="form-group">
              <label htmlFor="industry">Industry</label>
              <select id="industry">
                <option value="">Select</option>
                <option value="ecommerce">E-commerce</option>
                <option value="saas">SaaS</option>
                <option value="marketing">Marketing</option>
                <option value="fitness">Fitness & Wellness</option>
                {/* Add more industry options */}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="services">Services</label>
              <input
                type="text"
                id="services"
                placeholder="Enter services..."
              />
              {/* You might want to implement a multi-select or tagging component here */}
            </div>
            <div className="form-group">
              <label htmlFor="products">Products</label>
              <input type="text" id="products" placeholder="Enter products" />
              {/* Similar to services, consider a better input method */}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companySize">Company Size (Optional)</label>
              <select id="companySize">
                <option value="">Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                {/* Add more size options */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select id="city">
                <option value="">Select</option>
                {/* Add city options dynamically or statically */}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state">
                <option value="">Select</option>
                {/* Add state options dynamically or statically */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" id="zipCode" placeholder="Enter zip code" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="next-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PlatformSetup1;
