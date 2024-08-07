import React from 'react'
import image from '../assets/home-project.jpg';
import image1 from '../assets/project2.jpg';
import image2 from '../assets/project3.jpg'

const Projects = () => {
  return (
    <section id='projects' className='py-12 mx-auto m-4 px-8 '>

      <h1 className='text-yellow-500 font-bold text-3xl text-center mb-8 '>Projects</h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">

      <div className=" p-4 flex items-center justify-center transform transition  duration-500 hover:scale-105 hover:shadow-xl">
        <img className='h-full w-full object-cover rounded-xl' src={image}></img>
        </div>

      <div className="col-span-2 rounded-lg h-96 w-100  overflow-hidden  p-4   flex items-center justify-center transform transition  duration-500 hover:scale-105 hover:shadow-xl">
        <img className=' h-full w-full object-cover rounded-xl' src={image1}></img>
        </div>

        <div className=" p-4     flex items-center justify-center transform transition  duration-500 hover:scale-105 hover:shadow-xl">
        <img className='h-full w-full object-cover rounded-xl' src={image2}></img>
        </div>

        <div className=" p-4     flex items-center justify-center transform transition  duration-500 hover:scale-105 hover:shadow-xl">
        <img className='h-full w-full object-cover rounded-xl' src={image1}></img>
        </div>

      <div className=" mt-1 h-96 w-100  overflow-hidden p-4 flex items-center justify-center transform transition  duration-500 hover:scale-105 hover:shadow-xl">
      <img className=' h-full w-full object-cover rounded-xl' src={image}></img>
      </div>
      {/* <div className=" p-4 flex items-center justify-center">
        <img className='h-full w-full object-cover rounded-xl' src={image}></img>
        </div>
      <div className=" h-96 w-100 col-span-2 overflow-hidden p-4 flex items-center justify-center">
      <img className=' h-full w-full object-cover rounded-xl' src={image}></img>
      </div> */}
    </div>
      </section>
  )
}

export default Projects

