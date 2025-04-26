import React, { useState, useEffect } from 'react';
import '../styles/components/projects.css';
import { FiArrowUpRight } from 'react-icons/fi';
import projectsData from '../data/Projects.json';
import { getAssetPath } from '../utils/assetUtils';

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state
  const [projectList, setProjectList] = useState([]);
  
  useEffect(() => {
    // Simulate loading or fetch data
    setProjectList(projectsData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="projects-loading">Loading projects...</div>;
  }

  const prevCard = () => setCurrent((prev) => (prev === 0 ? projectList.length - 1 : prev - 1));
  const nextCard = () => setCurrent((prev) => (prev === projectList.length - 1 ? 0 : prev + 1));

  // Helper function to handle image paths for GitHub Pages
  const getImagePath = (imagePath) => getAssetPath(imagePath);

  // Add image loading optimization
  const ProjectImage = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    
    return (
      <div className="image-container" style={{ position: 'relative' }}>
        {!loaded && <div className="image-placeholder"></div>}
        <img 
          src={src} 
          alt={alt} 
          onLoad={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      </div>
    );
  };

  return (
    <section className="projects-stacked-section" id="projects">
      <h2 className="projects-stacked-header">PROJECTS</h2>
      <div className="projects-stacked-cards">
        {projectList.map((project, idx) => {
          let position = '';
          if (idx === current) position = 'active';
          else if (idx === (current + 1) % projectList.length) position = 'next';
          else if (idx === (current - 1 + projectList.length) % projectList.length) position = 'prev';
          else position = 'hidden';

          return (
            <div
              className={`project-stacked-card ${position}`}
              key={project.title}
              onClick={() => position !== 'active' && setCurrent(idx)}
              style={{ zIndex: position === 'active' ? 10 : position === 'next' || position === 'prev' ? 5 : 1 }}
            >
              {/* Card Image Area */}
              <div className="card-image-area" style={{ backgroundImage: `url(${getImagePath(project.image)})` }}>
                {/* Skills and Rating Overlay on Image */}
                <div className="image-overlay-header">
                  <div className="skills-pills">
                    {project.skills.map(skill => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="card-content">
                <div className="card-text">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                </div>
                {/* Footer row for company and button */}
                <div className="card-footer-row">
                  <div className="card-company">{project.company}</div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="explore-btn" aria-label="Explore Project">
                    <span>Explore</span>
                    <div className="explore-icon-circle">
                      <FiArrowUpRight className="explore-arrow" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation buttons moved outside the cards */}
        <button 
          className="nav-btn nav-btn-left" 
          onClick={prevCard} 
          aria-label="Previous Project"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button 
          className="nav-btn nav-btn-right" 
          onClick={nextCard} 
          aria-label="Next Project"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;