import React from "react";
import { Link } from "react-router-dom";
import './navigation.css'

const Navigation = () => {
  return (
    <header className="navigation">
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link>Gallery</Link></li>
            <li><Link to="/projects">My project</Link></li>
        </ul>
      </nav>
    </header>
    // navigation
  );
};

export default Navigation;
