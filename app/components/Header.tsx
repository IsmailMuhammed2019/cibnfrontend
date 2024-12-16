import React from 'react'

function Header() {
  return (
    <header>
    <h1>Welcome to CIBN WEB PAGE</h1>
    <div style={{ background: '#0B2A0E', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/imgs/phone.png" alt="Phone" style={{ marginRight: '10px' }} />
        <span>0700-DIAL-CIBN</span>
        <img src="/imgs/email.png" alt="Email" style={{ marginLeft: '20px', marginRight: '10px' }} />
        <span>Cibn@cibn.org</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Connect with us:</span>
        <img src="/imgs/facebook.png" alt="Facebook" style={{ marginLeft: '10px', marginRight: '5px' }} />
        <img src="/imgs/twitter.png" alt="Twitter" style={{ marginLeft: '5px', marginRight: '5px' }} />
        <img src="/imgs/linkedln.png" alt="LinkedIn" style={{ marginLeft: '5px', marginRight: '5px' }} />
        <img src="/imgs/youtube.png" alt="YouTube" style={{ marginLeft: '5px' }} />
        <button style={{ background: '#0B2A0E', color: '#0B2A0E', border: '1px solid white', marginLeft: '20px' }}>Button</button>
      </div>
    </div>
  </header>
  )
}

export default Header
