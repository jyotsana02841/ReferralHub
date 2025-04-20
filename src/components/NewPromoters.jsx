import React from "react";
import "./../styles/NewPromoters.css";

function NewPromoters() {
  return (
    <div className="new-promoters-container">
      {/* Tabs */}
      <div className="tabs">
        <button className="tab active">Promoter Settings</button>
        <button className="tab inactive">Leads Settings</button>
      </div>

      <div className="form">
        {/* Campaign Name */}
        <div className="form-group">
          <label htmlFor="campaignName">Campaign Name</label>
          <input
            type="text"
            id="campaignName"
            value="Summer Referral Special"
            readOnly
          />
        </div>

        {/* Reward Type and Value */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Reward Type <span className="required">*</span>
            </label>
            <div className="reward-type">
              <button className="selected">Points</button>
              <div className="note">($1 is equivalent to 10 points)</div>
            </div>
          </div>

          <div className="form-group">
            <label>
              Reward Value <span className="required">*</span>
            </label>
            <input type="text" value="200 points" readOnly />
          </div>
        </div>

        {/* Promoter Message */}
        <div className="form-group">
          <label htmlFor="promoterMessage">
            Promoter Message <span className="required">*</span>
          </label>
          <textarea
            id="promoterMessage"
            rows="3"
            readOnly
            value="Hey! Share this with your friends and get $20 for each successful signup!"
          />
        </div>

        {/* Follow-Up Strategy */}
        <div className="followup-section">
          <label className="followup-label">
            Follow-Up Strategy <span className="required">*</span>
          </label>
          <div className="followup-list">
            {[
              { type: "SMS" },
              { type: "Wait", days: 5 },
              { type: "Email", editable: true },
              { type: "Wait", days: 2, editable: true },
              { type: "SMS", editable: true },
              { type: "Wait", days: 3, editable: true },
              { type: "SMS" },
            ].map((item, index) => (
              <div
                key={index}
                className={`followup-item ${item.type.toLowerCase()}`}
              >
                <span className="followup-icon">
                  {item.type === "SMS" && "📩"}
                  {item.type === "Email" && "✉️"}
                  {item.type === "Wait" && "⏱️"}
                </span>
                <span className="followup-text">
                  {item.type === "Wait"
                    ? `Wait - ${item.days} days`
                    : item.type}
                </span>
                {item.editable && (
                  <div className="followup-actions">
                    <button className="edit-btn">✏️</button>
                    <button className="delete-btn">🗑️</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Landing Page Preview */}
      <div className="landing-preview-section">
        <label className="preview-label">Landing Page Preview</label>
        <div className="preview-card">
          <div className="preview-navbar">
            <span className="nav-tab active">Chat with AI</span>
            <span className="nav-tab">My Leads</span>
            <span className="nav-tab">My Rewards</span>
            <div className="nav-icons">
              <span className="icon">🔗</span>
              <span className="icon">⚙️</span>
            </div>
          </div>

          <div className="preview-content">
            <h2>
              Welcome back! You're promoting:
              <br />
              <span className="brand-name">SnackNation Express</span>
            </h2>
            <p className="sub-text">
              SnackNation delivers hand-picked, chef-curated snacks — from spicy
              masala nuts to sweet jaggery treats — delivered fresh to your door
              in under 45 minutes.
            </p>
            <div className="referral-highlight">
              Every successful referral earns you <strong>200 points</strong>
            </div>
            <button className="cta-button">Start Promoting & Earning</button>

            <div className="avatars">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                className="avatar"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                className="avatar"
              />
            </div>
          </div>
        </div>

        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default NewPromoters;
