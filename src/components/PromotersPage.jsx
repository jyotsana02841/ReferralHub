import React from "react";
import "./../styles/PromotersPage.css";

const promoters = [
  {
    name: "Emery Dodkis",
    contact: "+971907147015",
    leads: 12,
    conversionRate: "50%",
    lastFollowUp: "28-4-2024",
    revenue: "$50",
    status: "Active",
  },
  {
    name: "Kadin Lipshutz",
    contact: "+971504184879",
    leads: 8,
    conversionRate: "30%",
    lastFollowUp: "27-5-2024",
    revenue: "$800",
    status: "Active",
  },
  {
    name: "Randy Culvahouse",
    contact: "+971506159860",
    leads: 12,
    conversionRate: "60%",
    lastFollowUp: "30-4-2024",
    revenue: "$900",
    status: "Active",
  },
  {
    name: "Jason Vaccaro",
    contact: "+971520508505",
    leads: 10,
    conversionRate: "45%",
    lastFollowUp: "30-4-2024",
    revenue: "$500",
    status: "Completed",
  },
  {
    name: "Jocelyn Levin",
    contact: "+971554106300",
    leads: 8,
    conversionRate: "28%",
    lastFollowUp: "01-7-2024",
    revenue: "$1,500",
    status: "Inactive",
  },
  {
    name: "Meren Septimus",
    contact: "+971526508128",
    leads: 13,
    conversionRate: "65%",
    lastFollowUp: "01-6-2024",
    revenue: "$2,800",
    status: "Completed",
  },
  {
    name: "Hayle Sante",
    contact: "+971503232828",
    leads: 8,
    conversionRate: "50%",
    lastFollowUp: "05-7-2024",
    revenue: "$700",
    status: "Active",
  },
  {
    name: "Randy Herwitz",
    contact: "+971563433232",
    leads: 12,
    conversionRate: "50%",
    lastFollowUp: "10-6-2024",
    revenue: "$800",
    status: "Inactive",
  },
];

export default function PromotersDashboard() {
  return (
    <div className="dashboard-container">
      <h1>Manage and monitor your promoter referral activities</h1>

      <div className="buttons">
        <button className="primary">+ New Promoter</button>
        <button className="secondary">Ask Past Customers For Referrals</button>
      </div>

      <div className="stats">
        <div className="stat">
          <p>Total Customers</p>
          <h3>8</h3>
        </div>
        <div className="stat">
          <p>New Customers</p>
          <h3>94</h3>
        </div>
        <div className="stat">
          <p>Average Conversion Rate</p>
          <h3>64%</h3>
        </div>
        <div className="stat">
          <p>Total Revenue Generated</p>
          <h3>$23,900</h3>
        </div>
      </div>

      <table className="promoters-table">
        <thead>
          <tr>
            <th></th>
            <th>Promoter Name</th>
            <th>Contact No.</th>
            <th>Leads</th>
            <th>Conversion Rate</th>
            <th>Last Follow-Up</th>
            <th>Revenue Generated</th>
            <th>Referrer Status</th>
          </tr>
        </thead>
        <tbody>
          {promoters.map((promoter, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{promoter.name}</td>
              <td>{promoter.contact}</td>
              <td>{promoter.leads}</td>
              <td>{promoter.conversionRate}</td>
              <td>{promoter.lastFollowUp}</td>
              <td>{promoter.revenue}</td>
              <td>
                <span className={`status ${promoter.status.toLowerCase()}`}>
                  {promoter.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}