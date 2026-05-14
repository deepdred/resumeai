import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className="nav-logo"><Link to="/">OpenResume.<span>AI</span></Link></div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/resume" className="resume">Resume</Link>
        </div>
    </div>
  );
}

export default Navbar;
