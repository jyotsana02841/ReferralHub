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
        

        {/* Render the active tab's component */}
        {activeTab === "Past Promoters" && <PastPromoters />}
        {activeTab === "New Promoters" && <NewPromoters />}
        {activeTab === "New Leads" && <NewLeads />}
      </div>
    </div>
  );
}

export default Campaign;
