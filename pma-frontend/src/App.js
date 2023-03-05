
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element = {<LandingPage />}/>
          <Route path="/projects" element = {<Projects />}/>
          <Route path="/create-project" element = {<CreateProject />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;