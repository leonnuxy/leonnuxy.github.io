import React from 'react';

const Certifications = () => (
  <section className="content-section">
    <h2>Certifications</h2>
    <div className="education-grid">
      <div className="education-card">
        <div className="education-header">
          <h3>AWS Certified Cloud Practitioner</h3>
          <span className="education-period">January 2023</span>
        </div>
        <div className="education-details">
          <p className="education-provider">Amazon Web Services</p>
        </div>
      </div>

      <div className="education-card">
        <div className="education-header">
          <h3>IBM AI Engineering Professional</h3>
          <span className="education-period">October 2024</span>
        </div>
        <div className="education-details">
          <p className="education-provider">IBM</p>
        </div>
      </div>

      <div className="education-card">
        <div className="education-header">
          <h3>Google Cloud Professional Developer</h3>
          <span className="education-period">February 2023 (Expires February 2026)</span>
        </div>
        <div className="education-details">
          <p className="education-provider">Google Cloud</p>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
