import React from 'react'
import Sociallinks from './sociallinks'
import logo from '../assets/about.jpeg'
import image from '../assets/world-wide.png';
const ContactMe = () => {
  return (
    <section id='contact' className='py-12 mt-16'>
      <div className='container mx-auto px-6  m-5 '>
      <h1 className='text-yellow-500 text-4xl font-bold mb-12 text-center '>Get In Touch </h1>
      
      <div className='flex justify-around items-center'>

                {/*
                <div className='custom-black shadow-2xl rounded-xl p-8 '>
                <h className="color gradient-text  tracking-tight animate-pulse stroke-yellow-200 text-5xl">Lets Talk</h>
                <p className='text-white my-4 '>I am Currently availble to talk on new projects <br></br>feel free to send me a Messgae  about  anything<br></br> that you want me to work on You can contact<br></br> any Time <b></b> 
                 </p>
                 <p className='mb-2 text-white'>Email: aneelakiran839@gmail.com </p> 
                 
                <h1 className='font-bold text-yellow-500'>Find ME </h1>
                  <Sociallinks/> 
                  </div>*/}
              


              {/* Contact Form  */}
              <div className=' custom-black shadow-3xl rounded-xl p-10 '>
                <form>
                <div className="flex space-x-4">
                     <div className="flex-1">
                      <label htmlFor="name" className="block text-sm  text-white">YOUR NAME</label>
                   <input
                   type="text"
                   className="mt-1 block w-full text-white  about-background  py-2 px-3 bg-white-500 rounded-md shadow-xl focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm"
                  />
              </div>
              <div className="flex-1">
                 <label htmlFor="phone" className="block text-sm  text-white">PHONE NUMBER</label>
                 <input
                  type="text"
                  className="mt-1 block w-full  py-2 px-3 text-white about-background rounded-md shadow-2xl focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:text-sm"
                  />
               </div>
                      </div>
                  <p className='text-white mb-1' >Email</p>
                  <input className='mb-3 shadow appearance-none text-white  about-background  rounded w-full py-2 px-3 leading-tight  focus:shadow-outline ' type='email'></input>
                  <p className='text-white mb-1'>Subject</p>
                  <input type='text' className='mb-3 shadow  about-background text-white appearance-none  rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'></input>
                  <p className='text-white mb-1'>Your Message</p>
                 <textarea
                   className=" shadow appearance-none text-white rounded w-full py-2 px-3  about-background   "
                    rows={4}
                 ></textarea>

                 <a href=' mailto:aneelakiran839@gmail.com '   class=" text-white w-full font-bold  py-2 px-4     shadow-3xl hover:shadow-[0_0_15px_5px_rgba(255,255,0,0.50)] transition duration-300 ease-in-out  flex items-center justify-center  gap-2">
                  Send Message
                </a>

                </form>
              </div>

              <div className='mt-14 p-4'>
               <img className='size-96 ' src={image}></img>
               </div>
      </div>
      </div>

    </section>
 
  )
}

export default ContactMe
