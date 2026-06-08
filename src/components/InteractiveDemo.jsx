import React, { useState, useEffect } from 'react';
import { Sliders, ShieldAlert, Waves, Server } from 'lucide-react';
import './InteractiveDemo.css';

const InteractiveDemo = () => {
  const [rainLevel, setRainLevel] = useState(120);
  const [attackType, setAttackType] = useState('none');
  const [logs, setLogs] = useState([]);
  
  // Computed states
  const waterLevel = Math.min(100, Math.max(10, rainLevel / 3.5));
  const isFlood = rainLevel > 250;
  const isAttack = attackType !== 'none';

  useEffect(() => {
    // Generate logs
    const interval = setInterval(() => {
      const timestamp = new Date().toISOString().substring(11, 19);
      let newLog = `[${timestamp}] INFO: Normal telemetry payload received`;
      
      if (attackType === 'hello-flood') {
        newLog = `[${timestamp}] WARN: CHA-IDS DETECTED HELLO-FLOOD SIGNATURE. Blocking...`;
      } else if (attackType === 'sinkhole') {
        newLog = `[${timestamp}] CRITICAL: SINKHOLE ANOMALY on Node #0x12. Rerouting...`;
      } else if (attackType === 'wormhole') {
        newLog = `[${timestamp}] ALERT: WORMHOLE link detected via TTL mismatch.`;
      } else if (isFlood) {
        newLog = `[${timestamp}] ALERT: Water level critical. Sluice Gate triggered.`;
      }

      setLogs(prev => [newLog, ...prev].slice(0, 15));
    }, 2000);

    return () => clearInterval(interval);
  }, [attackType, isFlood]);

  return (
    <section id="demo" className="section demo-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">Interactive Demo</span>
          <h2>Live Telemetry <span className="text-gradient">& Security Dashboard</span></h2>
          <p>Test the lightweight CHA-IDS system and environmental warning node in real-time.</p>
        </div>

        <div className="demo-grid">
          {/* Controls */}
          <div className="demo-panel glass">
            <h3 className="panel-title"><Sliders size={20} /> Simulation Controls</h3>
            
            <div className="control-group">
              <div className="flex-between">
                <label>Simulate Rainfall (mm)</label>
                <span className="text-primary font-bold">{rainLevel} mm</span>
              </div>
              <input 
                type="range" 
                min="0" max="350" 
                value={rainLevel} 
                onChange={(e) => setRainLevel(Number(e.target.value))}
                className="slider"
              />
            </div>

            <div className="control-group">
              <label>Inject Network Attack (6LoWPAN)</label>
              <select 
                value={attackType} 
                onChange={(e) => setAttackType(e.target.value)}
                className="select-input"
              >
                <option value="none">Normal Behavior</option>
                <option value="hello-flood">Hello Flood Attack</option>
                <option value="sinkhole">Sinkhole Attack</option>
                <option value="wormhole">Wormhole Attack</option>
              </select>
            </div>

            <div className="logs-container">
               <h4 className="flex-center"><ShieldAlert size={16} /> CHA-IDS Logs</h4>
               <div className="terminal">
                 {logs.map((log, i) => (
                   <div key={i} className={`log-line ${log.includes('WARN') || log.includes('CRITICAL') || log.includes('ALERT') ? 'log-alert' : ''}`}>
                     {log}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Monitors */}
          <div className="demo-monitors">
             {/* Flood Monitor */}
             <div className="demo-panel glass monitor">
               <div className="monitor-header">
                 <div>
                   <span className="monitor-label">Flood Warning</span>
                   <h4>Water Level Node</h4>
                 </div>
                 <span className={`badge ${isFlood ? 'badge-alert' : 'badge-emerald'}`}>
                   {isFlood ? 'Critical' : 'Normal'}
                 </span>
               </div>
               
               <div className="water-tank-container">
                 <div className="water-tank">
                   <div className="water-level" style={{ height: `${waterLevel}%`, background: isFlood ? '#ef4444' : 'var(--clr-primary-500)' }}></div>
                 </div>
                 <div className="tank-info">
                   <span className="text-3xl font-bold">{Math.round(waterLevel)}%</span>
                   <span>Status: Active</span>
                 </div>
               </div>

               <div className="monitor-stats">
                 <div className="stat">
                   <span>Water Pump</span>
                   <strong>{isFlood ? 'Active' : 'Off'}</strong>
                 </div>
                 <div className="stat">
                   <span>Siren</span>
                   <strong>{isFlood ? 'Active' : 'Off'}</strong>
                 </div>
               </div>
             </div>

             {/* IDS Monitor */}
             <div className="demo-panel glass monitor">
               <div className="monitor-header">
                 <div>
                   <span className="monitor-label">IDS Analyzer</span>
                   <h4>6LoWPAN Guard</h4>
                 </div>
                 <span className={`badge ${isAttack ? 'badge-alert' : 'badge-emerald'}`}>
                   {isAttack ? 'Under Attack' : 'Clean'}
                 </span>
               </div>

               <div className="network-viz">
                 <Server size={48} className={isAttack ? 'icon-alert shake' : 'icon-normal'} />
                 <div className={`connection-line ${isAttack ? 'line-alert' : 'line-normal'}`}></div>
                 <ShieldAlert size={48} className={isAttack ? 'icon-alert' : 'icon-normal'} />
               </div>

               <div className="monitor-stats">
                 <div className="stat">
                   <span>Anomaly Rate</span>
                   <strong>{isAttack ? '84%' : '0%'}</strong>
                 </div>
                 <div className="stat">
                   <span>Power (Header)</span>
                   <strong>Excellent</strong>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
