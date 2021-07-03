import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/VFX">
            <VFX />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
        <MusicWave />
      </Router>
    </>
  );
}
