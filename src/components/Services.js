
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import services from '../Data/servicesData';

const Services = () => {
  useEffect(()=>{
    AOS.init()
  },[]);
  return (
    <React.Fragment>
    <section id='services' className=' py-12 mt-16 mx-auto m-4 px-8 max-w-full'>

    <div className='container mx-auto px-6  m-5 '>
        <h1  data-aos="zoom-in" className='text-yellow-500 text-4xl font-bold mb-12 text-center '>MY SERVICES</h1>
        <div data-aos="fade-up" data-aos-duration="1000" className='grid grid-cols-1 md:grid-cols-3  gap-8'>

          {services.map((services,index)=>{
          return <div data-aos="zoom-in-up" key={index} className='about-background  shadow-lg p-6 text-center rounded-2xl m-4 transform transition  duration-500 hover:scale-105 hover:shadow-[0_0_8px_4px_rgba(255,255,0,0.30)] border border-transparent '>
            <div className='text-3xl text-yellow-400 text-center mb-4 '>{services.icon} </div>
            <h1 className='text-xl font-semibold mb-2 text-white'>{services.title}</h1>
            <p className='text-gray-300 mb-4 text-md text-center p-4'>{services.description}</p>
              
              <a href={services.link} className=" text-white font-bold m-4 py-2 px-4  text-center rounded-full shadow-lg transition duration-300 ease-in-out  hover:border">
              Read More
              </a> 
              </div>
              
          })}
       </div>
    </div>
    </section>
    </React.Fragment>
  )
}

export default Services
