
import React from 'react';
import image from '../assets/about.jpeg'; 
import vscode from'../assets/vscode.png'
import Git from'../assets/git.png'
import figma from'../assets/figma.png'
import github from'../assets/github.png'
import react from'../assets/react.png'


const About = () => {
  return (
    <section id='about' className=' py-10 px-5  mt-32  custom-black about-background shadow-sm'>
      <div className=' container mx-auto flex sm:flex-col  md:flex-row items-center justify-around text-white'>

        <div className=' flex justify-start md:justify-center mb-8 md:mb-0 shadow-lg '>
          <img className=' border-yellow-500 border-2 rounded-2xl w-80 h-96 object-cover' src={image} alt="Aneela Kiran" />
        </div>

        <div className='md:w-1/2 sm py-4'>
          <h1 className='font-bold text-2xl md:text-3xl text-white mb-4'>ABOUT <span className='text-yellow-500'>ME</span></h1>
          <p className='text-sm md:text-xl mb-6'>
            Hello! I'm Aneela Kiran, a passionate and creative Frontend Developer dedicated to building beautiful and functional web experiences. With a keen eye for design and a love for coding I transform ideas into engaging user-friendly websites and applications.
          </p>
          
          <h1 className='mt-8 font-bold text-lg '>Tools I use</h1>
            <div className='flex items-center justify-start px-4 gap-8 mt-10'>
              
              <div className='size-12  shadow-xl  items-center'><img className='size-8'src={vscode}></img></div>

              <div className='size-12   shadow-xl  items-center'><img className='size-8 'src={ Git}></img></div>

              <div className='size-12   shadow-xl  items-center'><img className='size-8'src={figma}></img></div>

              <div className='size-12  shadow-xl items-center'><img className='size-8 'src={ github}></img></div>

              <div className='size-12 shadow-xl  items-center'><img className='size-8 'src={ react}></img></div>

            </div>
        </div>
      </div>
    </section>
  )
}

export default About;

