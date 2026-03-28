import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Technologies</h2>

      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span className="skill-pill">React.js</span>
            <span className="skill-pill">HTML</span>
            <span className="skill-pill">CSS</span>
            <span className="skill-pill">JavaScript</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span className="skill-pill">Java</span>
            <span className="skill-pill">Spring Boot</span>
            <span className="skill-pill">Servlets</span>
            <span className="skill-pill">OOPS</span>
            <span className="skill-pill">C++</span>
            <span className="skill-pill">Python</span>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h3>Database</h3>
          <div className="skill-tags">
            <span className="skill-pill">MySQL</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;