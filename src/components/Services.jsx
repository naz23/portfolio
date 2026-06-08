import React from 'react';
import { DatabaseZap, Cpu, BrainCircuit, ShieldCheck } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <DatabaseZap size={32} />,
      title: "Legacy Modernization",
      description: "Convert traditional PLCs, SCADA, and disconnected legacy systems into scalable, cloud-connected infrastructures.",
      tags: ["System Integration", "Protocol Translation", "API Development"]
    },
    {
      icon: <Cpu size={32} />,
      title: "IoT & Network Infrastructure",
      description: "Design low-power, robust mesh networks (MANET/VANET) and telemetry systems for real-time data acquisition.",
      tags: ["Sensor Networks", "6LoWPAN", "Xbee / Zigbee", "LoRa", "BLE"]
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "Edge AI & Machine Learning",
      description: "Deploy predictive models directly to edge nodes for anomaly detection, environmental forecasting, and autonomous decision-making.",
      tags: ["Edge AI", "Predictive Modeling", "Datathon Global Winner"]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Cyber Security Integration",
      description: "Secure constrained IoT environments with lightweight intrusion detection (CHA-IDS) against routing layer attacks.",
      tags: ["IDS / IPS", "Lightweight Crypto", "Threat Mitigation"]
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">Expertise</span>
          <h2>System Integration <span className="text-gradient">Capabilities</span></h2>
          <p>Bridging the gap between legacy industrial hardware and modern intelligent software.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="glass service-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
