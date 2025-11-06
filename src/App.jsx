import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Apply a clean, bold type scale via Tailwind utilities
    document.documentElement.classList.add('antialiased');
  }, []);

  return (
    <div className="font-sans bg-white text-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
