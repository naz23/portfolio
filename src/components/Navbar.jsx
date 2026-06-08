import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  return (
    <nav className={`navbar glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo-area">
          <div className="logo-box">MN</div>
          <span className="logo-text text-gradient">Mohamad Nazrin Napiah</span>
        </div>
        
        <div className="nav-links desktop-only">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#demo">IoT Demo</a>
          <a href="#projects">Case Studies</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="https://wa.me/601127226631" target="_blank" rel="noreferrer" className="btn btn-primary nav-btn">Get In Touch</a>
        </div>

        <div className="mobile-only">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn" aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} glass`}>
        <div className="mobile-nav-links">
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#demo" onClick={() => setMobileMenuOpen(false)}>IoT Demo</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Case Studies</a>
          
          <div className="mobile-menu-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme" style={{ justifyContent: 'flex-start', padding: '0.5rem 0' }}>
              {isDark ? <Sun size={20} style={{ marginRight: '10px' }} /> : <Moon size={20} style={{ marginRight: '10px' }} />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <a href="https://wa.me/601127226631" target="_blank" rel="noreferrer" className="btn btn-primary nav-btn" style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }} onClick={() => setMobileMenuOpen(false)}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
