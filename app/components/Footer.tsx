import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column column-1">
          <img src="/imgs/logo.png" alt="Logo" className="footer-logo" />
          <h3 className="footer-heading">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <img src="/imgs/phone.svg" alt="Phone" className="iconssizes" />
              <span>0700-DIAL-CIBN</span>
            </div>
            <div className="contact-item">
              <img src="/imgs/email.svg" alt="Email" className="iconssizes" />
              <span>cibn@cibn.org</span>
            </div>
          </div>
          <h3 className="footer-heading">Connect with us</h3>
          <div className="social-icons">
          <a href="https://www.facebook.com/cibnigeria/" target="_blank" rel="noopener noreferrer">
                        <img src="/imgs/facebook.svg" alt="Facebook" className="iconssizes" />
                    </a>
                    <a href="https://x.com/cibnigeria/status/1845847106780528998" target="_blank" rel="noopener noreferrer">
                        <img src="/imgs/twitter.svg" alt="Twitter" className="iconssizes" />
                    </a>
                    <a href="https://www.linkedin.com/in/cibnigeria?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <img src="/imgs/linkedln.svg" alt="LinkedIn" className="iconssizes" />
                    </a>
                    <a href="https://youtube.com/@thecibn?feature=shared" target="_blank" rel="noopener noreferrer">
                        <img src="/imgs/youtube.svg" alt="YouTube" className="iconssizes" />
                    </a>
                    <a href="https://www.instagram.com/cibnigeria/" target="_blank" rel="noopener noreferrer">
                        <img src="/imgs/instagram.png" alt="Instagram" className="iconssizes" />
                    </a>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Using This Site</h3>
          <ul>
            <li>Data Protection Policy</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul>
            <li>CIBN Book Shop</li>
            <li>CIBN Faculty</li>
            <li>Competency Framework</li>
            <li>CIBN Mentoring</li>
            <li>CCPD Policy Framework</li>
            <li>Faculty to ACIB</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Info</h3>
          <ul>
            <li>Contact CIBN</li>
            <li>Practice Licence</li>
            <li>Advertising</li>
            <li>Attestation Form</li>
          </ul>
        </div>
      </div>
      <div className="footer-rights">
        © All rights reserved. 2024 CIBN.
      </div>
    </footer>
  );
}

export default Footer;