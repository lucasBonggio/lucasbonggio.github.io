import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Element, Events, scroller } from 'react-scroll';
import Nav from './components/layout/Nav.jsx'
import Hero from './components/layout/Hero.jsx'
import ProjectSection from './components/layout/ProjectSection.jsx';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ProjectSection />
    </>
  );
}

export default App;