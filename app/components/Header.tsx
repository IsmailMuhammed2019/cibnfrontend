"use client"; // Add this directive at the top

import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link'; // Import Link from Next.js
import '../styles/Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const [isInstituteOpen, setIsInstituteOpen] = useState(false); // State for "The Institute" section
  const [ismembershipOpen, setIsMembershipOpen] = useState(false); // State for "Membership" section
  const [isCapacityBuildingOpen, setIsCapacityBuildingOpen] = useState(false); // State for "Capacity Building & Certification" section
  const [isLearningOpen, setIsLearningOpen] = useState(false); // State for "Learning" section
  const [isResourceHubOpen, setIsResourceHubOpen] = useState(false); // State for "Resource Hub" section
  const [isPublicationOpen, setIsPublicationOpen] = useState(false); // State for "Publication" section
  const headerRef = useRef(null); // Ref for the header

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInstituteMenu = () => {
    setIsInstituteOpen(!isInstituteOpen);
  };

  const toggleMembershipMenu = () => {
    setIsMembershipOpen(!ismembershipOpen);
  };

  const toggleCapacityBuildingMenu = () => {
    setIsCapacityBuildingOpen(!isCapacityBuildingOpen);
  };

  const toggleLearningMenu = () => {
    setIsLearningOpen(!isLearningOpen);
  };

  const toggleResourceHubMenu = () => {
    setIsResourceHubOpen(!isResourceHubOpen);
  };

  const togglePublicationMenu = () => {
    setIsPublicationOpen(!isPublicationOpen);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsInstituteOpen(false);
        setIsMembershipOpen(false);
        setIsCapacityBuildingOpen(false);
        setIsLearningOpen(false);
        setIsResourceHubOpen(false);
        setIsPublicationOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [headerRef]);

  return (
    <header ref={headerRef}>
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
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" onClick={toggleMembershipMenu} />
            </li>
            <li>
              <Link href="/pages/capacitybuildingandcertification">Capacity Building & Certification</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" onClick={toggleCapacityBuildingMenu} />
            </li>
            <li>
              <Link href="/pages/learning">Learning</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" onClick={toggleLearningMenu} />
            </li>
            <li>
              <Link href="/pages/resourcehub">Resource Hub</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" onClick={toggleResourceHubMenu} />
            </li>
            <li>
              <Link href="/pages/publication">Publication</Link>
              <img src="/imgs/dropdown.svg" alt="Dropdown" className="menu-icon" onClick={togglePublicationMenu} />
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
      {/* Institute Menu Section - Moved Outside Header */}
      {ismembershipOpen && (
        <div className="membership-menu">
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>MememberShip</h4>
          <Link href="/pages/theinstitute"><span>Overview</span></Link>
          <Link href="/pages/theinstitute"><span>Individual Members</span></Link>
          <Link href="/pages/theinstitute"><span>Coperate Members</span></Link>
          <Link href="/pages/theinstitute"><span>Benefits of Membership</span></Link>

        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>MANAGE YOUR MEMBERSHIP</h4>
          <Link href="/pages/theinstitute"><span>Subscription Fees and Renewal</span></Link>
 
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>APPLY FOR FELLOWSHIP</h4>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>PRACTICE LICENSE</h4>
          <Link href="/pages/theinstitute"><span>Overview</span></Link>
          <Link href="/pages/theinstitute"><span>Policy, Rules and Regulation</span></Link>
          <Link href="/pages/theinstitute"><span></span></Link>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>FIND A BANKER</h4>
          <Link href="/pages/theinstitute"><span>Directory of CIBN Individual Members</span></Link>
          <Link href="/pages/theinstitute"><span>Bank Directory</span></Link>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>MEMBERSHIP LOGIN </h4>
        </div>
      </div>
      )}

      {/* Examinations Menu Section */}
      {isCapacityBuildingOpen && (
        <div className="capacity-building-menu">
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>EXAMINATIONS</h4>
            <Link href="/pages/examinations-overview"><span>Overview</span></Link>
            <Link href="/pages/associateship-examination"><span>Associateship (ACIB) Examination</span></Link>
            <Link href="/pages/micro-finance-certification"><span>Micro-Finance Certification Program (MCP)</span></Link>
            <Link href="/pages/certification-programmes"><span>Certification Programmes</span></Link>
            <Link href="/pages/examination-forms"><span>Examination Forms</span></Link>
            <Link href="/pages/examiners-report"><span>Examiner's Report</span></Link>
            <Link href="/pages/examination-rules"><span>Examination Rules and Regulations</span></Link>
            <Link href="/pages/examination-centres"><span>Examination Centres</span></Link>
            <Link href="/pages/examination-time-table"><span>Examination Time Table</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>EXEMPTIONS</h4>
            <Link href="/pages/exemptions-guidelines"><span>Exemptions Guidelines and Fees</span></Link>
            <Link href="/pages/exemption-accredited-academies"><span>Exemption For Accredited Bank Academies</span></Link>
            <Link href="/pages/exemption-policy"><span>Exemption Policy</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>STUDENT AFFAIRS</h4>
            <Link href="/pages/examination-appeal-process"><span>Examination Appeal Process</span></Link>
            <Link href="/pages/transcripts-statements"><span>Issuance of Transcripts and Statements of Result</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>CHARTERED BANKER MBA</h4>
            {/* Add links as needed */}
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>E-PAYMENT CERTIFICATION PROGRAMME</h4>
            {/* Add links as needed */}
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>COMPETENCY FRAMEWORK</h4>
            <Link href="/pages/introduction-to-cf"><span>Introduction To CF</span></Link>
            <Link href="/pages/accredited-institutions"><span>List of Accredited Institutions</span></Link>
            <Link href="/pages/linkage-institutions"><span>List of Linkage Institutions</span></Link>
            <Link href="/pages/accredited-tuition-centres"><span>List of Accredited Tuition Centres</span></Link>
            <Link href="/pages/accredited-bank-academies"><span>List of Accredited Bank Academies</span></Link>
            <Link href="/pages/etsp-providers"><span>Accredited Educational Training Service Providers (ETSPs)</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>LOCAL AND INTERNATIONAL COLLABORATIONS</h4>
            {/* Add links as needed */}
          </div>
        </div>
      )}


{isLearningOpen && (
        <div className="learning-menu">
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>E-LEARNING</h4>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>CCPD</h4>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>LIBRARY</h4>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>CONFERENCES </h4>
        </div>
      </div>
      )}


      {/* Resource Library Menu Section */}
      {isResourceHubOpen && (
        <div className="resource-library-menu">
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>RESOURCE LIBRARY</h4>
            <Link href="/pages/journal-of-banking"><span>Journal Of Banking</span></Link>
            <Link href="/pages/nigerian-bankers"><span>Nigerian Bankers</span></Link>
            <Link href="/pages/cibn-communiques"><span>CIBN Communiques</span></Link>
            <Link href="/pages/cibn-codes-downloads"><span>CIBN Codes, Acts, Rules Downloads</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>ANNUAL REPORT</h4>
            <Link href="/pages/institutes-report"><span>Institute's Report</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>QUESTIONNAIRE</h4>
            <Link href="/pages/human-resources"><span>Human Resources and MDs / Examiners</span></Link>
            <Link href="/pages/others"><span>Others</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>CIBN BOOK SHOP</h4>
            <Link href="/pages/book-search"><span>Book Search</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>DOWNLOADS</h4>
            {/* Add links as needed */}
          </div>
        </div>
      )}
      {isPublicationOpen && (
        <div className="publication-menu">
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>NEWS</h4>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>PRESS RELEASES</h4>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>SPEECHE</h4>
        </div>
        <div className="menu-section">
          <h4 style={{ color: 'green' }}>ANNOUNCEMENTS </h4>
        </div>
      </div>
      )}
    </header>
  );
}

export default Header;