import React from "react";
import "./../styles/PastPromoters.css";

function PastPromoters() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Referral Program",
      status: "Active",
      startDate: "5/31/2024",
      endDate: "8/30/2024",
      referrals: 245,
      conversion: 32,
      roi: 287,
      insight:
        "Increase reward by 10% to boost conversion rates during peak season.",
    },
    {
      id: 2,
      name: "Early Bird Special",
      status: "Inactive",
      startDate: "8/20/2024",
      endDate: "9/19/2024",
      referrals: 300,
      conversion: 40,
      roi: 320,
      insight:
        "Extend your campaign! Strong engagement suggests higher conversions with more time.",
    },
  ];

  return (
    <div className="past-promoters-container">
      <div className="action-bar">
        <button className="create-campaign-button">
          + Create New Campaign
        </button>
        <div className="search-filter">
          <div className="search-input">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input type="text" placeholder="Search campaigns..." />
          </div>
          <button className="filter-button">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
            </svg>
            Filter
          </button>
        </div>
      </div>
      <div className="campaign-list-header">
        <span>
          {campaigns.length} Campaigns |{" "}
          {campaigns.filter((c) => c.status === "Active").length} Active
        </span>
      </div>

      <div className="campaign-grid">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <div className={`status-badge ${campaign.status.toLowerCase()}`}>
              {campaign.status}
            </div>
            <div className="campaign-title">{campaign.name}</div>
            <div className="campaign-dates">
              {campaign.startDate} - {campaign.endDate}
            </div>

            <div className="campaign-metrics">
              <div className="metric">
                <div className="label">Referrals</div>
                <div className="value">{campaign.referrals}</div>
              </div>
              <div className="metric">
                <div className="label">Conversion</div>
                <div className="value">{campaign.conversion}%</div>
              </div>
              <div className="metric">
                <div className="label">ROI</div>
                <div className="value">{campaign.roi}%</div>
              </div>
            </div>

            <div className="campaign-insight">
              💡 <span>{campaign.insight}</span>
            </div>

            <div className="campaign-actions">
              <button className="icon-btn delete">🗑️</button>
              <button className="icon-btn view">👁️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastPromoters;
