import React from 'react';
import './Home.css';
import AnimatedCarousel from '../components/AnimatedCarousel';
import FeatureCards from '../components/FeatureCards';

const Home = () => {
  return (
    <div id="homePage" className="page active">
      <AnimatedCarousel />
      <div className="container">
        <header>
          <h1>SpiderRoute</h1>
          <p className="subtitle">The Ringmaster's AI Travel Planner</p>
        </header>
        <div className="input-section">
          {/* Ferris wheel and input card */}
        </div>
        <FeatureCards />
      </div>
    </div>
  );
};

export default Home;
