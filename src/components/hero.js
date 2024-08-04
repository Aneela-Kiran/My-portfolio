import React from 'react'
import image from '../assets/pc1.png'
import { MdOutlineFileDownload } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (

    <div id='home' className='sm:flex sm:flex-col-reverse md:flex-row mt-10  lg:flex items-center justify-center py-3'>



        {/* hero Text */}
      <div className='sm:m-5 md:mb-2 md:mt-7  md:px-6 md:py-5 text-white font-medium '>
        <h1 className=' mb-3 text-6xl '><span className='text-sm py-2'>Hello,There Welcome to my site</span> <br></br><span className='py-2 mt-2 animate-fadeIn sm:text-5xl  '>I'm Aneela Kiran</span></h1>
      <TypeAnimation
              className="text-yellow-500  mb-3 font-bold"
              sequence={[

                "  Frontend Developer",
                2000, 
                "React+Tailwindcss",
                1000,
                "Typescript+Javascript",
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3em", display: "inline-block" }}
              repeat={Infinity}
            />
      <p>A passionate Frontend Developer dedicated to crafting visually appealing <br></br> and user-friendly websites. Specializing in turning innovative designs  into <br></br>seamless digital experiences, I focus on delivering high-quality, responsive <br></br>and engaging interfaces</p>
          {/* Buttons */}
      <div className='flex md:items-start md:justify-start mt-5 sm:justify-center sm:items-center  animate-slideIn' >
      <a href='#contact' className=" text-white font-bold m-4 py-2 px-12 border border-spacing-2 rounded-full shadow-lg hover:shadow-[0_0_15px_5px_rgba(255,255,0,0.50)] transition duration-300 ease-in-out sm:hidden md:block">
       Hire me
       </a>
       
      <a href='https://drive.google.com/file/d/1TimMCDmqNMmvYF5DSYKTLGzeONtbKYPz/view?usp=drive_link' target='_blank' className=" text-white font-bold m-4 py-2 px-4   rounded-full shadow-lg                 shadow-[0_0_15px_5px_rgba(255,255,0,0.50)] transition duration-300 ease-in-out    flex items-end  gap-2 sm:py-2 sm:px-6  ">
       Download CV <MdOutlineFileDownload  className='mb-1 font-bold'/>
       </a>
      </div> 
      </div>
      
     {/* picture  */}
        <div className='mt-6 ml-10 overflow-hidden rounded-full  shadow-2xl   '>
        <img className='w-96 h-100  'src={image} alt='image not found'></img>
        </div> 
      </div>
  )
}

export default HeroSection


