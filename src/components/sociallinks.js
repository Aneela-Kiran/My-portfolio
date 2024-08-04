import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
const Sociallinks = () => {
  return (
    <div>
      <div className='sm:hidden lg:block size-4 py-6  mb-4 flex items-center justify-between gap-4' >
        <ul className='flex text-xl items-center gap-4'>
          {/* <li><a href='' target=''></a>
            <FaFacebook className='text-yellow-500 cursor-pointer' />
          </li> */}
          <li ><a href='https://www.linkedin.com/in/aneelakiran/' target='-blank'>
            <FaLinkedin className='text-yellow-500 cursor-pointer' /> 
            </a>
          </li>
        
          <li  >  <a href='https://x.com/AneelaKira45' target='-blank'>
            <FaSquareXTwitter className='text-yellow-500 cursor-pointer' />
            </a>
          </li>
          <li  >  <a href='https://github.com/Aneela-Kiran' target='-blank'>
            <FaSquareGithub  className='text-yellow-500 cursor-pointer'/>  
            </a>
          </li>
          {/* <li href='' target='-blank' >
            <FaInstagram className='text-yellow-200 cursor-pointer' />
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Sociallinks