import React from 'react'
import Navbar2 from './components/navbar2'
import HeroSection from './components/hero'
import About from './components/about'
import Services from './components/Services'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import Footer from './components/footer'
import Myskill from './components/Myskill'
import Sociallinks from './components/sociallinks'



const App = () => {
  return (
    <div >

    <Navbar2/>

     <HeroSection/> 
    {/* <SparklesPreview/>  */}

    <About/>
    <Services/>
    <Myskill/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    
    </div>
  )
}

export default App

