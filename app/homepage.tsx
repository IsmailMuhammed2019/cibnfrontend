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
      
      <div className='bigImage'>
        <div className='prof'>
          <img src="/imgs/prof.jpg" alt="Profile" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '20px' }} />
        </div>
        <div className='others'>
          <div className='div1'>
            <h1 className='title1'>Message from the President/
            Chairman of the Council</h1>
            <h2 className='subtitle'>Professor Pius Deji Olanrewaju, Ph.D, FCIB</h2>
            <p className='pagecode'>You are welcome to the official website of The Chartered Institute of Bankers of Nigeria (CIBN)...</p>

            <button className='readmore'>Read More ></button>
          </div>
          <div className='div2'>
          <h1 className='title1'>2024 Calendar of Activities</h1>
            <h2 className='subtitle'>Our program and training courses are fashioned to sharpen your skills and broaden your knowledge of the Nigerian banking practices.</h2>

            <button className='readmore'>Read More ></button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;