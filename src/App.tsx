import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import CoreValues from './components/CoreValues';
import Ethics from './components/Ethics';
import Team from './components/Team';
import Materials from './components/Materials';
import Industries from './components/Industries';
import Services from './components/Services';
import Testing from './components/Testing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'EHS Industries - Precision Metal Components & Investment Castings';
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('section-fade-in');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <CoreValues />
        <Ethics />
        <Team />
        <Materials />
        <Industries />
        <Services />
        <Testing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;