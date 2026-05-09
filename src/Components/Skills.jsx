import React from "react";
import "./Skills.css";

import {
  FaJava,
  FaReact,
  FaGithub,
  FaCss3Alt,
  FaCode,
  FaDatabase,
  FaTools,
  FaLightbulb,
  FaLayerGroup,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiSpringboot,
  SiPostman,
  SiVercel,
  SiBootstrap,
} from "react-icons/si";

import { MdApi } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <h2 className="skills-title">Skills & Technologies</h2>

      <div className="skills-grid">

        {/* LANGUAGES */}
        <div className="skill-card">

          <div className="skill-heading">
            <div className="skill-heading-icon">
              <FaCode />
            </div>

            <h3>Languages</h3>
          </div>

          <div className="skill-tags">

            <span className="skill-pill">
              <FaJava color="#f89820" />
              Java
            </span>

            <span className="skill-pill">
              <SiMysql color="#00758f" />
              SQL
            </span>

            <span className="skill-pill">
              <SiJavascript color="#f7df1e" />
              JavaScript
            </span>

            <span className="skill-pill">
              <SiHtml5 color="#e34c26" />
              HTML5
            </span>

            <span className="skill-pill">
              <FaCss3Alt color="#264de4" />
              CSS3
            </span>

          </div>
        </div>

        {/* FRAMEWORKS */}
        <div className="skill-card">

          <div className="skill-heading">
            <div className="skill-heading-icon">
              <FaLayerGroup />
            </div>

            <h3>Frameworks & Libraries</h3>
          </div>

          <div className="skill-tags">

            <span className="skill-pill">
              <FaReact color="#61DBFB" />
              React.js
            </span>

            <span className="skill-pill">
              <SiSpringboot color="#6DB33F" />
              Spring Boot
            </span>

            <span className="skill-pill">
              <MdApi color="#ff9800" />
              REST API
            </span>

            <span className="skill-pill">
              <SiBootstrap color="#7952B3" />
              Bootstrap
            </span>

          </div>
        </div>

        {/* DATABASE */}
        <div className="skill-card">

          <div className="skill-heading">
            <div className="skill-heading-icon">
              <FaDatabase />
            </div>

            <h3>Database</h3>
          </div>

          <div className="skill-tags">

            <span className="skill-pill">
              <SiMysql color="#00758f" />
              MySQL
            </span>

          </div>
        </div>

        {/* TOOLS */}
        <div className="skill-card">

          <div className="skill-heading">
            <div className="skill-heading-icon">
              <FaTools />
            </div>

            <h3>Tools</h3>
          </div>

          <div className="skill-tags">

            <span className="skill-pill">
              <FaGithub color="#ffffff" />
              GitHub
            </span>

            <span className="skill-pill">
              <SiPostman color="#ff6c37" />
              Postman
            </span>

            <span className="skill-pill">
              <VscVscode color="#007ACC" />
              VS Code
            </span>

            <span className="skill-pill">
              <FaTools color="#f59e0b" />
              Maven
            </span>

            <span className="skill-pill">
              <SiVercel color="#ffffff" />
              Vercel
            </span>

          </div>
        </div>

        {/* CORE CONCEPTS */}
        <div className="skill-card cc">

          <div className="skill-heading">
            <div className="skill-heading-icon">
              <FaLightbulb />
            </div>

            <h3>Core Concepts</h3>
          </div>

          <div className="skill-tags">

            <span className="skill-pill">OOP</span>
            <span className="skill-pill">Collections Framework</span>
            <span className="skill-pill">MVC Architecture</span>
            <span className="skill-pill">CRUD Operations</span>
            <span className="skill-pill">RESTful API</span>
            <span className="skill-pill">Responsive Design</span>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;