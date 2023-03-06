import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import nav from "../img/nav.png"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/RegistrationForm">Signup</Link></li>
        <li><Link to="/LoginForm">Login</Link></li> */}
        <img src={nav} alt="My Logo" className="logo" />

      </ul>
    </nav>
  );
};

export default Navbar;
