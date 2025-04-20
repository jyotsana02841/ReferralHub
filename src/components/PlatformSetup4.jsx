import React from "react";
import "./../styles/PlatformSetup4.css";

const PlatformSetup4 = () => {
  return (
    <div>
      {/* Content Body */}
      <div className="content-body">
        {/* Left Section - Get Started (Similar to previous setup pages) */}
        <div className="get-started">
          <h3>Get Started with ReferralHub</h3>
          <p>
            To get started with better referrals & rewards, complete your
            account setup in a few easy steps.
          </p>
          <div className="setup-steps">
            <div className="step completed">
              <span className="checkmark">✓</span> Set Up Business Profile
              <span className="status">Completed</span>
            </div>
            <div className="step completed">
              <span className="checkmark">✓</span> Sync Your Customer Data
              <span className="status">Completed</span>
            </div>
            <div className="step completed">
              <span className="checkmark">✓</span> Set Up AI Agent Rules
              <span className="status">Completed</span>
            </div>
            <div className="step in-progress">
              <span className="progress-indicator"></span> Set Up First Campaign
              <span className="status">In Progress</span>
            </div>
          </div>
        </div>

        {/* Right Section - Create New Campaign Form */}
        <div className="create-campaign-form-detailed">
          <h2>Create New Campaign</h2>

          <div className="form-section">
            <h3>Campaign Basics</h3>
            <div className="form-group">
              <label htmlFor="campaignName">Campaign Name</label>
              <input
                type="text"
                id="campaignName"
                placeholder="Summer Referral Bonanza"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Promotion Settings</h3>
            <div className="form-group">
              <label htmlFor="promotionType">Promotion Type</label>
              <select id="promotionType">
                <option value="discount">Discount</option>
                {/* Add other promotion type options */}
              </select>
            </div>
            <div className="form-group reward-group">
              <label>Reward</label>
              <div className="reward-inputs">
                <input type="number" placeholder="e.g., 20" />
                <select>
                  <option>%</option>
                  {/* Add other unit options */}
                </select>
                <span className="on-next-purchase">on next purchase</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="referralMessage">Referral Message</label>
              <textarea
                id="referralMessage"
                rows="2"
                placeholder="e.g., Tell your friends and get $20 for each successful referral!"
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h3>Follow-up Settings (Referrer)</h3>
            <div className="followup-card">
              <label className="checkbox-label">
                <input type="checkbox" name="followupReferrer" value="email" />{" "}
                Email
              </label>
              <div className="followup-details">
                {/* UI for scheduling and content of follow-up emails */}
                <div className="form-group">
                  <label htmlFor="afterDaysReferrer">After (days)</label>
                  <input
                    type="number"
                    id="afterDaysReferrer"
                    placeholder="e.g., 3"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="followupMessageReferrer">
                    Follow-up Message
                  </label>
                  <textarea
                    id="followupMessageReferrer"
                    rows="2"
                    placeholder="e.g., Just a reminder about our awesome referral program!"
                  ></textarea>
                </div>
                <button className="add-followup-button">+ Add Follow-up</button>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Leads Settings</h3>
            <div className="form-group">
              <label htmlFor="leadRewardType">Reward Type</label>
              <select id="leadRewardType">
                <option value="discount">Discount</option>
                {/* Add reward type options for leads */}
              </select>
            </div>
            <div className="form-group reward-group">
              <label>Reward</label>
              <div className="reward-inputs">
                <input type="number" placeholder="e.g., 30" />
                <select>
                  <option>%</option>
                  {/* Add other unit options */}
                </select>
                <span className="off-first-order">off first order</span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="leadRewardMessage">Referral Shared Message</label>
              <textarea
                id="leadRewardMessage"
                rows="2"
                placeholder="e.g., Your friend thought you’d get a great offer: Get 30% off your first order!"
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h3>Form Fields</h3>
            <div className="form-fields-checkboxes">
              <label className="checkbox-label">
                <input type="checkbox" name="formField" value="fullName" /> Full
                Name
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="formField" value="email" /> Email
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="formField" value="phoneNumber" />{" "}
                Phone Number
              </label>
              {/* Add other form field options */}
            </div>
          </div>

          <div className="form-section">
            <h3>Follow-up Settings (Referred Friend)</h3>
            <div className="followup-card">
              <label className="checkbox-label">
                <input type="checkbox" name="followupFriend" value="email" />{" "}
                Email
              </label>
              <div className="followup-details">
                {/* UI for scheduling and content of follow-up emails */}
                <div className="form-group">
                  <label htmlFor="afterDaysFriend">After (days)</label>
                  <input
                    type="number"
                    id="afterDaysFriend"
                    placeholder="e.g., 2"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="followupMessageFriend">
                    Follow-up Message
                  </label>
                  <textarea
                    id="followupMessageFriend"
                    rows="2"
                    placeholder="e.g., Don't miss out on your special discount!"
                  ></textarea>
                </div>
                <button className="add-followup-button">+ Add Follow-up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="cancel-button">Cancel</button>
        <button className="create-campaign-button">Create Campaign</button>
      </div>
    </div>
  );
};

export default PlatformSetup4;
