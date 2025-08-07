import React, { useRef, useEffect, useCallback } from 'react';

const experienceData = [
  {
    id: 1,
    title: "Application/Systems Analyst",
    company: "APEGA",
    location: "Edmonton, AB",
    period: "Dec 2022 – Present",
    logo: "logos/apega_logo.svg.png",
    description: [
      "Architected and delivered scalable API-driven integrations, automating regulatory workflows and reducing manual application processing.",
      "Reengineered data pipelines to increase throughput by 30%, ensuring high data integrity for compliance audits.",
      "Led cross-functional Agile teams, translating business requirements into robust technical solutions.",
      "Automated compliance reporting, reducing audit preparation time by 25%."
    ],
    tools: ["Python", "REST APIs", "Azure", "SQL Server"]
  },
  {
    id: 2,
    title: "Software/DevOps Engineer",
    company: "Spartan Controls",
    location: "Calgary, AB",
    period: "Jul 2021 – Nov 2022",
    logo: "logos/spartan_logo.png",
    description: [
      "Developed containerized web apps for industrial monitoring, cutting manual data entry by 90%.",
      "Implemented Kubernetes-based deployments and Terraform infrastructure, reducing provisioning time by 40%.",
      "Established CI/CD pipelines with Jenkins and GitHub Actions, enforcing automated testing and secure rollouts.",
      "Integrated monitoring solutions, improving system uptime and alerting accuracy."
    ],
    tools: ["Docker", "Kubernetes", "Terraform", "Jenkins"]
  },
  {
    id: 3,
    title: "Software Developer / Data Analyst",
    company: "Parkland Fuel Corporation",
    location: "Calgary, AB",
    period: "May 2020 – Jan 2021",
    logo: "logos/parkland_logo.png",
    description: [
      "Built interactive dashboards with React and Angular, driving a 30% increase in stakeholder adoption.",
      "Optimized backend APIs for real-time reporting, reducing latency by 20% and improving system reliability.",
      "Collaborated with analysts to streamline reporting workflows, enabling data-driven decision making.",
      "Automated ETL processes, improving data accuracy and delivery speed."
    ],
    tools: ["React", "Angular", "Node.js", "SQL Server"]
  },
  {
    id: 4,
    title: "Web Applications Developer",
    company: "Alberta Health Services",
    location: "Calgary, AB",
    period: "2019",
    logo: "logos/ahs_logo.png",
    description: [
      "Created Django applications for field-team device tracking, automating data collection and report generation.",
      "Enhanced usability and reduced manual reporting time by 50% through intuitive UI and backend optimizations.",
      "Developed RESTful APIs for seamless integration with internal systems.",
      "Implemented user authentication and access controls, improving data security."
    ],
    tools: ["Django", "Python", "PostgreSQL", "JavaScript"]
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
