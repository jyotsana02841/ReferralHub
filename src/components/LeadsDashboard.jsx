import React, { useState } from "react";

const LeadsDashboard = () => {
  const [search, setSearch] = useState("");
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [viewingLead, setViewingLead] = useState(null);

  const leads = [
    {
      id: 1,
      name: "Emery Dokidis",
      email: "emerydoki@gmail.com",
      contact: "+97970174715",
      coupon: "SAVE10NOW",
      status: "Pending",
    },
    {
      id: 2,
      name: "Kadin Lipshutz",
      email: "kadinlipshutz@gmail.com",
      contact: "+971509148279",
      coupon: "WELCOME15",
      status: "Pending",
    },
    {
      id: 3,
      name: "Randy Culhane",
      email: "randyculhane@gmail.com",
      contact: "+971501598978",
      coupon: "EXCLUSIVE20",
      status: "Pending",
    },
    {
      id: 4,
      name: "Jaxson Vaccaro",
      email: "jaxsonvaccaro@gmail.com",
      contact: "+971522503635",
      coupon: "GETDEAL25",
      status: "Completed",
    },
    {
      id: 5,
      name: "Jocelyn Levin",
      email: "jocelynlevin@gmail.com",
      contact: "+971554315300",
      coupon: "FIRSTORDER10",
      status: "Pending",
    },
    {
      id: 6,
      name: "Maren Septimus",
      email: "marenseptimus@gmail.com",
      contact: "+971526208232",
      coupon: "SPECIALSAVE15",
      status: "Completed",
    },
    {
      id: 7,
      name: "Haylie Saris",
      email: "hayliesaris@gmail.com",
      contact: "+971503328228",
      coupon: "LIMITED20",
      status: "Pending",
    },
    {
      id: 8,
      name: "Randy Herwitz",
      email: "randyherwitz@gmail.com",
      contact: "+971554231522",
      coupon: "TRYUS10",
      status: "Pending",
    },
  ];

  const handleSelectAll = (e) => {
    setSelectedLeads(e.target.checked ? leads.map((l) => l.id) : []);
  };

  const handleSelect = (id) => {
    setSelectedLeads((prev) =>
      prev.includes(id) ? prev.filter((lid) => lid !== id) : [...prev, id]
    );
  };

  const handleChangeStatus = (id, status) => {
    const index = leads.findIndex((lead) => lead.id === id);
    if (index !== -1) {
      leads[index].status = status;
      setViewingLead({ ...leads[index] });
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <style>
        {`
          .dashboard-header {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-bottom: 15px;
          }
          .dashboard-header input[type="text"] {
            padding: 6px;
            flex: 1;
          }
          .dashboard-header select,
          .dashboard-header button {
            padding: 6px 10px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            padding: 10px;
            border-bottom: 1px solid #eee;
            text-align: left;
          }
          .status {
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
          }
          .status.pending {
            background-color: #fff4e5;
            color: #d9831f;
          }
          .status.completed {
            background-color: #e3fcef;
            color: #3f9d6b;
          }
          .action-icons span {
            margin-right: 10px;
            cursor: pointer;
          }
          .lead-detail {
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }
        `}
      </style>

      {!viewingLead ? (
        <>
          <div className="dashboard-header">
            <h2 style={{ margin: "0" }}>Leads</h2>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select>
              <option>Change Status</option>
              <option value="Completed">Mark as Completed</option>
              <option value="Pending">Mark as Pending</option>
            </select>
            <button>Filter</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectedLeads.length === leads.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Lead Name</th>
                <th>Email ID</th>
                <th>Contact No.</th>
                <th>Coupon Code</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => handleSelect(lead.id)}
                    />
                  </td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.contact}</td>
                  <td>{lead.coupon}</td>
                  <td>
                    <span className={`status ${lead.status.toLowerCase()}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="action-icons">
                    <span title="View Profile" onClick={() => setViewingLead(lead)}>
                      👤
                    </span>
                    <span title="Send follow-up message">✉️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="lead-detail">
          <button onClick={() => setViewingLead(null)} style={{ marginBottom: "10px" }}>
            ← Back
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#e3ecfd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
              }}
            >
              👤
            </div>
            <div>
              <h3 style={{ margin: 0 }}>{viewingLead.name}</h3>
              <p style={{ margin: "5px 0" }}>
                📧 {viewingLead.email} &nbsp;&nbsp; 📞 {viewingLead.contact}
              </p>
            </div>
            <div style={{ marginLeft: "auto", fontSize: "20px" }}>
              <span title="Send message">💬</span>&nbsp;&nbsp;
              <span title="Send email">✉️</span>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label>Change Status</label>
            <br />
            <select
              value={viewingLead.status}
              onChange={(e) => handleChangeStatus(viewingLead.id, e.target.value)}
              style={{ padding: "8px", marginTop: "5px" }}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsDashboard;
