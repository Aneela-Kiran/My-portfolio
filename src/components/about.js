
import React from 'react';
import image from '../assets/about.jpeg'; 
import vscode from'../assets/vscode.png'
import Git from'../assets/git.png'
import figma from'../assets/figma.png'
import github from'../assets/github.png'
import react from'../assets/react.png'


const About = () => {
  return (
   <>
    <section id='about' className=' about-background shadow-sm py-10 mt-16 mx-auto m-4 px-8'>
      <div className=' container mx-auto flex flex-col  md:flex-row items-center justify-around text-white'>

        <div className=' flex justify-start md:justify-center mb-8 md:mb-0 overflow-hidden shadow-lg border-yellow-500 border-2 rounded-2xl '>
          <img className='  w-80 h-96 object-cover' src={image} alt="Aneela Kiran" />
        </div>

        <div className='md:w-1/2 sm py-4'>
          <h1 className='font-bold text-2xl md:text-3xl text-white mb-4'>ABOUT <span className='text-yellow-500'>ME</span></h1>
          <p className='text-[10px] md:text-xl mb-6 text-gray-500'>
            Hello!👋<br></br>My Name is <span className='text-white'>Aneela Kiran</span>  I'm  Frontend Developer!<br></br>I have 1 year experience  in <span className='text-white'>Frontend Development</span> and  specialize in building  <span className='text-white'>Web Application </span>Using ReactJs ,NextJs , Tailwindcss , Javascript and Typescript and Animation with GSAP.<br></br>Passionate about creating engaging and <span className='text-white'>Responsive </span> web experiences <br></br> Lets <span className='text-white'>Team up</span> and Build Something Awesome Togather!
          </p>
          
          <h1 className='mt-8 font-bold text-lg text-yellow-500'>Tools I use</h1>
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
    </>
  )
}

export default About;


{/* <br> </br> Lets Team up and Bild Something Awesome Togather! */}