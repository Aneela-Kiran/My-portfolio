
import React from 'react';
import reactLogo from '../assets/React1.png'; 
import js from '../assets/java.png';
import node from '../assets/nodejs.png';
import next from '../assets/next.png';
import html5 from '../assets/html5.png';
import tailwind from '../assets/tailwindcss.png';
import typescript from '../assets/typescript.png';
import Gsap from '../assets/Gsap1.png';


const Myskill = () => (
  <div id='skills' className="about-background py-12 mt-16  mx-auto m-4 px-8 ">
    <h2 className="text-center text-4xl font-bold text-yellow-500 mb-8">Development Skill</h2>
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">

      <div className=" m-8  rounded-lg flex items-center justify-center">
        <img src={reactLogo}  className="h-24 w-auto rounded-xl shadow-2xl object-cover" />
      </div>
      <div className=" p-4 rounded-lg flex items-center justify-center">
        <img src={js}  className="h-24 w-auto rounded-xl shadow-xl object-cove" />
      </div>
      <div className=" p-4 rounded-lg flex items-center justify-center">
        <img src={node}  className="h-24 w-auto rounded-xl shadow-xl object-cove" />
      </div>

<div className=" p-4 rounded-lg flex items-center justify-center">
        <img src={next}  className="h-24 w-auto rounded-xl shadow-xl object-cove" />
      </div>

      <div className=" p-4 rounded-lg flex items-center justify-center">
        <img src={html5}  className="h-24 w-24 rounded-xl shadow-xl object-cove" />
      </div>
      
      
      <div className=" p-4 rounded-lg flex items-center justify-center">
        <img src={tailwind}  className="h-24 w-auto rounded-xl shadow-xl object-cove" />
      </div>
      
      <div className=" p-4 rounded-lg  flex items-center justify-center">
        <img src={typescript}  className="h-24 w-24 rounded-xl shadow-xl object-cove" />
      </div>

      <div className=" p-4 rounded-lg  flex items-center justify-center">
        <img src={Gsap}  className="h-28 w-28 rounded-xl shadow-xl object-cove" />
      </div>

    </div>
  </div>
);

export default Myskill;
