import React, { useState, useEffect } from 'react';
import { Camera, LineChart, Activity, BrainCircuit, Box, TrendingUp } from 'lucide-react';
import './MLDemo.css';

const MLDemo = () => {
  const [activeTab, setActiveTab] = useState('vision');
  
  // Vision State
  const [visionActive, setVisionActive] = useState(true);
  const [boxes, setBoxes] = useState([]);
  
  // Crypto State
  const [cryptoModel, setCryptoModel] = useState('arima'); // 'arima' or 'hybrid'
  const [chartData, setChartData] = useState([]);

  // Simulate Video Analytics
  useEffect(() => {
    if (activeTab !== 'vision' || !visionActive) return;
    
    const interval = setInterval(() => {
      // Generate 2 to 4 random boxes
      const numBoxes = Math.floor(Math.random() * 3) + 2;
      const newBoxes = Array.from({ length: numBoxes }).map((_, i) => {
        const isPerson = Math.random() > 0.5;
        return {
          id: i,
          type: isPerson ? 'Person' : 'Vehicle',
          confidence: (Math.random() * (0.99 - 0.85) + 0.85).toFixed(2),
          top: Math.random() * 60 + 10,
          left: Math.random() * 70 + 10,
          width: isPerson ? 10 + Math.random() * 5 : 20 + Math.random() * 15,
          height: isPerson ? 25 + Math.random() * 10 : 15 + Math.random() * 10,
        };
      });
      setBoxes(newBoxes);
    }, 1500);

    return () => clearInterval(interval);
  }, [activeTab, visionActive]);

  // Simulate Crypto Chart
  useEffect(() => {
    if (activeTab !== 'crypto') return;

    // Initialize data
    let baseVal = 50;
    const initialData = Array.from({ length: 40 }).map(() => {
      baseVal += (Math.random() - 0.5) * 10;
      return Math.max(10, Math.min(90, baseVal));
    });
    setChartData(initialData);

    const interval = setInterval(() => {
      setChartData(prev => {
        const lastVal = prev[prev.length - 1];
        const nextVal = Math.max(10, Math.min(90, lastVal + (Math.random() - 0.5) * 15));
        return [...prev.slice(1), nextVal];
      });
    }, 800);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="section ml-demo-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-secondary">Applied Intelligence</span>
          <h2>Machine Learning <span className="text-gradient">Dashboard</span></h2>
          <p>Interactive simulations of my core AI architectures: Edge Computer Vision and Hybrid Predictive Modeling.</p>
        </div>

        <div className="ml-dashboard glass p-6 rounded-2xl">
          {/* Tabs */}
          <div className="ml-tabs">
            <button 
              className={`ml-tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              <Camera size={18} /> Edge AI Vision
            </button>
            <button 
              className={`ml-tab-btn ${activeTab === 'crypto' ? 'active' : ''}`}
              onClick={() => setActiveTab('crypto')}
            >
              <LineChart size={18} /> Hybrid ML Prediction
            </button>
          </div>

          {/* Vision Tab */}
          {activeTab === 'vision' && (
            <div className="ml-panel-grid">
              <div className="ml-main-view">
                <div className="video-feed-container">
                  {visionActive && (
                    <>
                      <div className="video-overlay">
                        REC • 30 FPS <br/>
                        <span style={{ color: '#0f0' }}>YOLOv4 Node Active</span>
                      </div>
                      {boxes.map(box => (
                        <div 
                          key={box.id} 
                          className="bounding-box"
                          style={{
                            top: `${box.top}%`,
                            left: `${box.left}%`,
                            width: `${box.width}%`,
                            height: `${box.height}%`
                          }}
                        >
                          <div className="bounding-box-label">
                            {box.type} {Math.round(box.confidence * 100)}%
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                  {!visionActive && (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#666' }}>
                      <Camera size={48} style={{ margin: '0 auto', opacity: 0.5 }} />
                      <p style={{ marginTop: '1rem' }}>Edge Node Offline</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="ml-sidebar">
                <div className="ml-control-group">
                  <label>Inference Engine</label>
                  <div className="ml-switch" onClick={() => setVisionActive(!visionActive)}>
                    <div className={`ml-switch-track ${visionActive ? 'on' : ''}`}>
                      <div className="ml-switch-thumb"></div>
                    </div>
                    <span className="text-muted">{visionActive ? 'Running' : 'Stopped'}</span>
                  </div>
                </div>

                <div className="ml-stat-box">
                  <span className="ml-stat-label"><Box size={16} style={{ display: 'inline', marginRight: '8px' }}/> Objects Tracked</span>
                  <span className="ml-stat-value">{visionActive ? boxes.length : 0}</span>
                </div>
                <div className="ml-stat-box">
                  <span className="ml-stat-label"><Activity size={16} style={{ display: 'inline', marginRight: '8px' }}/> Avg Confidence</span>
                  <span className="ml-stat-value">
                    {visionActive && boxes.length > 0 
                      ? `${Math.round((boxes.reduce((acc, b) => acc + parseFloat(b.confidence), 0) / boxes.length) * 100)}%` 
                      : '--'}
                  </span>
                </div>
                <div className="ml-stat-box">
                  <span className="ml-stat-label"><BrainCircuit size={16} style={{ display: 'inline', marginRight: '8px' }}/> Latency</span>
                  <span className="ml-stat-value">{visionActive ? '14ms' : '--'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Crypto Tab */}
          {activeTab === 'crypto' && (
            <div className="ml-panel-grid">
              <div className="ml-main-view">
                <div className="crypto-chart-container">
                  {chartData.map((val, idx) => {
                    // Hybrid model predicts much closer to actual
                    const errorMargin = cryptoModel === 'hybrid' ? (Math.random() * 6 - 3) : (Math.random() * 20 - 10);
                    const predictedVal = Math.max(5, Math.min(95, val + errorMargin));
                    
                    return (
                      <div key={idx} style={{ flex: 1, position: 'relative', height: '100%' }}>
                        {/* Actual Data Bar */}
                        <div 
                          className="chart-bar" 
                          style={{ position: 'absolute', bottom: 0, left: '10%', right: '10%', height: `${val}%`, zIndex: 1 }}
                        ></div>
                        {/* Predicted Data Marker */}
                        <div 
                          className={`chart-bar ${cryptoModel === 'hybrid' ? 'hybrid' : 'prediction'}`}
                          style={{ position: 'absolute', bottom: `${predictedVal}%`, left: '0', right: '0', height: '4px', zIndex: 2 }}
                        ></div>
                      </div>
                    );
                  })}
                  
                  {/* Legend inside chart */}
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <div style={{ width: '12px', height: '12px', background: 'var(--clr-primary-500)' }}></div> Actual
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '12px', height: '4px', background: cryptoModel === 'hybrid' ? '#10b981' : 'var(--clr-secondary-500)' }}></div> Predicted
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-sidebar">
                <div className="ml-control-group" style={{ marginBottom: '1rem' }}>
                  <label>Prediction Algorithm</label>
                  <select 
                    className="select-input" 
                    value={cryptoModel} 
                    onChange={(e) => setCryptoModel(e.target.value)}
                  >
                    <option value="arima">Standard ARIMA</option>
                    <option value="hybrid">Hybrid Machine Learning</option>
                  </select>
                </div>

                <div className="ml-stat-box">
                  <span className="ml-stat-label"><TrendingUp size={16} style={{ display: 'inline', marginRight: '8px' }}/> RMSE Error</span>
                  <span className="ml-stat-value" style={{ color: cryptoModel === 'hybrid' ? '#10b981' : 'var(--clr-secondary-500)' }}>
                    {cryptoModel === 'hybrid' ? '1.24' : '8.76'}
                  </span>
                </div>
                <div className="ml-stat-box">
                  <span className="ml-stat-label"><Activity size={16} style={{ display: 'inline', marginRight: '8px' }}/> R² Score</span>
                  <span className="ml-stat-value" style={{ color: cryptoModel === 'hybrid' ? '#10b981' : 'var(--clr-secondary-500)' }}>
                    {cryptoModel === 'hybrid' ? '0.94' : '0.62'}
                  </span>
                </div>
                
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', marginTop: '1rem', padding: '1rem', borderLeft: '2px solid var(--clr-primary-500)' }}>
                  {cryptoModel === 'hybrid' 
                    ? "Hybrid ML models combine the strengths of linear estimators and deep neural networks, significantly reducing error margins on highly volatile time-series data like cryptocurrency." 
                    : "Standard models struggle to capture non-linear volatility in cryptocurrency markets, resulting in high error rates during sudden spikes."}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default MLDemo;
