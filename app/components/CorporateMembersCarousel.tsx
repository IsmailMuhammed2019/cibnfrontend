"use client"

import React, { useEffect, useState } from 'react';
import './CorporateMembersCarousel.css'; // Create a CSS file for styling

const images: string[] = [
    'gtb.png', 'access.png', 'aeb.png', 'cibn.png', 'citi.png',
    'coronation.png', 'fcmb.png', 'federal.png', 'fsb.png', 'fsdh.png',
    'heritage.png', 'itantrust.png', 'jaiz.png', 'keystone.png', 'lotus.png',
    'ndic.png', 'nova.png', 'nova1.png', 'parallex.png', 'providus.png',
    'rand.png', 'signature.png', 'stanbic.png', 'standard.png', 'strip.png',
    'suntrust.png', 'taj.png', 'uba.png', 'union.png', 'unity.png',
    'wema.png', 'weve.png'
];

const CorporateMembersCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="members-carousel-container">
            <div className="members-carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="members-carousel-item" key={index}>
                        <img src={`/imgs/${image}`} alt={`Corporate Member ${index + 1}`} className="members-carousel-image" />
                    </div>
                ))}
            </div>
            <button className="members-carousel-button left" onClick={prevImage}>❮</button>
            <button className="members-carousel-button right" onClick={nextImage}>❯</button>
        </div>
    );
};

export default CorporateMembersCarousel;