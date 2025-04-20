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
import Login from "./LoginForm.jsx";
import Register from "./RegisterForm.jsx";
import AssistantLoginOptions from "./AssistantLoginOptions.jsx";

import "./../styles/PlatformSetup.css";

function PlatformSetup() {
  const [activePage, setActivePage] = useState("Login"); // Start with Login page

  const handleSidebarClick = (pageName) => {
    setActivePage(pageName);
  };

  const renderPage = () => {
    switch (activePage) {
      case "Login":
        return <Login onSwitchToRegister={() => setActivePage("Register")} />;
      case "Register":
        return <Register onSwitchToLogin={() => setActivePage("Login")} />;
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
        return <div>Welcome! Please select an option from the sidebar.</div>;
    }
  };

  const PlatformSetupContent = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
      setStep((prev) => prev + 1);
    };

    const renderStep = () => {
      switch (step) {
        case 1:
          return <PlatformSetup1 onNext={handleNext} />;
        case 2:
          return <PlatformSetup2 onNext={handleNext} />;
        case 3:
          return <PlatformSetup3 onNext={handleNext} />;
        case 4:
          return <PlatformSetup4 />;
        default:
          return null;
      }
    };

    return <div className="content-body">{renderStep()}</div>;
  };

  return (
    <div className="platform-setup-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div
          className={`sidebar-item ${activePage === "Login" ? "active" : ""}`}
          onClick={() => handleSidebarClick("Login")}
        >
          Login
        </div>
        <div
          className={`sidebar-item ${
            activePage === "Register" ? "active" : ""
          }`}
          onClick={() => handleSidebarClick("Register")}
        >
          Register
        </div>
        <div
          className={`sidebar-item ${
            activePage === "Platform Setup" ? "active" : ""
          }`}
          onClick={() => handleSidebarClick("Platform Setup")}
        >
          Platform Setup
        </div>
        <div
          className={`sidebar-item ${
            activePage === "AI Agent" ? "active" : ""
          }`}
          onClick={() => handleSidebarClick("AI Agent")}
        >
          AI Agent
        </div>
        <div
          className={`sidebar-item ${
            activePage === "Dashboard" ? "active" : ""
          }`}
          onClick={() => handleSidebarClick("Dashboard")}
        >
          Dashboard
        </div>
        <div
          className={`sidebar-item ${
            activePage === "Campaign" ? "active" : ""
          }`}
          onClick={() => handleSidebarClick("Campaign")}
        >
          Campaign
        </div>
        <div
          className={`sidebar-item ${
            activePage === "Promoters" ? "active" : ""
          }`}
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
        <div
          className={`sidebar-item ${
            activePage === "Assistant Access" ? "active" : ""
          }`}
          onClick={() => handleSidebarClick("Assistant Access")}
        >
          Assistant Access
        </div>

        <div className="sidebar-bottom">
          <div
            className={`sidebar-item ${
              activePage === "Settings" ? "active" : ""
            }`}
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

      {/* Main Content */}
      <div className="main-content">
        {/* Header - Hide for login/register */}
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
        <div className="content-body">{renderPage()}</div>
      </div>
    </div>
  );
}

export default PlatformSetup;
