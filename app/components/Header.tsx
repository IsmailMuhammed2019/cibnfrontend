'use client'; // Add this directive at the top

import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link'; // Import Link from Next.js
import '../styles/Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const [isInstituteOpen, setIsInstituteOpen] = useState(false); // State for "The Institute" section
  const [isMembershipOpen, setIsMembershipOpen] = useState(false); // State for "Membership" section
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
    setIsMembershipOpen(false);
    setIsCapacityBuildingOpen(false);
    setIsLearningOpen(false);
    setIsResourceHubOpen(false);
    setIsPublicationOpen(false);
  };

  const toggleMembershipMenu = () => {
    setIsMembershipOpen(!isMembershipOpen);
    setIsInstituteOpen(false);
    setIsCapacityBuildingOpen(false);
    setIsLearningOpen(false);
    setIsResourceHubOpen(false);
    setIsPublicationOpen(false);
  };

  const toggleCapacityBuildingMenu = () => {
    setIsCapacityBuildingOpen(!isCapacityBuildingOpen);
    setIsInstituteOpen(false);
    setIsMembershipOpen(false);
    setIsLearningOpen(false);
    setIsResourceHubOpen(false);
    setIsPublicationOpen(false);
  };

  const toggleLearningMenu = () => {
    setIsLearningOpen(!isLearningOpen);
    setIsInstituteOpen(false);
    setIsMembershipOpen(false);
    setIsCapacityBuildingOpen(false);
    setIsResourceHubOpen(false);
    setIsPublicationOpen(false);
  };

  const toggleResourceHubMenu = () => {
    setIsResourceHubOpen(!isResourceHubOpen);
    setIsInstituteOpen(false);
    setIsMembershipOpen(false);
    setIsCapacityBuildingOpen(false);
    setIsLearningOpen(false);
    setIsPublicationOpen(false);
  };

  const togglePublicationMenu = () => {
    setIsPublicationOpen(!isPublicationOpen);
    setIsInstituteOpen(false);
    setIsMembershipOpen(false);
    setIsCapacityBuildingOpen(false);
    setIsLearningOpen(false);
    setIsResourceHubOpen(false);
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
          <a href="https://portal.cibng.org/cb_login.asp">
            <button className="header-button">Login</button>
          </a>
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
        <a href="https://portal.cibng.org/cb_apply.asp">  Join CIBA</a>
      </div>

      {/* Institute Menu Section */}
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

      {/* Membership Menu Section */}
      {isMembershipOpen && (
        <div className="membership-menu">
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Membership</h4>
            <Link href="/pages/theinstitute"><span>Overview</span></Link>
            <Link href="/pages/theinstitute"><span>Individual Members</span></Link>
            <Link href="/pages/theinstitute"><span>Corporate Members</span></Link>
            <Link href="/pages/theinstitute"><span>Benefits of Membership</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Manage Your Membership</h4>
            <Link href="/pages/theinstitute"><span>Subscription Fees and Renewal</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Apply for Fellowship</h4>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Practice License</h4>
            <Link href="/pages/theinstitute"><span>Overview</span></Link>
            <Link href="/pages/theinstitute"><span>Policy, Rules and Regulation</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Find a Banker</h4>
            <Link href="/pages/theinstitute"><span>Directory of CIBN Individual Members</span></Link>
            <Link href="/pages/theinstitute"><span>Bank Directory</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Membership Login</h4>
          </div>
        </div>
      )}

      {/* Capacity Building Menu Section */}
      {isCapacityBuildingOpen && (
        <div className="capacity-building-menu">
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Examinations</h4>
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
            <h4 style={{ color: 'green' }}>Exemptions</h4>
            <Link href="/pages/exemptions-guidelines"><span>Exemptions Guidelines and Fees</span></Link>
            <Link href="/pages/exemption-accredited-academies"><span>Exemption For Accredited Bank Academies</span></Link>
            <Link href="/pages/exemption-policy"><span>Exemption Policy</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Student Affairs</h4>
            <Link href="/pages/examination-appeal-process"><span>Examination Appeal Process</span></Link>
            <Link href="/pages/transcripts-statements"><span>Issuance of Transcripts and Statements of Result</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Chartered Banker MBA</h4>
            {/* Add links as needed */}
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>E-Payment Certification Programme</h4>
            {/* Add links as needed */}
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Competency Framework</h4>
            <Link href="/pages/introduction-to-cf"><span>Introduction To CF</span></Link>
            <Link href="/pages/accredited-institutions"><span>List of Accredited Institutions</span></Link>
            <Link href="/pages/linkage-institutions"><span>List of Linkage Institutions</span></Link>
            <Link href="/pages/accredited-tuition-centres"><span>List of Accredited Tuition Centres</span></Link>
            <Link href="/pages/accredited-bank-academies"><span>List of Accredited Bank Academies</span></Link>
            <Link href="/pages/etsp-providers"><span>Accredited Educational Training Service Providers (ETSPs)</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Local and International Collaborations</h4>
            {/* Add links as needed */}
          </div>
        </div>
      )}

      {/* Learning Menu Section */}
      {isLearningOpen && (
        <div className="learning-menu">
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>E-Learning</h4>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>CCPD</h4>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Library</h4>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Conferences</h4>
          </div>
        </div>
      )}

      {/* Resource Library Menu Section */}
      {isResourceHubOpen && (
        <div className="resource-library-menu">
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Resource Library</h4>
            <Link href="/pages/journal-of-banking"><span>Journal Of Banking</span></Link>
            <Link href="/pages/nigerian-bankers"><span>Nigerian Bankers</span></Link>
            <Link href="/pages/cibn-communiques"><span>CIBN Communiques</span></Link>
            <Link href="/pages/cibn-codes-downloads"><span>CIBN Codes, Acts, Rules Downloads</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Annual Report</h4>
            <Link href="/pages/institutes-report"><span>Institute's Report</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Questionnaire</h4>
            <Link href="/pages/human-resources"><span>Human Resources and MDs / Examiners</span></Link>
            <Link href="/pages/others"><span>Others</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>CIBN Book Shop</h4>
            <Link href="/pages/book-search"><span>Book Search</span></Link>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Downloads</h4>
            {/* Add links as needed */}
          </div>
        </div>
      )}

      {/* Publication Menu Section */}
      {isPublicationOpen && (
        <div className="publication-menu">
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>News</h4>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Press Releases</h4>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Speeches</h4>
          </div>
          <div className="menu-section">
            <h4 style={{ color: 'green' }}>Announcements</h4>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;