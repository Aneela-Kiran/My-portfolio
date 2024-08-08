import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import About from './components/about'
import Services from './components/Services'
import ContactMe from './components/contact-me'
import Footer from './components/footer'
import Myskill from './components/Myskill'
import ProjectsSlider from './components/projects'
import './index.css';



const App = () => {
  return (
    <div >

    <Navbar/>
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

