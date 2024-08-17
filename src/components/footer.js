import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../assets/aneela-logo3.png';


const Footer = () => {
  useEffect(()=>{
    AOS.init()
  },[]);
  return (
    <div className='custom-black mx-auto m-4 mb-0 px-8'>
  
      <div   className=' flex-col flex md:justify-between justify-center items-center md:flex-row p-5 w-full '>
      {/* logo */}
      <div className='flex'>
          <img className=' w-32 7-32 rounded-full ' src={logo}></img>
        </div>
      {/* links */}
        <div className='hidden  md:flex items-center justify-center gap-6  '>
          <ul className='flex gap-6 font-medium text-cyan-50 '>
            <li > 
              <a href='#home' className=' hover:underline hover:underline-offset-4 hover:decoration-yellow-500   '>Home</a>
            </li>
            <li>  
              <a href='#about' className=' hover:underline hover:underline-offset-4 hover:decoration-yellow-500   '>About</a>
            </li>
            <li> 
              <a href='#services' className=' hover:underline hover:underline-offset-4 hover:decoration-yellow-500   '>Services</a>
            </li>
            <li> 
              <a href='#projects' className=' hover:underline hover:underline-offset-4 hover:decoration-yellow-500   '>Projects</a>
            </li>
            <li> 
              <a href='#contact' className=' hover:underline hover:underline-offset-4 hover:decoration-yellow-500   '>Contact</a>
            </li>
          </ul>
        </div>
    </div>
    <hr></hr>
    <p className='text-white text-center p-3'>CopyRight&copy; 2024 All rights Reserved <span className="text-yellow-500">Aneela Kiran</span>  </p>

    </div>
  )
}

export default Footer
