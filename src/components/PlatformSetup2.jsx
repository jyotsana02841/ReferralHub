import React from 'react'
import "./../styles/PlatformSetup2.css";

const PlatformSetup2 = ({ onNext }) => {
  return (
    <div>
      {/* Content Body */}
      <div className="content-body">
          {/* Left Section - Get Started */}
          <div className="get-started">
            <h3>Get Started with ReferralHub</h3>
            <p>To get started with better referrals & rewards, complete your account setup in a few easy steps.</p>
            <div className="setup-steps">
              <div className="step completed">
                <span className="checkmark">✓</span> Set Up Business Profile
                <span className="status">Completed</span>
              </div>
              <div className="step in-progress">
                <span className="progress-indicator"></span> Sync Your Customer Data
                <span className="status">In Progress</span>
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

          {/* Right Section - Import Customer Data */}
          <div className="import-data">
            <h3>Import Customer Data: Sync with Zapier or Upload CSV</h3>
            <button className="connect-zapier-button">Connect with Zapier</button>
            <div className="or-divider">or</div>
            <div className="upload-csv-section">
              <div className="drag-drop-area">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V10.5c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.28-.22-.5-.5-.5s-.5.22-.5.5v11.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-2z" />
                </svg>
                <p>Drag and drop files here</p>
                <div className="or-text">or</div>
                <button className="upload-file-button">Click to Upload CSV File</button>
                <input type="file" id="csvUpload" accept=".csv" style={{ display: 'none' }} />
              </div>
              {/* You might display upload status or file information here */}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
        <button className="next-button" onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default PlatformSetup2
