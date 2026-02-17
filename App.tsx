import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import SocialMediaCover from './components/SocialMediaCover';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-earth-900 dark:text-earth-100 bg-earth-50 dark:bg-earth-950 transition-colors duration-300">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        
        <div id="menu">
          <FeaturedMenu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="gallery">
          <Gallery />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="contact">
          <Reservation />
        </div>

        {/* Brand Assets Section */}
        <SocialMediaCover />
      </main>

      <Footer />
    </div>
  );
};

export default App;