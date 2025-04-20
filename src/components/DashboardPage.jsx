import React from "react";
import DonutChart from "./DonutChart";
import LineChartComponent from "./LineChartComponent.jsx";
import DonutChartThick from "./DonutChartThink.jsx";
import "./../styles/DashboardPage.css";

function DashboardPage() {
  return (
    <div className="dashboard-container">
      {/* Top KPIs */}
      <div className="kpi-container">
        <div className="kpi-card kpi-promoters">
          <div className="kpi-icon">👥</div>
          <div className="kpi-content">
            <div className="kpi-label">Total Promoters</div>
            <div className="kpi-value">1,234</div>
            <div className="kpi-delta positive">
              +12% <span>vs last month</span>
            </div>
          </div>
        </div>

        <div className="kpi-card kpi-conversion">
          <div className="kpi-icon">📉</div>
          <div className="kpi-content">
            <div className="kpi-label">Conversion Rate</div>
            <div className="kpi-value">23.5%</div>
            <div className="kpi-delta negative">
              -2.4% <span>vs last month</span>
            </div>
          </div>
        </div>

        <div className="kpi-card kpi-revenue">
          <div className="kpi-icon">💰</div>
          <div className="kpi-content">
            <div className="kpi-label">Revenue Generated</div>
            <div className="kpi-value">$12,345</div>
            <div className="kpi-delta positive">
              +8.7% <span>vs last month</span>
            </div>
          </div>
        </div>

        <div className="kpi-card kpi-campaigns">
          <div className="kpi-icon">📊</div>
          <div className="kpi-content">
            <div className="kpi-label">Active Campaigns</div>
            <div className="kpi-value">3</div>
            <div className="kpi-delta neutral"> </div>
          </div>
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="indicator-row">
        <div className="indicator-card">
          <div className="indicator-label">Repeat Referral Rate</div>
          <div className="indicator-value">
            <DonutChart percentage={42} color="#00C49F" />
          </div>
        </div>
        <div className="indicator-card">
          <div className="indicator-label">Referral Engagement Rate</div>
          <div className="indicator-value">
            <DonutChart percentage={37} color="#ff6b6b" />
          </div>
        </div>
        <div className="indicator-card">
          <div className="indicator-label">Churn Rate of Leads</div>
          <div className="indicator-value">
            <DonutChart percentage={28} color="#4287f5" />
          </div>
        </div>
        <div className="indicator-card">
          <div className="indicator-label">Upgrade Rate of Leads</div>
          <div className="indicator-value">
            <DonutChart percentage={19} color="#9b59b6" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        <div className="chart-card wide">
          <div className="chart-header">Promoter Performance Over Time</div>
          <LineChartComponent />
        </div>

        <div className="chart-card">
          <div className="chart-header">Conversion Success Rate</div>
          <DonutChartThick />
          <div className="chart-subtext">
            <div>Referred Users: 57%</div>
            <div>Converted: 43%</div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">Top Performing Channel</div>
          <div className="channel-bars">
            <div className="channel-bar" style={{ backgroundColor: "#fde2e2" }}>
              <span>Facebook</span>
              <span>78%</span>
            </div>
            <div className="channel-bar" style={{ backgroundColor: "#ffe9ec" }}>
              <span>Twitter</span>
              <span>45%</span>
            </div>
            <div className="channel-bar" style={{ backgroundColor: "#e0f4ff" }}>
              <span>LinkedIn</span>
              <span>23%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="recent-activities-container">
        <div className="section-header">Recent Activities</div>
        <table className="activity-table">
          <thead>
            <tr>
              <th>Activity</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Julian started a trial</td>
              <td>28-4-2024</td>
              <td>10:28 AM</td>
            </tr>
            <tr>
              <td>John Doe signed up from your referral link</td>
              <td>29-4-2024</td>
              <td>9:45 AM</td>
            </tr>
            <tr>
              <td>You reached $50 in payouts</td>
              <td>30-4-2024</td>
              <td>8:12 PM</td>
            </tr>
            <tr>
              <td>You updated your referral campaign</td>
              <td>27-4-2024</td>
              <td>7:00 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Leaderboard Table View */}
      <div className="leaderboard-container">
        <div className="section-header">Leaderboard Table View</div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Promoter Name</th>
              <th>Conversion Rate</th>
              <th>Referrals Sent</th>
              <th>Successful Conversions</th>
              <th>Revenue Generated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Emery Dokidis</td>
              <td>150</td>
              <td>80</td>
              <td>60%</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kadin Lipshutz</td>
              <td>132</td>
              <td>90</td>
              <td>65%</td>
              <td>$980</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Randy Culhane</td>
              <td>110</td>
              <td>60</td>
              <td>60%</td>
              <td>$880</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Jaxson Vaccaro</td>
              <td>100</td>
              <td>85</td>
              <td>75%</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Jocelyn Levin</td>
              <td>50</td>
              <td>30</td>
              <td>63%</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Maren Septimus</td>
              <td>80</td>
              <td>35</td>
              <td>25%</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Haylie Saris</td>
              <td>120</td>
              <td>55</td>
              <td>45%</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Randy Herwitz</td>
              <td>110</td>
              <td>90</td>
              <td>65%</td>
              <td>$880</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
