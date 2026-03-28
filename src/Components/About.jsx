import './About.css'

const About = () => {
  return (
    <>
        <section className='about-container' id='about'>

          <div className='sidecard '>
            <h1>About Me</h1>
          </div>

          <div className='contentcard'>
            <div>
              <h3>Summary</h3>
              <p>I’m a Computer Science graduate focused on building full-stack web applications using Java and modern frontend technologies. I enjoy creating efficient, scalable solutions and continuously improving my skills.</p>
            </div>
            <div>
              <h3>Education</h3>
              <h4>B.Sc Computer Science</h4>
              <p>Shanmuga Industries Arts & Science College, Thiruvannamalai</p>
              <h4>Java Full Stack Course</h4>
              <p>Softlogic Systems, Chennai.</p>
              <h4>High School</h4>
              <p>Mount Saint Joseph Matric Higher Sec School, Thiruvannamalai</p>
            </div>
            <div>
              <h3>Skills</h3>
                <div className="skill-group">
                  <h4>Front-End</h4>
                  <div className="skills">
                    <span>React.js</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    
                  </div>
                </div>

                <div className="skill-group">
                  <h4>Back-End</h4>
                  <div className="skills">
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>Servlets</span>
                    <span>OOPS</span>
                    <span>C++</span>
                    <span>Python</span>
                  </div>
                </div>

                <div className="skill-group">
                  <h4>Database</h4>
                  <div className="skills">
                    <span>MySQL</span>
                  </div>
                </div>
            </div>
          </div>

        </section>
    </>
  )
}

export default About
