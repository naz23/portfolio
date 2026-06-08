import React from 'react';
import { BookOpen, ExternalLink, GraduationCap, Trophy } from 'lucide-react';
import './Research.css';

const Research = () => {
  return (
    <section id="projects" className="section research-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">Publications & Case Studies</span>
          <h2>Academic <span className="text-gradient">Research</span></h2>
          <p>Peer-reviewed publications and public research profiles.</p>
        </div>

        <div className="research-grid">
          {/* IEEE Paper */}
          <div className="glass research-card">
            <div className="research-icon">
              <BookOpen size={32} className="text-primary" />
            </div>
            <h3>IoT Flood Warning System</h3>
            <p>
              Designed a rugged environmental sensing mesh using Xbee S1 radio and NXP LPC1768 controllers, providing early warning telemetry signals linked directly to custom mobile alert applications. Published in IEEE Xplore.
            </p>
            <a href="https://ieeexplore.ieee.org/document/8075343" target="_blank" rel="noreferrer" className="btn btn-outline research-btn">
              Read on IEEE Xplore <ExternalLink size={16} />
            </a>
          </div>

          {/* IEEE Paper CHA-IDS */}
          <div className="glass research-card">
            <div className="research-icon">
              <BookOpen size={32} className="text-primary" />
            </div>
            <h3>CHA-IDS for 6LoWPAN</h3>
            <p>
              Master's research proposing the Compression Header Analyzer Intrusion Detection System (CHA-IDS) to secure 6LoWPAN communication protocols against routing attacks. Published in IEEE Xplore.
            </p>
            <a href="https://ieeexplore.ieee.org/document/8270652/" target="_blank" rel="noreferrer" className="btn btn-outline research-btn">
              Read on IEEE Xplore <ExternalLink size={16} />
            </a>
          </div>

          {/* ResearchGate Profile */}
          <div className="glass research-card">
            <div className="research-icon">
              <GraduationCap size={32} className="text-primary" />
            </div>
            <h3>Research Profile</h3>
            <p>
              Explore my complete academic background, paper citations, and ongoing scientific contributions in the fields of IoT infrastructure, cybersecurity, and applied artificial intelligence.
            </p>
            <a href="https://www.researchgate.net/profile/Mohamad-Napiah" target="_blank" rel="noreferrer" className="btn btn-outline research-btn">
              View ResearchGate <ExternalLink size={16} />
            </a>
          </div>

          {/* Datathon Achievement */}
          <div className="glass research-card">
            <div className="research-icon">
              <Trophy size={32} className="text-primary" />
            </div>
            <h3>Global Datathon 2018</h3>
            <p>
              <strong>Prediction of Cryptocurrencies Using Hybridization Machine Learning.</strong><br/><br/>
              Represented the University of Malaya and Malaysia (the only ASEAN country participating) at the Global Datathon hosted by the Center of Applied Data Science (CADS) and the Data Science Society.
            </p>
            <a href="https://www.datasciencesociety.net/prediction-cryptocurrencies-using-hybridization-machine-learning/" target="_blank" rel="noreferrer" className="btn btn-outline research-btn">
              View Project <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
