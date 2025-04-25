import React from 'react';
import '../styles/components/hero.css';
import { getAssetPath } from '../utils/assetUtils';

const Hero = () => {
  // Use the utility to get the correct path for the hero image
  const heroImagePath = getAssetPath('/images/hero-image.jpg');

  return (
    <section className="hero-section" id="hero">
      <div 
        className="hero-image" 
        style={{ backgroundImage: `url(${heroImagePath})` }}
      >
        {/* Hero content */}
      </div>
    </section>
  );
};

export default Hero;
