import React from 'react';
import { Navbar, Footer } from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './styles/components.css';

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;