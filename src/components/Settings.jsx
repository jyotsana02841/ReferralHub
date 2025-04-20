import React, { useState } from "react";
import "./../styles/Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isBusinessProfileLoaded, setIsBusinessProfileLoaded] = useState(true); // toggle this for filled/empty

  return (
    <div className="settings-page">
      <main className="settings-main">
        <div className="settings-card">
          <div className="tabs">
            {[
              "User Profile",
              "Business Profile",
              "All Settings",
              "Email & Phone Setup",
              "Subscription & Usage",
            ].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab.toLowerCase() ? "active" : ""}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "user profile" && (
            <div className="profile-section">
              <div className="profile-row">
                <label>Profile</label>
                <img
                  className="avatar"
                  src="https://i.pravatar.cc/60"
                  alt="profile"
                />
              </div>
              <div className="profile-row">
                <label>User Name</label>
                <span>Kadin Stanton</span>
              </div>
              <div className="profile-row">
                <label>User Phone</label>
                <span>1234567890</span>
              </div>
              <div className="profile-row">
                <label>Email</label>
                <span>kadinstanton@gmail.com</span>
              </div>
              <div className="profile-row">
                <label>Password</label>
                <span>********</span>
                <button className="link-btn">Change Password</button>
              </div>

              <div className="actions">
                <button className="danger">Delete Account</button>
                <button className="primary">Sign Out</button>
              </div>
            </div>
          )}

          {activeTab === "business profile" && (
            <div className="business-profile-section">
              {isBusinessProfileLoaded ? (
                <form className="business-form">
                  <div className="form-row">
                    <label>Business Logo</label>
                    <input type="file" />
                  </div>
                  <div className="form-row">
                    <label>Business Description</label>
                    <textarea placeholder="Add a short description..." />
                  </div>
                  <div className="form-grid">
                    <input type="text" placeholder="Business Name" />
                    <input type="email" placeholder="Business Email" />
                    <input type="tel" placeholder="Business Phone No." />
                    <input type="text" placeholder="Industry" />
                    <input type="text" placeholder="Services" />
                    <input type="text" placeholder="Products" />
                    <input type="text" placeholder="Company Size (Optional)" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Zip Code" />
                  </div>
                  <button className="primary">Save</button>
                </form>
              ) : (
                <div className="empty-form">
                  <button className="primary">Save</button>
                </div>
              )}
            </div>
          )}

          {activeTab === "email & phone setup" && (
            <div className="email-phone-setup">
              <section className="setup-section">
                <h4>Global Email Sending Address</h4>
                <p>
                  Choose how your emails are sent (e.g., invoices, tickets,
                  etc). You can have two options:
                </p>
                <div className="option-group">
                  <label>
                    <input type="radio" name="emailOption" defaultChecked />
                    Use System Email
                  </label>
                  <p className="option-desc">
                    System email will be used (default@system.com).
                  </p>
                </div>
                <div className="option-group">
                  <label>
                    <input type="radio" name="emailOption" />
                    Connect Your Custom Email Domain
                  </label>
                  <p className="option-desc">
                    Use your own domain (e.g., support@yourdomain.com).
                  </p>
                  <button className="primary">Connect Email Domain</button>
                </div>
              </section>

              <section className="setup-section">
                <h4>Global SMS Sending Number</h4>
                <p>
                  Choose how SMS messages are sent (e.g., verifications, alerts,
                  etc).
                </p>
                <div className="option-group">
                  <label>
                    <input type="radio" name="smsOption" defaultChecked />
                    Use System Phone Number
                  </label>
                  <p className="option-desc">
                    Default number will be used (system-generated).
                  </p>
                </div>
                <div className="option-group">
                  <label>
                    <input type="radio" name="smsOption" />
                    Connect Your Own Phone Number
                  </label>
                  <p className="option-desc">
                    You can register your own number for better delivery &
                    identity.
                  </p>
                  <button className="primary">Connect Phone Number</button>
                </div>
              </section>
            </div>
          )}
          {activeTab === "subscription & usage" && (
            <div className="subscription-usage">
              <section className="current-plan">
                <div>
                  <h4>Current Plan</h4>
                  <p>
                    Your Current Plan is <strong>Basic</strong>
                    <br />
                    Active until <strong>May 09, 2025</strong>
                    <br />
                    $25 per Month (Paid)
                    <br />
                    Standard plan for small to medium businesses
                  </p>
                  <button className="primary">Upgrade Plan</button>
                  <button className="danger">Cancel Subscription</button>
                </div>
                <div className="plan-days">
                  <p>
                    <strong>Days</strong>
                  </p>
                  <p>12 of 30 Days</p>
                  <small>
                    18 days remaining until your next plan renewal/update
                  </small>
                </div>
              </section>

              <section className="payment-methods">
                <h4>Payment Methods</h4>
                <div className="payment-options">
                  <label>
                    <input type="radio" name="paymentType" defaultChecked />{" "}
                    Credit/DEBIT/ATM Card
                  </label>
                  <label>
                    <input type="radio" name="paymentType" /> Paypal Account
                  </label>
                </div>

                <div className="card-inputs">
                  <input type="text" placeholder="Card Number" />
                  <div className="card-details">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="CVV" />
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <label>
                    <input type="checkbox" /> Save card info for future billing?
                  </label>
                  <div className="form-actions">
                    <button className="primary">Save Changes</button>
                    <button className="cancel">Cancel</button>
                  </div>
                </div>
              </section>

              <section className="my-cards">
                <h4>My Cards</h4>
                <div className="card-list">
                  <div className="card">
                    <p>
                      <strong>Tom McHale</strong>{" "}
                      <span className="tag primary">Primary</span>
                    </p>
                    <small>**** 7204</small>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                  </div>
                  <div className="card">
                    <p>
                      <strong>Mikdad Wogner</strong>
                    </p>
                    <small>**** 9926</small>
                    <button className="edit">Edit</button>
                    <button className="delete">Delete</button>
                  </div>
                </div>
              </section>

              <section className="billing-history">
                <h4>Billing History</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Plan Name</th>
                      <th>Amount</th>
                      <th>Issued Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        plan: "Standard Plan",
                        amount: "$25",
                        date: "23/08/2024",
                        status: "Pending",
                      },
                      {
                        plan: "Standard Plan",
                        amount: "$25",
                        date: "23/07/2024",
                        status: "Failed",
                      },
                      {
                        plan: "Standard Plan",
                        amount: "$25",
                        date: "23/06/2024",
                        status: "Paid",
                      },
                      {
                        plan: "Standard Plan",
                        amount: "$25",
                        date: "23/05/2024",
                        status: "Paid",
                      },
                      {
                        plan: "Standard Plan",
                        amount: "$25",
                        date: "23/04/2024",
                        status: "Paid",
                      },
                    ].map((entry, i) => (
                      <tr key={i}>
                        <td>{entry.plan}</td>
                        <td>{entry.amount}</td>
                        <td>{entry.date}</td>
                        <td>
                          <span
                            className={`status ${entry.status.toLowerCase()}`}
                          >
                            {entry.status}
                          </span>
                        </td>
                        <td>
                          <button>🔍</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="pagination">
                  {Array.from({ length: 10 }, (_, i) => (
                    <button key={i} className={i === 0 ? "active" : ""}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Settings;
