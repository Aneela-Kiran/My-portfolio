import React from 'react'
import image from '../assets/pc1.png'
import { FaFacebook ,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <> 
    <div className=' navbar-parent shadow-2xl bg-text-slate-600  appearance-none    flex items-center justify-around  sticky top-0 z-50 '>
      <div className='flex'>
          
          <span className='font-bold  text-white '>Aneela </span><div className='w-1 h-1 rounded-full navbar-color'></div>
          {/* <img className='h-16 w-16 rounded-full m-3 border-2 ' src={image}></img> */}
        </div>
      <nav className=" mt-6 py-2 pr-3 px-3  m-3 navbar-colour flex items-center justify-center rounded-3xl ">
        {/* left side menu */}
        <div className='flex items-center justify-center gap-6  '>
          <ul className='flex gap-6 font-medium text-cyan-50'>
            <li> 
              <a href='#' className=' px-4 py-1  rounded-full header-color'>Home</a>
            </li>
            <li> 
              <a href='#'>About</a>
            </li>
            <li> 
              <a href='#'>Services</a>
            </li>
            <li> 
              <a href='#'>Resume</a>
            </li>
            <li> 
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='sm:hidden flex items-end justify-end gap-4' >
      <ul className=' sm:hidden flex  items-end gap-4'>
        <li href='' target='-blank' >
        <FaFacebook className='header-color' />
        </li>
        <li href='' target='-blank' >
        <FaLinkedin className='header-color'/>
        </li>
        <li href='' target='-blank' >
        <FaSquareXTwitter className='header-color' />
        </li>
      </ul>
      </div>
      </div>
    </>
  )
}

export default Navbar