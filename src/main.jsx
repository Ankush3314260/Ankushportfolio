import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Animation from './animation.jsx'
import Footer from './components/Footer.jsx'
import Achievements from './components/achievements.jsx'
import Contact from './components/Contact.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Animation/>

   <Home/>
   <Education/>
   <About/>
   <Achievements/>
   <Skills/>
   <Contact/>
   <Footer/>
  </>,
)
