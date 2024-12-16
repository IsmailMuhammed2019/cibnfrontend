"use client"; // Add this directive at the top

import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-info">
          <img src="/imgs/phone.svg" alt="Phone" style={{ marginRight: '10px' }} className="iconssizes" />
          <span>0700-DIAL-CIBN</span>
          <img src="/imgs/email.svg" alt="Email" style={{ marginLeft: '20px', marginRight: '10px'}} className="iconssizes" />
          <span>cibn@cibn.org</span>
        </div>
        <div className="header-info">
          <span>Connect with us:</span>
          <img src="/imgs/facebook.svg" alt="Facebook" className="iconssizes" style={{ marginLeft: '10px', marginRight: '5px' }} />
          <img src="/imgs/twitter.svg" alt="Twitter" className="iconssizes" style={{ marginLeft: '5px', marginRight: '5px' }} />
          <img src="/imgs/linkedln.svg" alt="LinkedIn" className="iconssizes" style={{ marginLeft: '5px', marginRight: '5px' }} />
          <img src="/imgs/youtube.svg" alt="YouTube" style={{ marginLeft: '5px' }} />
          <button className="header-button">Login</button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-container">
        <div className="logo">
          <img src="/imgs/logo.png" alt="Logo" className="logo-image" />
          <div className="logo-text">
            <span>The Chartered Institute</span><br/>
            <span>Of Bankers Of Nigeria</span>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            {['The Institute', 'Membership', 'Capacity Building & Certification', 'Learning', 'Resource Hub', 'Publication'].map((item) => (
              <li key={item}>
                {item} <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
              </li>
            ))}
            <li>
              Events 
            </li>
            <li>
              Job Portal
            </li>
          </ul>
        </nav>
        <button className="join-button">Join CIBN</button>
      </div>
    </header>
  )
}

export default Header;