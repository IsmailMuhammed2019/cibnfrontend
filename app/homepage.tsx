import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import './homepage.css'

function homepage() {
  return (
    <div className="coming-soon-container">
      <Header />
      <div className="coming-soon">
        <FontAwesomeIcon icon={faHourglassHalf} className="spinning-icon" size="3x" />
        <h2>Coming Soon</h2>
        <p>We are working hard to bring you something amazing. Stay tuned!</p>
      </div>
      <Footer />
    </div>
  )
}

export default homepage