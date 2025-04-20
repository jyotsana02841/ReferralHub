import React, { useState } from "react";
import "./../styles/ChatPage.css"; // You'll need to create this CSS file
import { FiUser, FiRefreshCw } from "react-icons/fi"; // Example icons
import {
  FaCommentDots,
  FaChartBar,
  FaFileAlt,
  FaTags,
  FaMoneyBillWave,
} from "react-icons/fa"; // More example icons

import aiAvatar from "./../assets/aiAvatar.jpeg";
import userAvatar from "./../assets/user.png";
import 'remixicon/fonts/remixicon.css'


const ChatPage = () => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { text: "Welcome back, Karthik! How can I help you today?", sender: "ai" },
    {
      text: "Hey, I want to create a new referral campaign, but I'd like some help to make sure it's set up correctly and performs well. Can you guide me through it?",
      sender: "user",
    },
    {
      text: "Absolutely! To start a high-converting referral campaign, let's first define your main objective. What is the primary goal of this activity?",
      sender: "ai",
    },
    {
      text: "My main goal is to increase sales through referrals. I want existing customers to bring in new paying customers, and I'd like to reward them for it.",
      sender: "user",
    },
    {
      text: "That's a great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer referrers?",
      sender: "ai",
    },
    { text: "Because it's our first referral...", sender: "user" },
    {
      text: "Great choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer per successful referral?",
      sender: "ai",
    },
    { text: "$20", sender: "user" },
    {
      text: "That sounds like a strong incentive! Now, let's define where a referral is considered valid. When should the referrer receive their reward?",
      sender: "ai",
    },
    { text: "When the referred purchase is paid.", sender: "user" },
    {
      text: "That's a great way to ensure that your campaign has a real impact. Now, how long do you want this specific campaign to run?",
      sender: "ai",
    },
    {
      text: "I want to test this campaign for a while before making any long-term decisions, so maybe 3 months would be ideal. If it works well, I can always extend it.",
      sender: "user",
    },
    {
      text: (
        <div>
          Got it! Here's a quick summary of your campaign:
          <ul>
            <li>Goal: Increase sales</li>
            <li>Reward: $20 discount on the next purchase</li>
            <li>
              Condition: Reward is given when the referred purchase makes a
              payment
            </li>
            <li>Duration: 3 months</li>
          </ul>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Launch
            </button>
          </div>
        </div>
      ),
      sender: "ai",
    },
  ]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
      // In a real application, you would send this message to the AI agent
    }
  };

  const handleResetChat = () => {
    setMessages([]);
    // In a real application, you might want to clear the conversation history on the server as well
  };

  return (
    <div className="chat-page-container">
      {/* Chat Interface */}
      <div className="chat-interface">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="title">AI Agent</div>
          <div className="actions">
            <div className="user-info">
              <FiUser /> Karthik Station
            </div>
            <button className="reset-button" onClick={handleResetChat}>
              <FiRefreshCw /> Reset
            </button>
          </div>
        </div>

        {/* Message List */}
        <div className="message-list">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-bubble ${
                message.sender === "ai" ? "ai" : "user"
              }`}
            >
              <img
                src={message.sender === "ai" ? aiAvatar : userAvatar}
                alt="avatar"
                className="chat-avatar"
              />

              <div className="message-content">{message.text}</div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputText}
            onChange={handleInputChange}
          />
          <i class="ri-send-plane-2-fill send" onClick={handleSendMessage}></i>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <div className="title">Quick Links</div>
          <div className="buttons">
            <button className="quick-button">➕ New Referral</button>
            <button className="quick-button">📈 Campaign Overview</button>
            <button className="quick-button">✉️ Roll Up</button>
            <button className="quick-button">👥 View Referrals</button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Kill the shilling..." />
            {/* You might want to add a search icon */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
