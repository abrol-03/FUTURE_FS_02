import { useEffect, useState } from "react";
import API from "../services/api";

function LeadList() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    try {
      const res = await API.get("/leads");
      setLeads(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateStatus = async (id, currentStatus) => {
    let newStatus = "New";

    if (currentStatus === "New") {
      newStatus = "Contacted";
    } else if (currentStatus === "Contacted") {
      newStatus = "Converted";
    }

    await API.put(`/leads/${id}`, {
      status: newStatus,
    });

    fetchLeads();
  };

  const deleteLead = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmDelete) return;

    await API.delete(`/leads/${id}`);

    fetchLeads();
  };

  return (
    <div>
      <h2 className="total">
        Total Leads: {leads.length}
      </h2>

      {leads.map((lead) => (
        <div key={lead._id} className="card">
          <h3>{lead.name}</h3>

          <p>
            <strong>Email:</strong> {lead.email}
          </p>

          <p>
            <strong>Source:</strong> {lead.source}
          </p>

          <p
            className={
              lead.status === "New"
                ? "status-new"
                : lead.status === "Contacted"
                ? "status-contacted"
                : "status-converted"
            }
          >
            Status: {lead.status}
          </p>

          <p>
            <strong>Notes:</strong> {lead.notes}
          </p>

          <div className="action-buttons">
            <button
              className="update-btn"
              onClick={() =>
                updateStatus(lead._id, lead.status)
              }
            >
              Update Status
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteLead(lead._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeadList;