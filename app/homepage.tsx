// app/homepage.tsx
import React from 'react';
import './homepage.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel'; // Import the Carousel component

function Homepage() {
  return (
    <div className="wrapper">
      <Header />
      <Carousel /> 
      
      {/* New Membership Section Below Carousel */}
      <div className="membership-section">
        <div className="membership-content">
          <div className="membership-container">
            <h2 className="membership-title">Become a Member</h2>
            <p className="membership-subtext">
              CIBN, committed to equipping our members with the knowledge and skill set that will help them gain competitive advantage in a dynamic banking industry whose competitiveness echoes the necessity of unparalleled professionalism and high ethical standards.
            </p>
            <div className="membership-buttons">
              <button className="join-button">Join Today</button>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;