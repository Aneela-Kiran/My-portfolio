import React from 'react'
import logo from '../assets/aneela-logo3.png';


const Footer = () => {
  return (
    <div className='custom-black'>
  
      <div className='flex justify-between p-5 w-full '>
      {/* logo */}
      <div className='flex'>
          <img className=' w-32 7-32 rounded-full ' src={logo}></img>
        </div>

        <div className='flex items-center justify-center gap-6  '>
          <ul className='flex gap-6 font-medium text-cyan-50'>
            <li> 
              <a href='#home' className=' px-4 py-1  rounded-full header-color'>Home</a>
            </li>
            <li> 
              <a href='#about'>About</a>
            </li>
            <li> 
              <a href='#services'>Services</a>
            </li>
            <li> 
              <a href='#projects'>Projects</a>
            </li>
            <li> 
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
    </div>
    <hr></hr>
    <p className='text-white items-center p-3'>@2024Aneela Kiran.All rights Reserved</p>
    </div>
  )
}

export default Footer
