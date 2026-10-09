import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Projects from './components/Projects';
import SelectedWork from './components/SelectedWork';
import HowIWork from './components/HowIWork';
import Speaking from './components/Speaking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text font-sans selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <HowIWork />
        <Speaking />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
