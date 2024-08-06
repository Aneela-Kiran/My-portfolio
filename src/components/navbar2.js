
import React, { useState } from 'react';
import logo from '../assets/aneela-logo3.png';
import { FaGithub } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Sociallinks from './sociallinks'

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className='w-full overflow-x-hidden sm:w-full  shadow-2xl  appearance-none flex sm:flex-wrap items-center justify-around sticky top-0 z-50'>
        {/* logo */}
        <div className='flex'>
          <img className='md:py-3 sm:py-3 mt-4 w-32 rounded-full' src={logo} alt="Logo" />
        </div>
        {/* Menus */}
        <nav className="sm:flex-grow-1 sm:hidden md:block mt-4 md:py-2 md:px-3 m-3  flex items-center justify-center rounded-3xl  custom-black  shadow-xl gap-6">

            <ul className='hidden lg:flex gap-6 font-medium text-cyan-50'>
              <li><a href='#home' className=' text-yellow-500'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#skills'>Skills</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
         
        </nav>

        {/* right button */}
        
        <button className='block  lg:hidden md:hidden' onClick={openMenu}>
            <RiMenu3Fill className=' size-6 text-white' />
          </button>
        

        {/* .......for Mobile screen  */}
        <ul id='sideMenu' className={`flex md:hidden flex-col gap-4 py-20 px-10 rounded-lg bg-yellow-200 font-semibold fixed top-0 bottom-0 right-0 w-full h-screen z-50 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <RxCross2 />
          </div>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>

          <Sociallinks className="self-end" />
        </ul>
      </div>
    </>
  )
}

export default Navbar2;



{/* <div className='flex items-center gap-4'>
          <a href='https://github.com/Aneela-Kiran' target='_blank' className="hidden lg:flex border border-spacing-2 rounded-full py-2 px-3 m-2 mt-4 ml-40 mb-1 text-white font-bold items-end text-sm hover:bg-yellow-500 hover:text-black gap-2">Github Profile <FaGithub className='m-1 text-md' /></a>
          <button className='block lg:hidden ml-3' onClick={openMenu}>
            <RiMenu3Fill className=' size-6 text-white' />
          </button>
        </div> */}






