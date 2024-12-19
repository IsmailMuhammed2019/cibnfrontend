"use client"; // Add this directive at the top

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import '../styles/Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const [isInstituteOpen, setIsInstituteOpen] = useState(false); // State for "The Institute" section

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInstituteMenu = () => {
    setIsInstituteOpen(!isInstituteOpen);
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
          <Link href={'/pages/login'}><button className="header-button">Login</button></Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-container">
        <Link href="/">
          <div className="logo">
            <img src="/imgs/logo.png" alt="Logo" className="logo-image" />
            <div className="logo-text">
              <span>The Chartered Institute</span><br />
              <span>Of Bankers Of Nigeria</span>
            </div>
          </div>
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link href="/pages/theinstitute">The Institute</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" onClick={toggleInstituteMenu} />
            </li>
            <li>
              <Link href="/pages/membership">Membership</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" />
            </li>
            <li>
              <Link href="/pages/capacitybuildingandcertification">Capacity Building & Certification</Link>
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
        <Link href={'/pages/signup'}><button className="join-button">Join CIBN</button></Link>
      </div>

      {/* Institute Menu Section - Moved Outside Header */}
      {isInstituteOpen && (
        <div className="institute-menu">
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>CIBN</h4>
          <Link href="/pages/theinstitute"><span>Corporate Information</span></Link>
          <Link href="/pages/theinstitute"><span>Vision & Core Values</span></Link>
          <Link href="/pages/theinstitute"><span>Chartered Status & Membership</span></Link>
          <Link href="/pages/theinstitute"><span>Principal Responsibilities & Objectives</span></Link>
          <Link href="/pages/theinstitute"><span>Ethics & Professionalism</span></Link>
          <Link href="/pages/theinstitute"><span>CIBN Codes, Act, Rules & Regulations</span></Link>
          <Link href="/pages/theinstitute"><span>CIBN Anthem</span></Link>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>Officers</h4>
          <Link href="/pages/theinstitute"><span>Organizational Structure</span></Link>
          <Link href="/pages/theinstitute"><span>Members of Governing Council</span></Link>
          <Link href="/pages/theinstitute"><span>Office Holders</span></Link>
          <Link href="/pages/theinstitute"><span>Executive Management</span></Link>
          <Link href="/pages/theinstitute"><span>Past Presidents & Registrars</span></Link>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>Annex</h4>
          <Link href="/pages/theinstitute"><span>Subsidiaries</span></Link>
          <Link href="/pages/theinstitute"><span>Affiliations</span></Link>
          <Link href="/pages/theinstitute"><span>Branch Directory</span></Link>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>Others</h4>
          <Link href="/pages/theinstitute"><span>Attestation Form</span></Link>
          <Link href="/pages/theinstitute"><span>CIBN Whistleblowing Policy</span></Link>
          <Link href="/pages/theinstitute"><span>Photo Gallery</span></Link>
        </div>
      </div>
      )}
    </header>
  );
}

export default Header;