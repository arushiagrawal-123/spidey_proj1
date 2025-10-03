import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <svg viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
          <span className="nav-logo-text">SpiderRoute</span>
        </Link>
        <div className="nav-links" id="navLinks">
          <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
          <Link to="/visits" className={`nav-link${location.pathname === '/visits' ? ' active' : ''}`}>Previous Visits</Link>
        </div>
        {/* Auth buttons and user info will be added here as React state */}
      </div>
    </nav>
  );
};

export default Navbar;
