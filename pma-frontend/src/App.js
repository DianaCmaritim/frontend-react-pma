
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element = {<LandingPage />}/>
          <Route path="/projects" element = {<Projects />}/>
          <Route path="/create-project" element = {<CreateProject />}/>
          <Route path="/RegistrationForm" element = {<RegistrationForm />}/>
          <Route path="/LoginForm" element = {<LoginForm />}/>
          

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;