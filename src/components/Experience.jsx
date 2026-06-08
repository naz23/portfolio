import React from 'react';
import { Briefcase, CheckCircle2, Code2, Database, Cloud, Terminal, GraduationCap, Award, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">Career History</span>
          <h2>Professional <span className="text-gradient">Experience</span></h2>
          <p>Delivering enterprise-grade AIoT platforms and edge architectures.</p>
        </div>

        <div className="experience-timeline">
          {/* NZ PrintFlow */}
          <div className="experience-card glass" style={{ marginBottom: '2rem' }}>
            <div className="experience-header" style={{ borderBottom: 'none', paddingBottom: '0', marginBottom: '1.5rem' }}>
              <div className="role-title">
                <Briefcase className="text-primary" size={28} />
                <div>
                  <h3>Founder</h3>
                  <h4>
                    <a href="https://nzprintflow.web.app/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.target.style.color = 'var(--clr-primary-500)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                      NZPrintFlow - Net-Zero Print Flow
                    </a>
                  </h4>
                </div>
              </div>
              <div className="badge badge-primary">SaaS Platform</div>
            </div>

            <div className="project-column">
              <p style={{ color: 'var(--clr-text-dark-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Founded and architected NZPrintFlow, a modern cloud-based Software-as-a-Service (SaaS) application. Led the end-to-end product development, from initial concept and system architecture to deployment and user scaling.
              </p>
              <a href="https://nzprintflow.web.app/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', width: 'auto' }}>
                Visit NZPrintFlow <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Favoriot */}
          <div className="experience-card glass">
            <div className="experience-header">
              <div className="role-title">
                <Briefcase className="text-primary" size={28} />
                <div>
                  <h3>Senior IoT Developer</h3>
                  <h4>
                    <a href="https://favoriot.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.target.style.color = 'var(--clr-primary-500)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                      Favoriot Sdn Bhd
                    </a> 
                    <span className="text-muted"> | 2019 - Present</span>
                  </h4>
                </div>
              </div>
              <div className="badge badge-emerald">Certified Applied Data Science & AI</div>
            </div>

            <div className="projects-grid">
              <div className="project-column">
                <h5 className="project-title">Favoriot IoT Platform</h5>
                <ul className="achievement-list">
                  <li><CheckCircle2 size={16}/> Designed a real-time data processing engine integrating REST API, MQTT, CoAP, and WebSocket.</li>
                  <li><CheckCircle2 size={16}/> Developed ML backend pipelines (ingestion, preprocessing, training, inference) for predictive analytics and anomaly detection.</li>
                  <li><CheckCircle2 size={16}/> Integrated Generative AI capabilities for intelligent automation and AI-assisted workflows.</li>
                  <li><CheckCircle2 size={16}/> Built Visual Computing AI solutions using YOLO for real-time video analytics on legacy IP/CCTV cameras without requiring hardware replacement.</li>
                  <li><CheckCircle2 size={16}/> Designed Bluetooth gateway solutions and microcontroller firmware for edge device connectivity.</li>
                  <li><CheckCircle2 size={16}/> Implemented integration middleware with SMS and payment gateways.</li>
                  <li><CheckCircle2 size={16}/> Maintained scalable cloud infrastructure and delivered Fundamental & Advanced IoT & AIoT training programs.</li>
                </ul>
              </div>

              <div className="project-column">
                <h5 className="project-title">D'scover Application</h5>
                <ul className="achievement-list">
                  <li><CheckCircle2 size={16}/> Architected and maintained robust backend infrastructure for the D'scover application.</li>
                  <li><CheckCircle2 size={16}/> Developed real-time data processing and push notification architectures.</li>
                  <li><CheckCircle2 size={16}/> Designed and implemented geotracking and location-based services for seamless asset and user tracking.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header" style={{ marginTop: '5rem' }}>
          <span className="badge badge-primary">Education</span>
          <h2>Academic <span className="text-gradient">Background</span></h2>
        </div>

        <div className="experience-timeline">
          {/* Master */}
          <div className="experience-card glass" style={{ marginBottom: '2rem' }}>
            <div className="role-title">
              <GraduationCap className="text-primary" size={28} />
              <div>
                <h3>Master of Computer Science (Research)</h3>
                <h4>University of Malaya <span className="text-muted">| 2016 - 2018</span></h4>
              </div>
            </div>
            <p className="text-muted" style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              Faculty of Computer Science and Information Technology. <br/>
              <strong>Thesis:</strong> Compression Header Analyzer Intrusion Detection System (CHA-IDS) for 6LoWPAN Communication Protocol.
            </p>
          </div>

          {/* Bachelor */}
          <div className="experience-card glass">
            <div className="role-title">
              <GraduationCap className="text-primary" size={28} />
              <div>
                <h3>Bachelor of Computer Science</h3>
                <h4>University of Malaya <span className="text-muted">| 2012 - 2016</span></h4>
              </div>
            </div>
            <p className="text-muted" style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              Major in Computer System and Networking. <br/>
              Faculty of Computer Science and Information Technology.
            </p>
          </div>
        </div>

        <div className="section-header" style={{ marginTop: '5rem' }}>
          <span className="badge badge-primary">Certifications</span>
          <h2>Professional <span className="text-gradient">Credentials</span></h2>
        </div>

        <div className="experience-timeline">
          {/* AI Associate */}
          <div className="experience-card glass" style={{ marginBottom: '2rem' }}>
            <div className="role-title">
              <Award className="text-primary" size={28} />
              <div>
                <h3>Fusionex Artificial Intelligence AI Associate</h3>
                <h4>Fusionex Group <span className="text-muted">| Issued Oct 2023</span></h4>
              </div>
            </div>
            <p className="text-muted" style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              <strong>Credential ID:</strong> 2359 <br/>
              <strong>Skills:</strong> Deep Neural Networks (DNN), Convolutional Neural Networks (CNN), and Applied AI.
            </p>
          </div>

          {/* Data Science Analyst */}
          <div className="experience-card glass">
            <div className="role-title">
              <Award className="text-primary" size={28} />
              <div>
                <h3>Fusionex Data Science Analyst</h3>
                <h4>Fusionex Group <span className="text-muted">| Issued Oct 2023</span></h4>
              </div>
            </div>
            <p className="text-muted" style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              <strong>Credential ID:</strong> 2335 <br/>
              <strong>Skills:</strong> Machine Learning, Python (Programming Language), and Data Analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
