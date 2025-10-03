import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h3>SpiderRoute</h3>
        <p>The Ringmaster's AI Travel Planner</p>
        <p>Your ultimate companion for intelligent travel planning with AI-powered insights.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="/">Home</a>
        <a href="/visits">Previous Visits</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-section">
        <h3>Team Info</h3>
        <p><strong>EAM ID:</strong> 788</p>
        <div className="team-info">
          <p>Harshvardhan Singh Chauhan (20244075, ECE)</p>
          <p>Arushi Agrawal (20244039, ECE)</p>
          <p>Harsh Choudhary (20244071, ECE)</p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 SpiderRoute - The Ringmaster's Roundtable. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
