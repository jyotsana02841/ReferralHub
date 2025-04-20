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
      <div className="campaign-list-header">
        <span>{campaigns.length} Campaigns | {campaigns.filter(c => c.status === "Active").length} Active</span>
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
              <button className="icon-btn delete">
                🗑️
              </button>
              <button className="icon-btn view">
                👁️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastPromoters;
