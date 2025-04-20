import React from "react";
import "./../styles/PlatformSetup3.css";

const PlatformSetup3 = ({ onNext }) => {
  return (
    <div>
      {/* Content Body */}
      <div className="content-body">
        {/* Left Section - Get Started */}
        <div className="get-started">
          <h3>Get Started with ReferralHub</h3>
          <p>
            To get started with better referrals & rewards, complete your
            account setup in a few easy steps.
          </p>
          <div className="setup-steps">
            <div className="step completed">
              <span className="checkmark">✓</span> Set Up Business Profile
              <span className="status">Completed</span>
            </div>
            <div className="step completed">
              <span className="checkmark">✓</span> Sync Your Customer Data
              <span className="status">Completed</span>
            </div>
            <div className="step in-progress">
              <span className="progress-indicator"></span> Set Up AI Agent Rules
              <span className="status">In Progress</span>
            </div>
            <div className="step not-started">
              <span className="circle"></span> Set Up First Campaign
              <span className="status">Not Started</span>
            </div>
          </div>
        </div>

        {/* Right Section - Set Up AI Agent Rules */}
        <div className="ai-rules-setup">
          <h2>Set Up AI Agent Rules</h2>

          <div className="form-group">
            <label htmlFor="tone">Tone of Communication</label>
            <select id="tone">
              <option value="">Select</option>
              <option value="friendly">Friendly</option>
              <option value="professional">Professional</option>
              <option value="motivational">Motivational</option>
              <option value="casual">Casual</option>
              {/* Add more tone options */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="responseStyle">Response Style</label>
            <select id="responseStyle">
              <option value="">Select</option>
              <option value="concise">Concise</option>
              <option value="detailed">Detailed</option>
              <option value="step-by-step">Step-by-step</option>
              {/* Add more response style options */}
            </select>
          </div>

          <div className="form-group switch-control">
            <div className="wrap">
              <label htmlFor="autoOfferHelp">Auto-offer help</label>
              <label className="switch">
                <input type="checkbox" id="autoOfferHelp" />
                <span className="slider round"></span>
              </label>
            </div>
            <p className="switch-description">
              AI pop-up suggestions automatically when user lands on a page.
            </p>
          </div>

          <div className="form-group switch-control">
            <div className="wrap">
              <label htmlFor="userInitiatedOnly">User-initiated only</label>
              <label className="switch">
                <input type="checkbox" id="userInitiatedOnly" />
                <span className="slider round"></span>
              </label>
            </div>
            <p className="switch-description">
              AI only responds when clicked or messaged.
            </p>
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

export default PlatformSetup3;
