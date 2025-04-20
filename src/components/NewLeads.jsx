import React, { useState } from "react";
import "./../styles/NewLeads.css"; // Re-use styles or create a new CSS file if needed

function NewLeads() {
  const [followUpStrategies, setFollowUpStrategies] = useState([
    { id: 1, type: "SMS", time: "Wait - 5 days" },
    { id: 2, type: "Email", time: "Email" },
    { id: 3, type: "SMS", time: "Wait - 2 days" },
    { id: 4, type: "SMS", time: "Wait - 3 days" },
  ]);

  const handleAddFollowUp = () => {
    // In a real app, you'd have a form or modal to get the new strategy details
    const newStrategy = {
      id: Date.now(), // Generate a unique ID
      type: "SMS", // Default type, you'd get this from user input
      time: "Wait - 7 days", // Default time, you'd get this from user input
    };
    setFollowUpStrategies([...followUpStrategies, newStrategy]);
  };

  const handleEditFollowUp = (id) => {
    // Implement edit logic (e.g., open a modal with the strategy's details)
    console.log("Editing follow-up strategy:", id);
  };

  const handleDeleteFollowUp = (id) => {
    setFollowUpStrategies(
      followUpStrategies.filter((strategy) => strategy.id !== id)
    );
  };

  return (
    <div className="new-promoters-container">
      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h2>Create & Manage Referral Campaigns</h2>
          <div className="user-info">
            <div className="avatar">KS</div>
            <div className="user-details">
              <div className="user-name">Kadlin Stanton</div>
              <div className="user-email">kadlinstanton@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Top Navigation Tabs */}
        <div className="top-navigation-tabs">
          <button className="tab">Past Promoters</button>
          <button className="tab">Promoter Settings</button>
          <button className="tab active">Leaderboard Settings</button>
          <button className="tab">Viral Emails</button>
        </div>

        {/* Leads Settings */}
        <div className="leads-settings-section">
          <h2>Leads Settings</h2>
          <div className="form-section">
            <h3>Follow-Up Strategy</h3>
            <div className="followup-options">
              {followUpStrategies.map((strategy) => (
                <div key={strategy.id} className="followup-item">
                  <span>{strategy.type}</span>
                  <span className="days">{strategy.time}</span>
                  <button
                    className="edit-followup"
                    onClick={() => handleEditFollowUp(strategy.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0L11.3 11.3 14.7 14.7l9-9zM6 18H4v-2l6.3-6.3 1.41 1.41L6 18zM13 20h7v-2h-7v2z" />
                    </svg>
                  </button>
                  <button
                    className="delete-followup"
                    onClick={() => handleDeleteFollowUp(strategy.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                  </button>
                </div>
              ))}
              <button className="add-followup-strategy" onClick={handleAddFollowUp}>
                + Add Follow-up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLeads;
