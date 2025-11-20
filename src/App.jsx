import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text font-sans selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
