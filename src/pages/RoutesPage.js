import React from 'react';
import './RoutesPage.css';

const RoutesPage = () => (
  <div id="routesPage" className="page">
    <div className="detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => window.history.back()}>← Back to Home</button>
        <h1 className="page-title">Smart Routes</h1>
        <div className="detail-card">
          <h3>Route Information</h3>
          <div className="info-row">
            <span>Distance</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>450 km</span>
          </div>
          <div className="info-row">
            <span>Duration</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>5h 30m</span>
          </div>
          <div className="info-row">
            <span>Mode</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Car</span>
          </div>
          <div className="info-row">
            <span>Traffic</span>
            <span style={{ color: '#4ECDC4', fontWeight: 'bold' }}>Light</span>
          </div>
        </div>
        <div className="detail-card">
          <h3>Alternative Routes</h3>
          <div className="info-row">
            <span>Via Highway</span>
            <span style={{ color: '#FFD700' }}>420 km • 4h 50m</span>
          </div>
          <div className="info-row">
            <span>Scenic Route</span>
            <span style={{ color: '#FFD700' }}>480 km • 6h 15m</span>
          </div>
          <div className="info-row">
            <span>Train</span>
            <span style={{ color: '#FFD700' }}>450 km • 4h 30m</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RoutesPage;
