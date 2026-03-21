import './About.css'
const About = () => {
  return (
    <>
        <section className='about-container' id='about'>

          <div className='sidecard'>
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
              <h4>High School</h4>
              <p>Mount Saint Joseph Matric Higher Sec School, Thiruvannamalai</p>
            </div>
            <div>
              <h3>Skills</h3>
              <h4>Front-End : <span>HTML • CSS • JavaScript • React.js </span> </h4> 
              <h4>Back-End : </h4> Java • SpringBoot • Servlets • OOPS
              <h4>Database : </h4> <p>MySQL</p>
            </div>
          </div>

        </section>
    </>
  )
}

export default About
