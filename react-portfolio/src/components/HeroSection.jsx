import React from 'react';

const interests = [
  "Tennis",
  "Soccer",
  "Chess",
  "Gaming & Development",
  "Health & Fitness"
];

const HeroSection = () => {
  return (
    <section className="hero-section" id="about">
      <div className="hero-image-container">
        <img 
          src={`${import.meta.env.BASE_URL}IMG_1102.jpg`} 
          alt="Noel Ugwoke" 
          className="hero-image" 
        />
      </div>
      <p className="hero-subtitle">Software/Cloud Developer & Machine Learning Enthusiast</p>
      <div className="about-me-content">
        <p>
          Experienced software developer with a background in computer science and a proven track record of solving complex problems. Proficient in full-stack development, data analysis, and building scalable cloud solutions. Expertise spans the entire software development lifecycle, from analysis and design to testing and deployment, utilizing modern technologies and Agile methodologies to drive efficiency and enhance user experiences.
        </p>
        <div className="interests-section">
          <span className="interests-title">Interests</span>
          <div className="interests-marquee">
            <div className="interests-marquee-inner">
              {interests.map((interest, idx) => (
                <span className="interest-item" key={idx}>
                  {interest}
                  {idx < interests.length - 1 && <span className="interest-separator"> • </span>}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {interests.map((interest, idx) => (
                <span className="interest-item" key={`dup-${idx}`}>
                  {interest}
                  {idx < interests.length - 1 && <span className="interest-separator"> • </span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
