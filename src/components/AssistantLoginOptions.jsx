import React from "react";
import "./../styles/AssistantLoginOptions.css"; // Create this for styles

function AssistantLoginOptions() {
  return (
    <div className="ai-assistant-widget">
      <div className="ai-header">
        <div className="ai-icon">💬</div>
        <div className="ai-title">
          <div className="ai-name">AI Assistant</div>
          <div className="ai-subtitle">Campaign Support</div>
        </div>
        <button className="ai-close">×</button>
      </div>
      <div className="ai-body">
        <div className="ai-prompt">
          <span>🪪 Your gateway to access awaits!</span> Choose your key to enter.
        </div>
        <button className="ai-button">SSO Login (Continue with Google/Microsoft/etc.)</button>
        <button className="ai-button">Magic Link (Send me a one-time login link)</button>
        <button className="ai-button">Email & Password (I'll enter my details manually.)</button>
      </div>
      <div className="ai-footer">
        <input className="ai-input" placeholder="Ask me anything..." />
        <button className="ai-send">➤</button>
      </div>
    </div>
  );
}

export default AssistantLoginOptions;
