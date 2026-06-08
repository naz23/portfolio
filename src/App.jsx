import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import InteractiveDemo from './components/InteractiveDemo';
import MLDemo from './components/MLDemo';
import Research from './components/Research';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Services />
      <InteractiveDemo />
      <MLDemo />
      <Research />
      <Footer />
      <AIAssistant />
    </>
  );
}

export default App;
