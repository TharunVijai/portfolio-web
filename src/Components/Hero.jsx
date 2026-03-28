import './Hero.css'

const Hero = () => {
  return (
    <>
        <div className='hero' id='hero'>
            <div className='heroContent'>
                <h2>Hi, I'm</h2>
                <h1>Tharun Vijay S</h1> <br />
                <p className='p2'>Java Full Stack Developer</p><br />
                <p>An aspiring <span> B.Sc CS graduate </span> with a strong foundation in Java (OOPS) and web technologies. 
                  Passionate about creating efficient, scalable solutions and continuously learning new technologies.”</p>
                <a href="ResumeUpdated.pdf" target='' className='button-hero'> See Resume</a>
            </div>
            <div className='heroPhoto'>
              <img src="profile.jpeg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero
