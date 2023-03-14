import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components/Terrain';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import VFX from './pages/VFX';
import Error from './pages/Error';
import MusicWave from './components/MusicWave';

AOS.init({
  duration: 1200,
});

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path='/' exact='true' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/VFX' element={<VFX />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
        <MusicWave />
      </Router>
    </>
  );
}
