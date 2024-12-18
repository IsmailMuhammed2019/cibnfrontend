"use client"; // Add this directive at the top

// app/components/Carousel.js
import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css'; // Import the CSS file for styling

const images = [
  '/imgs/1.png',
  '/imgs/2.png',
  '/imgs/3.png',
  '/imgs/4.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        <div className="carousel-controls">
          <button className="carousel-button left" onClick={prevSlide}>
            &#10094; {/* Left chevron */}
          </button>
          <button className="carousel-button right" onClick={nextSlide}>
            &#10095; {/* Right chevron */}
          </button>
        </div>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;