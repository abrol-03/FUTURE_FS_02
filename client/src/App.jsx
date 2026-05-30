import { useState } from "react";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <Login setIsLoggedIn={setIsLoggedIn} />
    );
  }

  return (
    <div className="container">
      <button
        onClick={handleLogout}
        className="logout-btn"
      >
        Logout
      </button>

      <h1>CRM Dashboard</h1>
      <p>Lead Management System</p>

      <LeadForm />
      <LeadList />
    </div>
  );
}

export default App;