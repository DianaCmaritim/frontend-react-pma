import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
//import RegistrationForm from "./components/RegistrationForm";

function LandingPage() {
  return (
    <div className="landing">
      <h1>DEE'S PROJECT MANAGEMENT</h1>
        {/* <Link to="/projects">View Projects</Link>*/}

        <Link to="/RegistrationForm">SignUp</Link>
        <Link to="/LoginForm">Login</Link>
        <Link to="/create-project">Create a New Project</Link>
    </div>
  );
}

export default LandingPage;