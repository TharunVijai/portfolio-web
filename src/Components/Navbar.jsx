import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">

      <div className="nav-name">
        <a href="#hero">Tharun Vijay</a>
      </div>
      
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>

    </div>
    </nav>
    
  )
}

export default Navbar