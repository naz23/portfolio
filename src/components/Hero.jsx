import React from 'react';
import { ArrowRight, Cpu, Network, Shield } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="availability-badge">
            <span className="pulse-dot"></span>
            <span>System Integrator & Consultant</span>
          </div>
          
          <h1 className="hero-title">
            Transforming Legacy Systems into <span className="text-gradient">Intelligent IoT & AI</span>
          </h1>
          
          <p className="hero-subtitle">
            I am Mohamad Nazrin Napiah. I specialize in architecting secure integrations that bridge traditional infrastructure with modern Edge AI, lightweight telemetry, and robust cyber security.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              Explore Integration Services <ArrowRight size={18} />
            </a>
            <a href="#demo" className="btn btn-outline">
              Live Edge AI Demo
            </a>
          </div>

          <div className="tech-stack">
            <span>Powered by:</span>
            <div className="tech-icons">
              <Cpu size={20} /> <Network size={20} /> <Shield size={20} />
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-orb animate-float"></div>
          <div className="glass conversion-card animate-float" style={{ animationDelay: '1s' }}>
             <div className="card-header">
                <span className="card-label">Conversion Status</span>
                <span className="badge badge-emerald">Online</span>
             </div>
             <div className="conversion-flow">
                <div className="node old">Legacy PLC</div>
                <div className="connector">
                  <div className="data-packet"></div>
                </div>
                <div className="node new text-gradient">Edge AI Node</div>
             </div>
             <div className="card-footer">
                <span>Latency: 12ms</span>
                <span>Threats Blocked: 1,402</span>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
