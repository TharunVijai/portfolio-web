import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

import './App.css'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
