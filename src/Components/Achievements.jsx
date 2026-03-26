import './Achievements.css'

const Achievements = () => {
  return (
    <>
    <div id='achievements'>
        <h1 className='ach-title' >Achievements</h1>
        <div className='ach-wrapper'>
            <div className='ach-container' >
            <div className='ach-card'>
                <img src="/sla.jpeg" alt="" />
                <h3 className='title'>Java Full Stack Course</h3>
                <a href="#" className='button-common'>View</a>
            </div>
            <div className='ach-card'>
                <img src="/IBM.jpeg" alt="" />
                <h3 className='title'>JavaScript IBM Certificate</h3>
                <a href="#" className='button-common'>View</a>
            </div>
            <div className='ach-card'>
                <img src="/udemy.jpeg" alt="" />
                <h3 className='title'>React - Udemy course</h3>
                <a href="#" className='button-common'>View</a>
            </div>
            <div className='ach-card'>
                <img src="/coa.jpeg" alt="" />
                <h3 className='title'>Computer on Office Automation</h3>
                <a href="#" className='button-common'>View</a>
            </div>
            <div className='ach-card'>
                <img src="/typewriting.jpeg" alt="" />
                <h3 className='title'>English Senior Typewriting</h3>
                <a href="#" className='button-common'>View</a>
            </div>
        </div>
        </div>
        
    </div>
        
    </>
  )
}

export default Achievements