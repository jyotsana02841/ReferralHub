import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Payouts.css";

const mockPayouts = [
  {
    id: "#P-1048",
    name: "Emery Dokidis",
    points: 500,
    date: "28-4-2024",
    reward: "Spring Boost",
    status: "Paid",
  },
  {
    id: "#P-1047",
    name: "Kadin Lipshutz",
    points: 250,
    date: "27-5-2024",
    reward: "Summer Referral Program",
    status: "Paid",
  },
  {
    id: "#P-1046",
    name: "Randy Culhane",
    points: 300,
    date: "29-5-2024",
    reward: "Early Bird Special",
    status: "Disputed",
  },
  {
    id: "#P-1045",
    name: "Jaxson Vaccaro",
    points: 100,
    date: "30-6-2024",
    reward: "Early Bird Special",
    status: "Paid",
  },
  {
    id: "#P-1044",
    name: "Jocelyn Levin",
    points: 200,
    date: "01-7-2024",
    reward: "Summer Referral Program",
    status: "Disputed",
  },
];

const mockDisputes = [
  {
    id: "D-3012",
    name: "Emery Dokidis",
    points: 500,
    date: "28-4-2024",
    reward: "Spring Boost",
    status: "Resolved",
  },
  {
    id: "D-3013",
    name: "Kadin Lipshutz",
    points: 250,
    date: "27-5-2024",
    reward: "Summer Referral Program",
    status: "Resolved",
  },
  {
    id: "D-3014",
    name: "Randy Culhane",
    points: 300,
    date: "29-5-2024",
    reward: "Early Bird Special",
    status: "Under Review",
  },
  {
    id: "D-3015",
    name: "Jaxson Vaccaro",
    points: 100,
    date: "30-6-2024",
    reward: "Early Bird Special",
    status: "Resolved",
  },
  {
    id: "D-3016",
    name: "Jocelyn Levin",
    points: 200,
    date: "01-7-2024",
    reward: "Summer Referral Program",
    status: "Under Review",
  },
  {
    id: "D-3017",
    name: "Maren Septimus",
    points: 300,
    date: "03-7-2024",
    reward: "Summer Referral Program",
    status: "Resolved",
  },
  {
    id: "D-3018",
    name: "Haylie Saris",
    points: 220,
    date: "05-7-2024",
    reward: "Spring Boost",
    status: "Resolved",
  },
  {
    id: "D-3019",
    name: "Randy Herwitz",
    points: 400,
    date: "10-7-2024",
    reward: "Spring Boost",
    status: "Under Review",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Paid":
      return "status-paid";
    case "Disputed":
      return "status-disputed";
    case "Resolved":
      return "status-resolved";
    case "Under Review":
      return "status-review";
    default:
      return "";
  }
};

const Payouts = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("payouts");
  // Add this inside the Payouts component, below other state declarations
  const [preloadMoney, setPreloadMoney] = useState(true);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="payouts-page">
      <h2>Manage and monitor your payouts</h2>

      <div className="summary">
        <div className="card">
          <span>Total Points Given</span>
          <strong>12,500</strong>
        </div>
        <div className="card">
          <span>Current Point Balance</span>
          <strong>1,250</strong>
        </div>
        <div className="card">
          <span>Last Points Transfer</span>
          <strong>April 9, 2025</strong>
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "payouts" ? "active" : ""}
          onClick={() => setActiveTab("payouts")}
        >
          All Payouts
        </button>
        <button
          className={activeTab === "disputes" ? "active" : ""}
          onClick={() => setActiveTab("disputes")}
        >
          Disputes
        </button>
        <button
          className={activeTab === "settings" ? "active" : ""}
          onClick={() => setActiveTab("settings")}
        >
          Payout Settings
        </button>
      </div>

      {activeTab === "payouts" && (
        <table className="payouts-table">
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Promoter Name</th>
              <th>Points</th>
              <th>Reward Date</th>
              <th>Reward Earned For</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockPayouts.map((payout) => (
              <tr key={payout.id}>
                <td>{payout.id}</td>
                <td>{payout.name}</td>
                <td>{payout.points} pts</td>
                <td>{payout.date}</td>
                <td>{payout.reward}</td>
                <td>
                  <span className={`status ${getStatusClass(payout.status)}`}>
                    {payout.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() =>
                      navigate(
                        `/lead/${payout.name.toLowerCase().replace(/ /g, "-")}`
                      )
                    }
                  >
                    View Profile
                  </button>
                  <button className="link">
                    {payout.status === "Disputed"
                      ? "Track Dispute"
                      : "Request Dispute"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === "disputes" && (
        <table className="payouts-table">
          <thead>
            <tr>
              <th>Dispute ID</th>
              <th>Promoter Name</th>
              <th>Points</th>
              <th>Submitted On</th>
              <th>Reward Earned For</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockDisputes.map((dispute) => (
              <tr key={dispute.id}>
                <td>{dispute.id}</td>
                <td>{dispute.name}</td>
                <td>{dispute.points} pts</td>
                <td>{dispute.date}</td>
                <td>{dispute.reward}</td>
                <td>
                  <span className={`status ${getStatusClass(dispute.status)}`}>
                    {dispute.status}
                  </span>
                </td>
                <td>
                  <button>👁️</button>
                  <button className="link">Resolve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {activeTab === "settings" && (
        <div className="payout-settings">
          <div className="toggle-row">
            <label>Preload Money</label>
            <input
              type="checkbox"
              checked={preloadMoney}
              onChange={() => setPreloadMoney(!preloadMoney)}
            />
          </div>
          <p className="note">Use Points to Reward Promoters Instantly</p>

          <div className="point-balance">
            <span>Current Point Balance: </span>
            <strong>1,250</strong> Points
          </div>

          <div className="form-group">
            <label>Enter Amount</label>
            <input
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="note">You'll receive 10 points per $1</p>
          </div>

          <div className="form-group">
            <label>Payment Methods</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                Credit/Debit/ATM Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                Paypal account
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                Bank Transfer
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                UPI
              </label>
            </div>
          </div>

          <button className="buy-btn">Buy Points</button>
        </div>
      )}
    </div>
  );
};

export default Payouts;
