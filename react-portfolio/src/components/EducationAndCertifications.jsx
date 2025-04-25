import React from 'react';
import '../styles/components/educationAndCertifications.css';
// Assuming you have font awesome for the icons, otherwise use react-icons
// import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const EducationAndCertifications = () => (
  <section className="edu-cert-section">
    <div className="edu-cert-flex">
      <div className="edu-cert-column">
        <h2 className="edu-cert-header">Education</h2>
        <div className="education-grid">
          {/* Example Education Card - structure is fine */}
          <div className="education-card">
            <span className="card-icon edu-icon">
              {/* If using font awesome */}
              <i className="fas fa-graduation-cap"></i>
              {/* If using react-icons */}
              {/* <FaGraduationCap /> */}
            </span>
            <div className="education-details"> {/* First entry */}
              <p className="education-degree">BSc. Computer Science</p>
              <div className="education-header">
                <h3>University of Calgary</h3>
                <span className="education-period">2016 - 2022</span>
              </div>
            </div>
            {/* Separator */}
            <hr />
            <div className="education-details"> {/* Second entry */}
              <p className="education-degree">Diploma, Information and Technology</p>
              <div className="education-header">
                <h3>Bow Valley College</h3>
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
            <span className="card-icon cert-icon">
               {/* If using font awesome */}
              <i className="fas fa-certificate"></i>
               {/* If using react-icons */}
               {/* <FaCertificate /> */}
            </span>
            <div className="certification-details"> {/* First entry */}
              <p className="certification-org">AWS Certified Solutions Architect</p>
              <div className="certification-header">
                <h3>AWS</h3>
                <span className="certification-period">2023</span>
              </div>
            </div>
            {/* Separator */}
            <hr />
            <div className="certification-details"> {/* Second entry */}
              <p className="certification-org">Google Cloud Professional Developer</p>
              <div className="certification-header">
                <h3>Google</h3>
                <span className="certification-period">2022</span>
              </div>
            </div>
             {/* Add more certification entries here */}
          </div>
          {/* Add more certification cards here if needed */}
        </div>
      </div>
    </div>
  </section>
);

export default EducationAndCertifications;