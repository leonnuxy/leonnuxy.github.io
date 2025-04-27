import React from 'react';
import '../styles/components/educationAndCertifications.css';

const EducationAndCertifications = () => (
  <section className="edu-cert-section">
    <div className="edu-cert-flex">
      <div className="edu-cert-column">
        <h2 className="edu-cert-header">Education</h2>
        <div className="education-grid">
          {/* Example Education Card - structure is fine */}
          <div className="education-card">
            <div className="education-details"> {/* First entry */}
              <p className="education-degree">BSc. Computer Science</p>
              <div className="education-header">
                <div className="institution-logo-wrapper header-logo">
                  <img 
                    src={`${import.meta.env.BASE_URL}logos/uofc.png`} 
                    alt="University of Calgary" 
                    className="institution-logo"
                  />
                </div>
                <span className="education-period">2016 - 2022</span>
              </div>
            </div>
            {/* Separator */}
            <hr />
            <div className="education-details"> {/* Second entry */}
              <p className="education-degree">Information and Technology</p>
              <div className="education-header">
                <div className="institution-logo-wrapper header-logo">
                  <img 
                    src={`${import.meta.env.BASE_URL}logos/bvc.png`} 
                    alt="Bow Valley College" 
                    className="institution-logo"
                  />
                </div>
                <span className="education-period">2015 - 2016</span>
              </div>
            </div>
            {/* Add more education entries here */}
          </div>
           {/* Add more education cards here if needed */}
        </div>
      </div>
      <div className="edu-cert-column">
        <h2 className="edu-cert-header">Certifications</h2>
        <div className="certification-grid">
           {/* Example Certification Card - structure is fine */}
          <div className="certification-card">
            <div className="certification-details"> {/* First entry */}
              <p className="certification-org">AWS Certified Cloud Practioner</p>
              <div className="certification-header">
                <div className="institution-logo-wrapper header-logo">
                  <img 
                    src={`${import.meta.env.BASE_URL}logos/aws.svg.png`} 
                    alt="AWS" 
                    className="institution-logo cert-logo"
                  />
                </div>
                <span className="certification-period">2023</span>
              </div>
            </div>
            {/* Separator */}
            <hr />
            <div className="certification-details"> {/* Second entry */}
              <p className="certification-org">Google Cloud Professional Developer</p>
              <div className="certification-header">
                <div className="institution-logo-wrapper header-logo">
                  <img 
                    src={`${import.meta.env.BASE_URL}logos/gcp.png`} 
                    alt="Google Cloud Platform" 
                    className="institution-logo cert-logo"
                  />
                </div>
                <span className="certification-period">2022</span>
              </div>
            </div>
            {/* Separator */}
          </div>
          {/* Add more certification cards here if needed */}
        </div>
      </div>
    </div>
  </section>
);

export default EducationAndCertifications;