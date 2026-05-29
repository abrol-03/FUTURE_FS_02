import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>CRM Dashboard</h1>
        <p>Lead Management System</p>
      </div>

      <LeadForm />

      <LeadList />
    </div>
  );
}

export default App;