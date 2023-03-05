import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing">
      <h1>Welcome to the Project Management System</h1>
        <Link to="/projects">View Projects</Link>
        <Link to="/create-project">Create a New Project</Link>
    </div>
  );
}

export default LandingPage;