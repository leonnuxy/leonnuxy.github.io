import React, { useEffect, useState } from 'react';
import Header from './components/Header';

import Skills from './components/SkillsSection';
import Projects from './components/Projects';
import EducationAndCertifications from './components/EducationAndCertifications';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import './styles/App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (
    <>
      <a href="#main" className="skip-to-content">Skip to content</a>
      <header className="main-header">
        <Header />
      </header>
      <div className="container">
        <main id="main" className="main-content">
          <HeroSection />
          <ExperienceSection />
          <Skills />
          <Projects />
          <EducationAndCertifications />
        </main>
      </div>
      <button
        className="darkmode-toggle"
        aria-label="Toggle dark mode"
        onClick={() => setDarkMode((v) => !v)}
      >
        <i className={darkMode ? "fas fa-moon" : "fas fa-sun"}></i>
      </button>
    </>
  );
}

export default App;
