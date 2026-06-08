import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-box small">MN</div>
          <span className="logo-text">Mohamad Nazrin Napiah</span>
        </div>
        <p className="footer-text">
          Bridging legacy systems with IoT and Edge AI.
        </p>
        <div className="footer-links">
          <a href="https://github.com/naz23" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/mohamadnazrinnapiah" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://wa.me/601127226631" target="_blank" rel="noreferrer"><FaWhatsapp size={24} /></a>
          <a href="mailto:mnazrinnapiah@gmail.com"><FaEnvelope size={24} /></a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Mohamad Nazrin Napiah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
