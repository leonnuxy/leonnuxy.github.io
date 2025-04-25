import React, { useRef, useState } from 'react';

// Skill data with description and years
const skills = {
  "Programming Languages": [
    { name: "Java (11/17)", desc: "Robust OOP language, used for backend, APIs, and enterprise apps.", years: 7 },
    { name: "JavaScript (ES6+)", desc: "Dynamic scripting for web, frontend & backend (Node.js).", years: 8 },
    { name: "TypeScript", desc: "Typed superset of JS for scalable frontend/backend apps.", years: 4 },
    { name: "C++", desc: "Systems programming, performance-critical apps, and algorithms.", years: 3 },
    { name: "C#", desc: "Backend, desktop, and Unity game development.", years: 2 },
    { name: "Python 3", desc: "Scripting, data analysis, automation, and ML.", years: 6 },
    { name: "GoLang", desc: "Concurrent backend services and cloud-native apps.", years: 2 },
    { name: "Bash/Shell (ksh)", desc: "Automation, scripting, and DevOps tasks.", years: 6 }
  ],
  "Frontend Development": [
    { name: "React", desc: "Modern UI library for building interactive SPAs.", years: 5 },
    { name: "Webpack", desc: "Module bundler for JS/CSS assets.", years: 4 },
    { name: "NPM/Yarn", desc: "Package management for JS projects.", years: 6 },
    { name: "HTML", desc: "Markup for web content structure.", years: 10 },
    { name: "CSS", desc: "Styling and responsive layouts.", years: 10 }
  ],
  "Backend Development": [
    { name: "Node.js", desc: "JS runtime for scalable backend APIs.", years: 5 },
    { name: "Express", desc: "Minimalist Node.js web framework.", years: 5 },
    { name: "Spring Boot", desc: "Java framework for RESTful APIs and microservices.", years: 4 },
    { name: "RESTful APIs", desc: "Design and implementation of REST APIs.", years: 7 },
    { name: "GraphQL", desc: "Flexible API query language.", years: 2 }
  ],
  "Database Management": [
    { name: "SQL Server", desc: "Relational DBMS for enterprise data.", years: 5 },
    { name: "PostgreSQL", desc: "Advanced open-source relational DB.", years: 4 },
    { name: "MySQL", desc: "Popular open-source relational DB.", years: 6 },
    { name: "MongoDB", desc: "NoSQL document database.", years: 3 }
  ],
  "Data Engineering & Analysis": [
    { name: "SQL", desc: "Data querying, transformation, and reporting.", years: 7 },
    { name: "Pandas", desc: "Python data analysis library.", years: 4 },
    { name: "NumPy", desc: "Python numerical computing.", years: 4 },
    { name: "Tableau", desc: "Data visualization and dashboards.", years: 2 },
    { name: "Microsoft Excel", desc: "Data analysis, pivot tables, and automation.", years: 10 },
    { name: "Spark Streaming", desc: "Real-time data processing.", years: 1 },
    { name: "ETL", desc: "Extract, Transform, Load pipelines.", years: 5 }
  ],
  "Cloud Technologies": [
    { name: "AWS", desc: "Cloud infrastructure, compute, storage, and deployment.", years: 4 },
    { name: "Azure", desc: "Microsoft cloud services and DevOps.", years: 2 },
    { name: "Google Cloud Platform (GCP)", desc: "Google's cloud platform.", years: 1 },
    { name: "Docker", desc: "Containerization for apps and microservices.", years: 4 },
    { name: "Kubernetes (EKS)", desc: "Container orchestration and scaling.", years: 2 },
    { name: "Terraform", desc: "Infrastructure as Code (IaC) for cloud provisioning.", years: 2 }
  ],
  "CI/CD & DevOps": [
    { name: "Git", desc: "Version control for code collaboration.", years: 8 },
    { name: "Bitbucket", desc: "Git repository hosting and pipelines.", years: 4 },
    { name: "GitHub Actions", desc: "CI/CD automation workflows.", years: 2 },
    { name: "Jenkins", desc: "Automation server for CI/CD.", years: 3 },
    { name: "Azure Pipelines", desc: "CI/CD for Azure cloud.", years: 2 },
    { name: "CodePipeline", desc: "AWS CI/CD service.", years: 2 },
    { name: "CI/CD", desc: "Continuous Integration & Deployment practices.", years: 5 },
    { name: "Infrastructure as Code (IaC)", desc: "Automated infra provisioning.", years: 3 }
  ],
  "Testing": [
    { name: "JUnit", desc: "Java unit testing framework.", years: 4 },
    { name: "Selenium", desc: "Automated browser testing.", years: 3 },
    { name: "Unit Testing", desc: "Automated code correctness tests.", years: 7 },
    { name: "Integration Testing", desc: "Testing system components together.", years: 6 },
    { name: "SonarQube", desc: "Code quality and static analysis.", years: 2 }
  ]
};

