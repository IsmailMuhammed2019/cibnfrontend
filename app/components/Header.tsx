"use client"; // Add this directive at the top

import React, { useState } from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-info">
          <img src="/imgs/phone.svg" alt="Phone" className="iconssizes" />
          <span className="contact-info">0700-DIAL-CIBN</span>
          <img src="/imgs/email.svg" alt="Email" className="iconssizes" />
          <span>cibn@cibn.org</span>
        </div>
        <div className="header-info">
          <span>Connect with us:</span>
          <img src="/imgs/facebook.svg" alt="Facebook" className="iconssizes" />
          <img src="/imgs/twitter.svg" alt="Twitter" className="iconssizes" />
          <img src="/imgs/linkedln.svg" alt="LinkedIn" className="iconssizes" />
          <img src="/imgs/youtube.svg" alt="YouTube" className="iconssizes" />
          <button className="header-button">Login</button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-container">
        <div className="logo">
          <img src="/imgs/logo.png" alt="Logo" className="logo-image" />
          <div className="logo-text">
            <span>The Chartered Institute</span><br />
            <span>Of Bankers Of Nigeria</span>
          </div>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {['The Institute', 'Membership', 'Capacity Building & Certification', 'Learning', 'Resource Hub', 'Publication'].map((item) => (
              <li key={item}>
                {item} <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
              </li>
            ))}
            <li>Events</li>
            <li>Job Portal</li>
          </ul>
        </nav>
        <button className="join-button">Join CIBN</button>
      </div>
    </header>
  )
}

export default Header;