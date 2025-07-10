import React from 'react';
import Hero from '../components/Hero';
import Properties from '../components/Properties';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Properties />
      <About />
      <Contact />
    </>
  );
};

export default Home;