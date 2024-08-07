import React from 'react'
import Navbar2 from './components/navbar2'
import HeroSection from './components/hero'
import About from './components/about'
import Services from './components/Services'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import Footer from './components/footer'
import Myskill from './components/Myskill'
import ProjectsSlider from './components/projectsSlider'
import './index.css';



const App = () => {
  return (
    <div >

    <Navbar2/>
    <HeroSection/>
    <About/>
    <Services/>
    <Myskill/>
    <ProjectsSlider/>
    <ContactMe/>
    <Footer/>
   
    </div>
  )
}

export default App

