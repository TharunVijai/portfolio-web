import './Projects.css'
const Projects = () => {
  return (
    <>
        
        <section className="projects" id="projects">
          <h1 className='p-title'>PROJECTS</h1>
          <div className='projects-container'>

            <div className="project-card">
            <img src="expensetracker.png" alt="" />
            <h2>Expense Tracker</h2>
            <h3>HTML, CSS, Java, SpringBoot, MySQL</h3>
            <div className='desc'><p>Description</p></div>
            <a href="#" className='button-common'>Link</a>
            </div>

            <div className="project-card">
            <img src="chatbot.png" alt="" />
            <h2>SIASC Buddy - Chatbot</h2>
            <h3>Front-End Developer</h3>
            <div className='desc'><p>Description</p></div>
            <a href="#" className='button-common'>Link</a>
            </div> 

          </div>
          

        </section>
    </>
  )
}

export default Projects
