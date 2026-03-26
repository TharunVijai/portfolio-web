import './Achievements.css'

const Achievements = () => {
  return (
    <>
    <div id='achievements'>
        <h1 className='ach-title' >Achievements</h1>
        <div className='ach-wrapper'>
            <div className='ach-container' >
            <div className='ach-card'>
                <img src="#" alt="" />
                <h3 className='title'>Title</h3>
                <a href="#" className='button-common'>View</a>
            </div>
            <div className='ach-card'>
                <img src="#" alt="" />
                <h3 className='title'>Title</h3>
                <a href="#" className='button-common'>View</a>
            </div>
            <div className='ach-card'>
                <img src="#" alt="" />
                <h3 className='title'>Title</h3>
                <a href="#" className='button-common'>View</a>
            </div>
            <div className='ach-card'>
                <img src="#" alt="" />
                <h3 className='title'>Title</h3>
                <a href="#" className='button-common'>View</a>
            </div>
        </div>
        </div>
        
    </div>
        
    </>
  )
}

export default Achievements