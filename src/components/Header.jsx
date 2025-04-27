import React from 'react';

const Header = () => (
  <header className="main-header">
    <div className="header-title">Noel Ugwoke</div>
    <div className="header-bar">
      <a href="https://www.linkedin.com/in/noelugwoke/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
      {/* Add rel="noopener noreferrer" to all external links */}
      <a href="https://github.com/leonnuxy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="/blog" aria-label="Blog">
        <i className="fas fa-blog"></i>
      </a>
      <a href="#projects" aria-label="Projects">
        <i className="fas fa-folder-open"></i>
      </a>
    </div>
  </header>
);

export default Header;
