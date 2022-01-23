import React, { useEffect } from 'react'

import '../../styles/main.css'

import Home from '../home/Home'
import Projects from '../projects/Projects'
import Experiences from '../experiences/Experiences'
import About from '../about/About'
import Contact from '../contact/Contact'

export default function Main() {
  useEffect(() => {
    document.title = 'Ugo Prenat - Développeur web et mobile'
  }, [])
  
  return (
    <div>
      <Home />
      <Projects />
      <Experiences />
      <About />
      <Contact />
    </div>
  )
}
