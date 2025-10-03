import React from 'react';
import './Events.css';

const Events = () => (
  <div id="eventsPage" className="page">
    <div className="detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => window.history.back()}>← Back to Home</button>
        <h1 className="page-title">Events & Activities</h1>
        <div className="detail-card">
          <h3>Upcoming Events</h3>
          <div className="event-item">
            <div className="event-name">Summer Music Festival</div>
            <div className="event-details">July 15, 2024 • Downtown Arena • $45-$120</div>
          </div>
          <div className="event-item">
            <div className="event-name">Food & Wine Fair</div>
            <div className="event-details">July 18, 2024 • City Park • Free Entry</div>
          </div>
          <div className="event-item">
            <div className="event-name">Art Gallery Night</div>
            <div className="event-details">July 20, 2024 • Museum District • $25</div>
          </div>
          <div className="event-item">
            <div className="event-name">Beach Carnival</div>
            <div className="event-details">July 22, 2024 • Seaside Promenade • $15</div>
          </div>
        </div>
        <div className="detail-card">
          <h3>Popular Attractions</h3>
          <div className="info-row">
            <span>Historical Museum</span>
            <span style={{ color: '#FFD700' }}>★★★★★</span>
          </div>
          <div className="info-row">
            <span>City Zoo</span>
            <span style={{ color: '#FFD700' }}>★★★★☆</span>
          </div>
          <div className="info-row">
            <span>Adventure Park</span>
            <span style={{ color: '#FFD700' }}>★★★★★</span>
          </div>
          <div className="info-row">
            <span>Local Market</span>
            <span style={{ color: '#FFD700' }}>★★★★☆</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Events;
