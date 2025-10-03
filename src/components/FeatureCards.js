import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { animate } from 'animejs';
import './FeatureCards.css';

const features = [
  {
    className: 'weather',
    icon: '☁️',
    title: 'Weather Forecast',
    desc: "Know if it's sunny or stormy before you go!",
    route: '/weather',
  },
  {
    className: 'routes',
    icon: '🗺️',
    title: 'Smart Routes',
    desc: 'The quickest paths to fun and adventure!',
    route: '/routes',
  },
  {
    className: 'budget',
    icon: '💰',
    title: 'Cost Calculator',
    desc: 'Budget your circus tour like a pro!',
    route: '/budget',
  },
  {
    className: 'events',
    icon: '🎉',
    title: 'Event Finder',
    desc: 'Discover festivals and shows on your journey!',
    route: '/events',
  },
];

const FeatureCards = () => {
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    animate({
      targets: cardsRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      delay: animate.stagger(150),
      duration: 700,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <div className="results show">
      <h2 style={{ textAlign: 'center', color: '#FFD700', fontSize: '2.5em', marginBottom: 20 }}>
        Choose Your Adventure Feature
      </h2>
      <div className="feature-grid">
        {features.map((f, idx) => (
          <div
            key={f.title}
            className={`feature-card ${f.className}`}
            ref={el => (cardsRef.current[idx] = el)}
            onClick={() => navigate(f.route)}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
