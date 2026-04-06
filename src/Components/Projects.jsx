import './Projects.css'
import '../App.css'
const Projects = () => {
  return (
    <>
        
        <section className="projects" id="projects">
          <h1 className='p-title'>PROJECTS</h1>
          <div className='projects-container'>

            <div className="project-card ">
            <img src="expensetrackernew.png" alt="" />
            <h2>Expense Tracker</h2>
            <h3>React (Vite) - HTML - CSS - Java - SpringBoot - JS - MySQL</h3>
            <div className='desc'><p>A web application to track daily expenses, manage budgets, and monitor spending efficiently.</p></div>
            <a href="#" className='button-common'>Link</a>
            </div>

            <div className="project-card">
            <img src="chatbot.png" alt="" />
            <h2>SIASC - Chatbot</h2>
            <h3>Front-End Developer</h3>
            <div className='desc'><p>Developed the frontend interface for a chatbot that assists users with queries through an interactive UI.</p></div>
            <a href="#" className='button-common'>Link</a>
            </div> 

            <div className="project-card">
            <img src="portfoliopage.png" alt="" />
            <h2>Portfolio - Web</h2>
            <h3>React (Vite) - HTML5 - CSS3 - JavaScript - EmailJS</h3>
            <div className='desc'><p>A personal portfolio website to showcase my projects, skills, and contact information with a clean UI.</p></div>
            <a href="#" className='button-common'>Link</a>
            </div> 

          </div>
          

        </section>
    </>
  )
}

export default Projects
