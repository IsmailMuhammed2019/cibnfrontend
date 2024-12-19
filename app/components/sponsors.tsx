"use client"
// app/components/Sponsors.js
import React, { useEffect, useState } from 'react';
import '../styles/Sponsors.css'; // Import the CSS file for styling

const images = [
    'gtb.png', 'access.png', 'aeb.png', 'cibn.png', 'citi.png',
    'coronation.png', 'fcmb.png', 'fedral.png', 'fsb.png', 'fsdh.png',
    'heritage.png', 'itantrust.png', 'jaiz.png', 'keyston.png', 'lotus.png',
    'ndic.png', 'nova.png', 'nova1.png', 'parallex.png', 'providus.png',
    'rand.png', 'signature.png', 'stanbic.png', 'standard.png', 'strip.png',
    'suntrust.png', 'taj.png', 'uba.png', 'union.png', 'unity.png',
    'wema.png', 'weve.png'
];

const Sponsors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const logosToShow = 4; // Number of logos to show at a time

    // Function to move to the next set of logos
    const nextLogos = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - logosToShow + 1));
    };

    // Automatically move logos every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextLogos, 3000); // Change logo every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="sponsors">
      <h1 className="apptitle1">Corporate Members</h1>
      <p className="appsubtitle1">Meet our corporate members</p>
        <div className="sponsors-container">
            <div className="sponsors-controls">
                <button className="sponsor-control left" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - logosToShow + 1)) % (images.length - logosToShow + 1))}>&#10094;</button>
                <div className="sponsors-logos">
                    {images.slice(currentIndex, currentIndex + logosToShow).map((logo, index) => (
                        <img key={index} src={`/imgs/${logo}`} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
                    ))}
                </div>
                <button className="sponsor-control right" onClick={nextLogos}>&#10095;</button>
            </div>
        </div>
        </div>
    );
};

export default Sponsors;