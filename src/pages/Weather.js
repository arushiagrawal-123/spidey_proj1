import React from 'react';
import './Weather.css';
import WeatherChart from '../components/WeatherChart';

const Weather = () => (
  <div id="weatherPage" className="page">
    <div className="detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => window.history.back()}>← Back to Home</button>
        <h1 className="page-title">Weather Forecast</h1>
        <div className="detail-card">
          <h3>Current Weather</h3>
          <div className="info-row">
            <span>Temperature</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>25°C</span>
          </div>
          <div className="info-row">
            <span>Condition</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>Sunny</span>
          </div>
          <div className="info-row">
            <span>Humidity</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>60%</span>
          </div>
          <div className="info-row">
            <span>Wind Speed</span>
            <span style={{ color: '#FFD700', fontWeight: 'bold' }}>12 km/h</span>
          </div>
        </div>
        <div className="detail-card">
          <h3>5-Day Forecast</h3>
          <div style={{ marginBottom: '20px' }}>
            <WeatherChart />
          </div>
          <div className="info-row">
            <span>Monday</span>
            <span style={{ color: '#FFD700' }}>☀️ 26°C</span>
          </div>
          <div className="info-row">
            <span>Tuesday</span>
            <span style={{ color: '#FFD700' }}>⛅ 24°C</span>
          </div>
          <div className="info-row">
            <span>Wednesday</span>
            <span style={{ color: '#FFD700' }}>🌧️ 22°C</span>
          </div>
          <div className="info-row">
            <span>Thursday</span>
            <span style={{ color: '#FFD700' }}>☀️ 25°C</span>
          </div>
          <div className="info-row">
            <span>Friday</span>
            <span style={{ color: '#FFD700' }}>☀️ 27°C</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Weather;
