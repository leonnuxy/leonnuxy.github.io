import React, { useRef, useEffect, useCallback } from 'react';

const experienceData = [
  {
    id: 1,
    title: "Software Developer",
    company: "Alberta Health Services",
    location: "Calgary, AB",
    period: "2022 - Present",
    logo: "logos/ahs_logo.png",
    description: [
      "Developed and maintained healthcare applications using Java Spring Boot and React",
      "Built RESTful APIs for patient data management and clinical workflows",
      "Implemented automated testing strategies reducing bug reports by 40%",
      "Collaborated with healthcare professionals to gather requirements and improve user experience"
    ],
    tools: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS", "Docker", "Git"]
  },
  {
    id: 2,
    title: "Cloud Solutions Developer",
    company: "Parkland Corporation",
    location: "Calgary, AB", 
    period: "2021 - 2022",
    logo: "logos/parkland_logo.png",
    description: [
      "Designed and implemented cloud-native solutions on AWS for fuel retail operations",
      "Built data pipelines processing 1M+ transactions daily using Python and Apache Spark",
      "Migrated legacy systems to containerized microservices architecture",
      "Reduced infrastructure costs by 30% through optimized resource allocation"
    ],
    tools: ["Python", "AWS", "Docker", "Kubernetes", "Terraform", "Apache Spark", "MongoDB"]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Spartan Controls",
    location: "Calgary, AB",
    period: "2020 - 2021", 
    logo: "logos/spartan_logo.png",
    description: [
      "Developed industrial automation web applications using Node.js and React",
      "Created real-time monitoring dashboards for oil & gas pipeline systems",
      "Integrated SCADA systems with modern web technologies",
      "Improved system reliability and reduced downtime by 25%"
    ],
    tools: ["Node.js", "React", "TypeScript", "SQL Server", "Azure", "C#", "Git"]
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    company: "Bow Valley College",
    location: "Calgary, AB",
    period: "2019 - 2020",
    logo: "logos/bvc.png", 
    description: [
      "Assisted in developing student information system features",
      "Worked on database optimization and performance improvements", 
      "Participated in Agile development processes and code reviews",
      "Gained experience with enterprise software development practices"
    ],
    tools: ["C#", ".NET", "SQL Server", "JavaScript", "HTML", "CSS"]
  }
];

const ExperienceSection = () => {
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);
  const pauseTimeout = useRef(null);
  const scrollDirection = useRef(1); // 1 for right, -1 for left

  // Repeat the cards for infinite scroll
  const cards = [
    ...experienceData,
    ...experienceData,
    ...experienceData
  ];

  // Function to start auto-scrolling
  const startAutoScroll = useCallback(() => {
    if (scrollInterval.current) return;
    scrollInterval.current = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;
      
      // Scroll by the direction factor (positive or negative)
      container.scrollLeft += (0.5 * scrollDirection.current);
      
      const cardWidth = 260 + 32; // Card width + gap
      
      // If reached right end, reverse direction to left
      if (container.scrollLeft >= (cardWidth * (cards.length - 5))) {
        scrollDirection.current = -1;
      }
      
      // If reached left end, reverse direction to right
      if (container.scrollLeft <= cardWidth) {
        scrollDirection.current = 1;
      }
    }, 20);
  }, [cards.length]);

  // Function to stop auto-scrolling
  const stopAutoScroll = useCallback(() => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  }, []);

  // On mount, start auto-scroll and set initial scroll position
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      // Jump to first real card (skip ghost at start)
      const cardWidth = 260 + 32;
      container.scrollLeft = cardWidth;
    }
    startAutoScroll();
    return () => {
      stopAutoScroll();
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, [startAutoScroll, stopAutoScroll]);

  // Update scroll handler for manual scrolling
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = 260 + 32;
    
    // Update direction based on manual scroll position
    if (container.scrollLeft >= (cardWidth * (cards.length - 5))) {
      scrollDirection.current = -1;
    } else if (container.scrollLeft <= cardWidth) {
      scrollDirection.current = 1;
    }
  };

  // Handle card click: pause, then resume after 3s
  const handleCardClick = () => {
    stopAutoScroll();
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-header">Professional Experience</h2>
      
      <div className="experience-carousel-wrapper">
        <div className="carousel-fade carousel-fade-left"></div>
        <div className="carousel-fade carousel-fade-right"></div>
        
        <div 
          className="experience-carousel-container"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {cards.map((experience, idx) => (
            <div 
              key={idx} 
              className="experience-card"
              onClick={handleCardClick}
              tabIndex={0}
            >
              <div className="experience-logo-container">
                <img 
                  src={`${import.meta.env.BASE_URL}${experience.logo}`}
                  alt={`${experience.company} logo`}
                  className="experience-logo"
                />
              </div>
              
              <h3 className="experience-title">{experience.title}</h3>
              
              <div className="experience-company-location-date">
                <div className="experience-employer">{experience.company}</div>
                <div className="experience-location-date-row">
                  <div className="experience-location">
                    <i className="fas fa-map-marker-alt" style={{marginRight: '0.3em'}}></i>
                    {experience.location}
                  </div>
                  <div className="experience-period">{experience.period}</div>
                </div>
              </div>

              <ul className="experience-description">
                {experience.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="experience-points">Technologies & Tools:</div>
              <div className="experience-tools" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center'}}>
                {experience.tools.map((tool, index) => (
                  <span key={index} className="experience-tool-pill">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
