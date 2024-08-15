// src/components/Home.jsx
import Banner from './Banner';
import Projects from './Projects';
import Exp from './Exp';
import Education from './Education';
import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div className='App'>
      <Banner />
      <Projects />
      <Exp />
      <Education />
    </div>
  );
}

export default Home;
