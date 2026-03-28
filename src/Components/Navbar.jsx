import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-name">
          <a href="#hero">Tharun Vijay</a>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>
      </div>

      {/* OVERLAY */}
      <div 
        className={`overlay ${open ? "show" : ""}`} 
        onClick={() => setOpen(false)}
      ></div>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setOpen(false)}>✕</div>

        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#achievements" onClick={() => setOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;