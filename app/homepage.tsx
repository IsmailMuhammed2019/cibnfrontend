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
      <Footer />
    </div>
  );
}

export default Homepage;