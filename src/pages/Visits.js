import React from 'react';
import './Visits.css';

const Visits = () => (
  <div id="visitsPage" className="page">
    <div className="visits-container">
      <div className="container">
        <h1 className="page-title">Your Travel History</h1>
        <div id="statsSection" style={{ display: 'none' }}>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🗺️</div>
              <div className="stat-value" id="totalTrips">0</div>
              <div className="stat-label">Total Trips</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-value" id="totalSpent">$0</div>
              <div className="stat-label">Total Spent</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-value" id="totalDays">0</div>
              <div className="stat-label">Days Traveled</div>
            </div>
          </div>
          <div className="trips-grid" id="tripsGrid"></div>
        </div>
        <div id="emptyState" className="empty-state">
          <div className="empty-state-icon">✈️</div>
          <div className="empty-state-text">No trips yet. Start planning your first adventure!</div>
          <button style={{ width: 'auto', padding: '15px 40px' }}>Plan a Trip</button>
        </div>
      </div>
    </div>
  </div>
);

export default Visits;
