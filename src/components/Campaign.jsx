import React, { useState } from "react";
import "./../styles/Campaign.css"; // Create this CSS file
import PastPromoters from "./PastPromoters.jsx";
import NewPromoters from "./NewPromoters.jsx";
import NewLeads from "./NewLeads";

function Campaign() {
  const [activeTab, setActiveTab] = useState("Past Promoters");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(`Clicked tab: ${tabName}`);
  };

  return (
    <div className="manage-campaigns-container">
      

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

        {/* Top Navigation */}
        <div className="top-navigation">
          <button
            className={`tab ${activeTab === "Past Promoters" ? "active" : ""}`}
            onClick={() => handleTabClick("Past Promoters")}
          >
            Past Promoters
          </button>
          <button
            className={`tab ${activeTab === "New Promoters" ? "active" : ""}`}
            onClick={() => handleTabClick("New Promoters")}
          >
            New Promoters
          </button>
          <button
            className={`tab ${activeTab === "New Leads" ? "active" : ""}`}
            onClick={() => handleTabClick("New Leads")}
          >
            New Leads
          </button>
        </div>

        {/* Action Bar (Potentially move into child components if needed) */}
        <div className="action-bar">
          <button className="create-campaign-button">
            + Create New Campaign
          </button>
          <div className="search-filter">
            <div className="search-input">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="text" placeholder="Search campaigns..." />
            </div>
            <button className="filter-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
              </svg>
              Filter
            </button>
          </div>
        </div>

        {/* Render the active tab's component */}
        {activeTab === "Past Promoters" && <PastPromoters />}
        {activeTab === "New Promoters" && <NewPromoters />}
        {activeTab === "New Leads" && <NewLeads />}
      </div>
    </div>
  );
}

export default Campaign;