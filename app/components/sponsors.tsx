"use client"
// app/components/Sponsors.js
import React, { useEffect, useState } from 'react';
import './Sponsors.css'; // Import the CSS file for styling

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

    const nextLogos = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - logosToShow + 1));
    };

    const prevLogos = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - logosToShow + 1)) % (images.length - logosToShow + 1));
    };

    return (
        <div className="sponsors-container">
            <div className="sponsors-controls">
                <button className="sponsor-control left" onClick={prevLogos}>&#10094;</button>
                <div className="sponsors-logos">
                    {images.slice(currentIndex, currentIndex + logosToShow).map((logo, index) => (
                        <img key={index} src={`/imgs/${logo}`} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
                    ))}
                </div>
                <button className="sponsor-control right" onClick={nextLogos}>&#10095;</button>
            </div>
        </div>
    );
};

export default Sponsors;