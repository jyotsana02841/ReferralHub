import React from "react";

const Sidebar = ({ activePage, handleSidebarClick }) => {
  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${activePage === "Platform Setup" ? "active" : ""}`}
        onClick={() => handleSidebarClick("Platform Setup")}
      >
        Platform Setup
      </div>
      <div
        className={`sidebar-item ${activePage === "AI Agent" ? "active" : ""}`}
        onClick={() => handleSidebarClick("AI Agent")}
      >
        AI Agent
      </div>
      <div
        className={`sidebar-item ${activePage === "Dashboard" ? "active" : ""}`}
        onClick={() => handleSidebarClick("Dashboard")}
      >
        Dashboard
      </div>
      <div
        className={`sidebar-item ${activePage === "Campaign" ? "active" : ""}`}
        onClick={() => handleSidebarClick("Campaign")}
      >
        Campaign
      </div>
      <div
        className={`sidebar-item ${activePage === "Promoters" ? "active" : ""}`}
        onClick={() => handleSidebarClick("Promoters")}
      >
        Promoters
      </div>
      <div
        className={`sidebar-item ${activePage === "Leads" ? "active" : ""}`}
        onClick={() => handleSidebarClick("Leads")}
      >
        Leads
      </div>
      <div
        className={`sidebar-item ${activePage === "Payouts" ? "active" : ""}`}
        onClick={() => handleSidebarClick("Payouts")}
      >
        Payouts
      </div>
      
      <div className="sidebar-bottom">
        <div
          className={`sidebar-item ${activePage === "Settings" ? "active" : ""}`}
          onClick={() => handleSidebarClick("Settings")}
        >
          Settings
        </div>
        <div
          className={`sidebar-item ${activePage === "Help" ? "active" : ""}`}
          onClick={() => handleSidebarClick("Help")}
        >
          Help
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
