import React from 'react';
import './homepage.css';
import Header from './components/Header';
import Footer from './components/Footer';

function Homepage() {
  return (
    <div className="wrapper">
      <Header className="header" />
      <div className="content">
        <h1>Your Main Content Here</h1>
        {/* Add more content as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;