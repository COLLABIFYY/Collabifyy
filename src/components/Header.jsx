import React, { useState, useEffect } from 'react';
import './Header.css';
import SignInModal from './SignInModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">COLLABIFYY</div>

      <nav className="nav">
        <ul>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#why-collabifyy" className="nav-link">Why Collabifyy</a></li>
          <li><a href="#pricing" className="nav-link">Pricing</a></li>
          <li><a href="#about" className="nav-link">About Us</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <button
          className="nav-link login-btn"
          onClick={() => setShowLogin(true)}
        >
          LOGIN
        </button>
        <button
          className="talk-founder-btn"
          onClick={() => window.open('https://calendly.com/sakshamkumar1226', '_blank')}
        >
          Talk to Founder
        </button>
      </div>

      <SignInModal isOpen={showLogin} onClose={() => setShowLogin(false)} />

    </header>
  );
};

export default Header;
