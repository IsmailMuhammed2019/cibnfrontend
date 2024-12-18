"use client"
// app/homepage.tsx
import React from "react";
import "./homepage.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel"; // Import the Carousel component
import Sponsors from "./components/sponsors";



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
              CIBN, committed to equipping our members with the knowledge and
              skill set that will help them gain competitive advantage in a
              dynamic banking industry whose competitiveness echoes the
              necessity of unparalleled professionalism and high ethical
              standards.
            </p>
            <div className="membership-buttons">
              <button className="join-button">Join Today</button>
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bigImage">
        <div className="prof">
          <img
            src="/imgs/prof.jpg"
            alt="Profile"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        </div>
        <div className="others">
          <div className="div1">
            <h1 className="title1">
              Message from the President/ Chairman of the Council
            </h1>
            <h2 className="subtitle">
              Professor Pius Deji Olanrewaju, Ph.D, FCIB
            </h2>
            <p className="pagecode">
              You are welcome to the official website of The Chartered Institute
              of Bankers of Nigeria (CIBN)...
            </p>

            <button className="readmore">Read More &gt;</button>
          </div>
          <div className="div2">
            <h1 className="title1">2024 Calendar of Activities</h1>
            <p className="pagecode" style={{ marginTop: "20px" }}>
              Our program and training courses are fashioned to sharpen your
              skills and broaden your knowledge of the Nigerian banking
              practices.
            </p>
            <button className="readmore1">
              <span>Download Here</span>
              <img
                src="/imgs/download.svg"
                alt="Download"
                className="download-image"
              />
            </button>
          </div>
        </div>
      </div>

      {/* New Explore CIBN Section */}
      <div className="explore-container">
        <div className="explore-header">
          <h1 className="explore-title">Explore CIBN</h1>
          <p className="explore-subtext">Explore more on what CIBN has to offer</p>
        </div>

        
    
        <div className="explore-content">
{/* Explore Section 1 */}
<div className="explore-section1">
            <div className="titleimage">
            <img src="/imgs/1.svg" alt="Bank Directory" className="explore-image" />
            </div>
            <div className="explore-text">
              <h2 className="title2">CIBN I-Portal</h2>
              <p>Every great enterprise started with an idea. Share your creative and innovative idea with us today. Ideas are welcome, share them here.</p>
            </div>
          </div>

          {/* Explore Section 1 */}
          <div className="explore-section1">
            <div className="titleimage">
            <img src="/imgs/2.svg" alt="Bank Directory" className="explore-image" />
            </div>
            <div className="explore-text">
              <h2 className="title2">Bank Directory</h2>
              <p>List of Nigerian banks and their contacts.</p>
            </div>
          </div>

          {/* Explore Section 2 */}
          
          <div className="explore-section1">
            <div className="titleimage">
            <img src="/imgs/3.svg" alt="CIBN Resource Hub" className="explore-image" />
            </div>
            <div className="explore-text">
              <h2 className="title2">CIBN Resource Hub</h2>
              <p>Industry experts’ views on topical issues in Banking, Insurance, Finance, etc.</p>
            </div>
          </div>

          {/* Explore Section 3 */}
          <div className="explore-section1">
            <div className="titleimage">
            <img src="/imgs/4.svg" alt="CIBN Mentoring" className="explore-image" />
            </div>
            <div className="explore-text">
              <h2 className="title2">CIBN Mentoring</h2>
              <p>Our mentoring programme provides opportunity for networking and bridge building.</p>
            </div>
          </div>

          {/* Explore Section 4 */}
          <div className="explore-section1">
            <div className="titleimage">
            <img src="/imgs/5.svg" alt="CIBN Centre for Financial Studies" className="explore-image" />
            </div>
            <div className="explore-text">
              <h2 className="title2">CIBN Centre for Financial Studies</h2>
              <p>Offering relevant research-based thought leadership for c-suite executives.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="downloadsection">
        <h1 className="apptitle">Introducing Our Mobile App</h1>
        <p className="appsubtitle">Register for your Exams and more with our app.</p>
        <div className="downloadapp">
            <div className="appimage">
              <img src="imgs/apps.png" alt="download " className="downloadimage" />
            </div>
            <div className="appbuttons">
              <img src="imgs/button1.png" alt="google button" className="buttonimages"/>
              <img src="imgs/button2.png" alt="apple button" className="buttonimages" />
            </div>
        </div>
      </div>

      <div className="announcement">
        <h1 className="apptitle1">The Latest from CIBN</h1>
        <p className="appsubtitle1">Explore more on what CIBN has to offer</p>

        <div className="annoucediv">
            <div className="annoucetext">
              <h1 className="annoucetitle">Announcement - Press Release</h1>
              <div className="annoucesubtext"><p>BANKERS SET TO EXAMINE DIGITAL ECONOMY … As CIBN Produces 962 new Chartered Bankers, Awards Certificates to 1,864 Graduands</p></div>

              <button className="annoucebutton">Read More &gt;</button>

            </div>
            <div className="annouceimg">
              <img src="/imgs/speakout.jpg" alt="speakout" />

            </div>
        </div>
        <div className="annoucediv1">
            
            <div className="annouceimg1">
              <img src="/imgs/exam.png" alt="speakout" />

            </div>
            <div className="annoucetext1">
              <h1 className="annoucetitle1">Examination Timetable</h1>
              <button className="annoucebutton1">View &gt;</button>

            </div>
        </div>

      </div>

      <div className="sponsors">
      <h1 className="apptitle1">Corporate Members</h1>
      <p className="appsubtitle1">Meet our corporate members</p>
      <Sponsors />

      </div>

     
      <Footer />
    </div>
  );
}

export default Homepage;
