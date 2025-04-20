import React from 'react';
import "./../styles/AiAgentChat.css"; // Create this CSS file

function AiAgentChat() {
  return (
    <div className="ai-agent-chat-container">
      {/* Left Sidebar (Assuming it's the same as before or a similar structure) */}
      <div className="sidebar">
        <div className="sidebar-item">AI Agent</div> {/* Active item */}
        <div className="sidebar-item">Dashboard</div>
        <div className="sidebar-item">Campaign</div>
        <div className="sidebar-item">Promoters</div>
        <div className="sidebar-item">Leads</div>
        <div className="sidebar-item">Payouts</div>
        <div className="sidebar-bottom">
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Help</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-title">
            <AiAvatar /> {/* AI Avatar */}
            <h2>AI Agent</h2>
          </div>
          <button className="reset-button">Reset</button>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          {/* Example Chat Bubbles - You'll map through your chat history here */}
          <div className="chat-bubble ai">
            <AiAvatar />
            <div className="message">👋 Welcome back, Kadlin! How can I help you today?</div>
          </div>

          <div className="chat-bubble user">
            <UserAvatar />
            <div className="message">Hey, I want to create a new referral campaign, but I'd like some help from AI to make sure it's set up correctly and performs well. Can you guide me on setting it up?</div>
          </div>

          <div className="chat-bubble ai">
            <AiAvatar />
            <div className="message">Absolutely! I'd be happy to help you create a high-converting referral campaign step by step. Let's start with defining your main objective. What's the primary goal of this campaign?</div>
          </div>

          <div className="chat-bubble user">
            <UserAvatar />
            <div className="message">My main goal is to increase sales. While acquiring new paying customers is important, I'd like to reward them for it.</div>
          </div>

          <div className="chat-bubble ai">
            <AiAvatar />
            <div className="message">That's a great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer referrers?</div>
          </div>

          {/* ... more chat bubbles ... */}

          <div className="chat-bubble ai">
            <AiAvatar />
            <div className="message">Got it! Here's a quick summary of your campaign:
              <ul className="campaign-summary">
                <li><strong>Goal:</strong> Increase sales</li>
                <li><strong>Reward:</strong> 15% discount on the next purchase</li>
                <li><strong>Condition:</strong> Reward is given once the referred person makes a purchase</li>
                <li><strong>Duration:</strong> 2 months</li>
              </ul>
              <div className="summary-actions">
                <button className="edit-button">Edit</button>
                <button className="launch-button">Launch</button>
              </div>
            </div>
          </div>

          <div className="chat-bubble user right-aligned">
            <UserAvatar />
            <div className="message">Launch</div>
          </div>

          <div className="chat-bubble ai">
            <AiAvatar />
            <div className="message">🚀 Campaign launched successfully! You can now track its performance on your dashboard.</div>
          </div>
        </div>

        {/* Input Area */}
        <div className="input-area">
          <input type="text" placeholder="Ask me anything..." />
          <button className="send-button">Send</button>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <div className="links">
            <button>💡 Send Feedback</button>
            <button>📊 Report a Problem</button>
            <button>❓ Follow Up</button>
            <button>⚙️ View Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiAgentChat;