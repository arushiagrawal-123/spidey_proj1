import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import './AnimatedCarousel.css';

const slides = [
  {
    className: 'slide1',
    title: 'Welcome to the Grand Tour',
    subtitle: 'Where every journey becomes a spectacular adventure',
  },
  {
    className: 'slide2',
    title: 'AI-Powered Planning',
    subtitle: 'Smart routes, weather forecasts, and amazing events',
  },
  {
    className: 'slide3',
    title: 'Your Perfect Journey Awaits',
    subtitle: 'Let the Ringmaster guide your adventure',
  },
];

const AnimatedCarousel = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    animate({
      targets: trackRef.current,
      translateX: -current * 100 + '%',
      duration: 600,
      easing: 'easeInOutQuad',
    });
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <button className="carousel-arrow arrow-left" onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}>‹</button>
      <button className="carousel-arrow arrow-right" onClick={() => setCurrent((current + 1) % slides.length)}>›</button>
      <div className="carousel-track" ref={trackRef} style={{ display: 'flex', height: '100%' }}>
        {slides.map((slide, idx) => (
          <div key={idx} className={`carousel-slide ${slide.className}`} style={{ minWidth: '100%', height: '100%', position: 'relative' }}>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        {slides.map((_, idx) => (
          <span key={idx} className={`carousel-dot${current === idx ? ' active' : ''}`} onClick={() => setCurrent(idx)}></span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCarousel;