const SkillTag = ({ skill }) => {
  const tagRef = useRef(null);
  const [tooltipStyle, setTooltipStyle] = useState({ display: 'none' });
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    typeof window !== 'undefined' ? window.navigator.userAgent : ''
  );

  const showTooltip = (e) => {
    if (isMobile) {
      // Center tooltip on mobile
      setTooltipStyle({
        display: 'block',
        position: 'fixed',
        zIndex: 9999,
        pointerEvents: 'none'
      });
      return;
    }

    // Desktop tooltip positioning
    const tooltipWidth = 240;
    const tooltipHeight = 80; // adjusted estimate
    let left = e.clientX;
    let top = e.clientY - tooltipHeight - 10;
    
    // Keep tooltip within viewport
    if (left + tooltipWidth > window.innerWidth - 10) {
      left = window.innerWidth - tooltipWidth - 10;
    }
    if (left < 10) left = 10;
    if (top < 10) top = e.clientY + 28;
    
    setTooltipStyle({
      display: 'block',
      position: 'fixed',
      left: `${left}px`,
      top: `${top}px`,
      zIndex: 9999,
      pointerEvents: 'none'
    });
  };

  const hideTooltip = () => {
    setTooltipStyle({ display: 'none' });
  };

  return (
    <span
      className="skill-tag"
      tabIndex={0}
      ref={tagRef}
      onMouseEnter={showTooltip}
      onFocus={showTooltip}
      onMouseMove={showTooltip}
      onMouseLeave={hideTooltip}
      onBlur={hideTooltip}
      style={{ position: 'relative' }}
    >
      {skill.name}
      <span className="skill-tooltip" style={tooltipStyle}>
        <strong>{skill.name}</strong>
        <br />
        {skill.desc}
        <br />
        <em>{skill.years} year{skill.years !== 1 ? 's' : ''} experience</em>
      </span>
    </span>
  );
};

const SkillsSection = () => (
  <section id="skills" className="skills-section">
    <h2 className="skills-section-header">Skills</h2>
    <div className="two-column-grid">
      {/* Programming Languages */}
      <div className="skills-category">
        <span className="skills-category-icon languages">
          {/* Languages Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 17h14M11 4v13M7 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <h3>Languages</h3>
        <div className="skills-tag-grid">
          {skills["Programming Languages"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      {/* Frontend Development */}
      <div className="skills-category">
        <span className="skills-category-icon frontend">
          {/* Frontend Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="3" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 17v2h6v-2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
        <h3>Frontend</h3>
        <div className="skills-tag-grid">
          {skills["Frontend Development"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      {/* Backend Development */}
      <div className="skills-category">
        <span className="skills-category-icon backend">
          {/* Backend Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <ellipse cx="11" cy="7" rx="8" ry="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 7v8c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 11c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
        <h3>Backend</h3>
        <div className="skills-tag-grid">
          {skills["Backend Development"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      {/* Database Management */}
      <div className="skills-category">
        <span className="skills-category-icon database">
          {/* Database Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <ellipse cx="11" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 12c0 1.66 3.13 3 7 3s7-1.34 7-3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
        <h3>Database</h3>
        <div className="skills-tag-grid">
          {skills["Database Management"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      {/* Data Engineering & Analysis */}
      <div className="skills-category">
        <span className="skills-category-icon data">
          {/* Data Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="3" y="10" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="9" y="5" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
            <rect x="15" y="2" width="4" height="15" rx="1" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
        <h3>Data</h3>
        <div className="skills-tag-grid">
          {skills["Data Engineering & Analysis"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      {/* Cloud Technologies */}
      <div className="skills-category">
        <span className="skills-category-icon cloud">
          {/* Cloud Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M7 17h8a4 4 0 0 0 0-8 6 6 0 1 0-8 8z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
        <h3>Cloud</h3>
        <div className="skills-tag-grid">
          {skills["Cloud Technologies"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      {/* CI/CD & DevOps */}
      <div className="skills-category">
        <span className="skills-category-icon cicd">
          {/* CI/CD Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="2"/>
            <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
        <h3>CI/CD & DevOps</h3>
        <div className="skills-tag-grid">
          {skills["CI/CD & DevOps"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
      {/* Testing */}
      <div className="skills-category">
        <span className="skills-category-icon testing">
          {/* Testing Icon */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <h3>Testing</h3>
        <div className="skills-tag-grid">
          {skills["Testing"].map(skill => (
            <SkillTag skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
