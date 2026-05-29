import { useState } from "react";
import API from "../services/api";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/leads", formData);

      alert("Lead Added Successfully");

      window.location.reload();

    } catch (error) {
      console.log(error);
    }

    setFormData({
      name: "",
      email: "",
      source: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="source"
        placeholder="Lead Source"
        value={formData.source}
        onChange={handleChange}
      />

      <input
        type="text"
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button className="add-btn" type="submit">
        Add Lead
      </button>
    </form>
  );
}

export default LeadForm;