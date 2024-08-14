import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '=')) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="content">
        <Home />
        <About />
        <Projects />
        <Tech />
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;