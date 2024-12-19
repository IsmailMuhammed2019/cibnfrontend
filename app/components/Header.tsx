"use client"; // Add this directive at the top

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import '../styles/Header.css'; // Import the CSS file

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
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/facebook.svg" alt="Facebook" className="iconssizes" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/twitter.svg" alt="Twitter" className="iconssizes" />
          </a>
          <a href="https://www.linkedin.com/in/cibnigeria?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/linkedln.svg" alt="LinkedIn" className="iconssizes" />
          </a>
          <a href="https://youtube.com/@thecibn?feature=shared" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/youtube.svg" alt="YouTube" className="iconssizes" />
          </a>
          <button className="header-button">Login</button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-container">
      <Link href="/"><div className="logo">
          <img src="/imgs/logo.png" alt="Logo" className="logo-image" />
          <div className="logo-text">
            <span>The Chartered Institute</span><br />
            <span>Of Bankers Of Nigeria</span>
          </div>
        </div></Link>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link href="/pages/theinstitute">The Institute</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
            </li>
            <li>
              <Link href="/membership">Membership</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
            </li>
            <li>
              <Link href="/capacity-building">Capacity Building & Certification</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
            </li>
            <li>
              <Link href="/learning">Learning</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
            </li>
            <li>
              <Link href="/resource-hub">Resource Hub</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
            </li>
            <li>
              <Link href="/publications">Publication</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/job-portal">Job Portal</Link>
            </li>
          </ul>
        </nav>
        <button className="join-button">Join CIBN</button>
      </div>
    </header>
  );
}

export default Header;