// PlatformSetup.js
import React, { useState } from "react";

import PlatformSetup1 from "./PlatformSetup1.jsx";
import PlatformSetup2 from "./PlatformSetup2.jsx";
import PlatformSetup3 from "./PlatformSetup3.jsx";
import PlatformSetup4 from "./PlatformSetup4.jsx";
import AIAgentChat from "./AiAgentChat.jsx";
import DashboardPage from "./DashboardPage.jsx";
import Campaign from "./Campaign.jsx";
import PromotersPage from "./PromotersPage.jsx";
import Payouts from "./Payouts.jsx";
import Settings from "./Settings.jsx";
import ChatPage from "./ChatPage.jsx";
import LeadsDashboard from "./LeadsDashboard.jsx";
import AssistantLoginOptions from "./AssistantLoginOptions.jsx";
import PlatformSetupContent from "./PlatformSetupContent.jsx";
import "./../styles/PlatformSetup.css";
import Sidebar from './Sidebar.jsx'

function PlatformSetup() {
  const [activePage, setActivePage] = useState("Platform Setup");

  const handleSidebarClick = (pageName) => {
    console.log("Clicked:", pageName);
    setActivePage(pageName);
  };

  const renderPage = () => {
    console.log("Rendering page:", activePage); // Debug log for activePage

    switch (activePage) {
      case "Platform Setup":
        return <PlatformSetupContent />;
      case "AI Agent":
        return <ChatPage />;
      case "Dashboard":
        return <DashboardPage />;
      case "Campaign":
        return <Campaign />;
      case "Promoters":
        return <PromotersPage />;
      case "Leads":
        return <LeadsDashboard />;
      case "Payouts":
        return <Payouts />;
      case "Settings":
        return <Settings />;
      case "Help":
        return <div>Help Section Coming Soon</div>;
      case "Assistant Access":
        return <AssistantLoginOptions />;
      default:
        return <div>Welcome! Please select an option from the sidebar.</div>
    }
  };

  return (
    <div className="platform-setup-container">
      {/* Sidebar */}
      <Sidebar activePage={activePage} handleSidebarClick={handleSidebarClick} />

      {/* Main Content */}
      <div className="main-content">
        {/* Show header only if the page is not Login or Register */}
        {activePage !== "Login" && activePage !== "Register" && (
          <div className="header">
            <h2>{activePage}</h2>
            <div className="user-info">
              <div className="avatar">KS</div>
              <div className="user-details">
                <div className="user-name">Kadlin Stanton</div>
                <div className="user-email">kadlinstanton@gmail.com</div>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        {renderPage()}
      </div>
    </div>
  );
}

export default PlatformSetup;
