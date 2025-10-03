import React from 'react';
import './Budget.css';
import BudgetChart from '../components/BudgetChart';

const Budget = () => (
  <div id="budgetPage" className="page">
    <div className="detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => window.history.back()}>← Back to Home</button>
        <h1 className="page-title">Budget Estimate</h1>
        <div className="detail-card">
          <h3>Cost Breakdown</h3>
          <div style={{ marginBottom: '20px' }}>
            <BudgetChart />
          </div>
          <div className="info-row">
            <span>Transportation</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>$200</span>
          </div>
          <div className="info-row">
            <span>Accommodation</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>$400</span>
          </div>
          <div className="info-row">
            <span>Food & Dining</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>$250</span>
          </div>
          <div className="info-row">
            <span>Activities</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>$150</span>
          </div>
          <div className="info-row" style={{ borderTop: '2px solid #FFD700', marginTop: 10, paddingTop: 15 }}>
            <span style={{ fontWeight: 'bold', color: '#FFD700', fontSize: '1.2em' }}>Total</span>
            <span style={{ fontWeight: 'bold', color: '#FFD700', fontSize: '1.2em' }}>$1,000</span>
          </div>
        </div>
        <div className="detail-card">
          <h3>Budget Tips</h3>
          <p style={{ color: '#ddd', lineHeight: 1.8 }}>
            💡 Book accommodations 2 months in advance for 20% savings<br />
            💡 Travel during off-peak season for better deals<br />
            💡 Use public transport to save on transportation costs<br />
            💡 Look for combo deals on activities and attractions
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Budget;
