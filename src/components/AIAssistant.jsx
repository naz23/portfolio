import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown';
import './AIAssistant.css';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', content: "Hi! I'm NZ, Nazrin's AI Assistant. Feel free to ask me anything about his Edge AI projects, IoT telemetry, or software architecture!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error("API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.");
      }

      const genAI = new GoogleGenerativeAI(apiKey);

      const modelName = import.meta.env.VITE_AI_MODEL || "gemini-3.1-flash-lite";
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: `You are NZ, the personal AI Assistant for Mohamad Nazrin Napiah. 
        Your persona is both friendly and highly technical. You speak enthusiastically about code, software architecture, AI models, and IoT protocols, while remaining welcoming to recruiters or clients.
        Keep answers concise, professional, and highly relevant to the portfolio. Do NOT invent information.
        
        Information about Mohamad Nazrin Napiah:
        - Current Role: Senior IoT Developer at Favoriot Sdn Bhd (2019 - present). Also Founder of NZ PrintFlow (SaaS).
        - Core Skills: System Integration, Edge AI, IoT Telemetry, Python, C/C++, Node.js, Deep Neural Networks, Cybersecurity.
        - Experience at Favoriot: Developed real-time data engines, AI backend pipelines (YOLO object detection), and mesh network architectures (6LoWPAN, LoRa, BLE, Zigbee).
        - Education: Master of Computer Science (Research, 2016-2018) from University of Malaya. Bachelor of Computer Science (2012-2016) from University of Malaya.
        - Certifications: Fusionex AI Associate & Data Science Analyst (Oct 2023).
        - Achievements: Global Datathon 2018 (Predicted Cryptocurrencies using Hybrid ML). Published IEEE papers on 6LoWPAN IDS and IoT Flood Warning systems.
        - Contact: mnazrinnapiah@gmail.com or WhatsApp +601127226631.
        
        If asked something outside of this professional scope, politely pivot back to his skills.`
      });

      const history = messages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userMessage);
      const responseText = result.response.text();

      setMessages(prev => [...prev, { role: 'model', content: responseText }]);

    } catch (error) {
      console.error("AI Assistant Error:", error);

      const errorMsg = error.message.toLowerCase();
      const isRateLimit = errorMsg.includes('429') || errorMsg.includes('quota') || errorMsg.includes('rate limit');

      let friendlyError = isRateLimit
        ? "Oops! I'm experiencing unusually high traffic right now. Please try again in a moment, or contact Nazrin directly at mnazrinnapiah@gmail.com."
        : `Oops! I seem to have lost connection to my neural network. \n\n**Error Details:** ${error.message}\n\nPlease try again later or contact Nazrin directly at mnazrinnapiah@gmail.com.`;

      setMessages(prev => [...prev, {
        role: 'model',
        content: friendlyError
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-assistant-wrapper">
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="ai-avatar">
              <Sparkles size={20} />
            </div>
            <div className="ai-header-info">
              <h3>NZ</h3>
              <p>AI Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ marginLeft: 'auto', background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`ai-message ${msg.role}`}>
                {msg.role === 'model' ? (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {isLoading && (
              <div className="ai-message bot typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="ai-chat-input-area" onSubmit={handleSend}>
            <input
              type="text"
              className="ai-chat-input"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className="ai-send-btn" disabled={!input.trim() || isLoading}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button className="ai-toggle-btn" onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
