import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import reactLogo from '../assets/React1.png'; 
import js from '../assets/java.png';
import node from '../assets/nodejs.png';
import next from '../assets/next.png';
import html5 from '../assets/html5.png';
import tailwind from '../assets/tailwindcss.png';
import typescript from '../assets/typescript.png';
import Gsap from '../assets/Gsap1.png';


const skillsData = [
  { id: 1, imgSrc: reactLogo  },
  { id: 2, imgSrc: js },
  { id: 3, imgSrc: node },
  { id: 4, imgSrc: next },
  { id: 5, imgSrc: html5 },
  { id: 6, imgSrc: tailwind },
  { id: 7, imgSrc: typescript},
  { id: 8, imgSrc: Gsap }
];


const Myskill = () => {

  useEffect(()=>{
     AOS.init()
  },[]);

    return(
  <section id='skills' className="about-background py-12 mt-16 mx-auto m-4 px-8">
    <h2 data-aos="zoom-in" className="text-center text-4xl font-bold text-yellow-500 mb-8">Development Skill</h2>
    <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">

      {skillsData.map(skill => (
        <div data-aos="zoom-in-up" key={skill.id} className="p-2 mb-4 flex items-center justify-center rounded-xl shadow-xl overflow-hidden">
          <img src={skill.imgSrc}  className="h-24 w-auto object-cover" />
        </div>

      ))}
    </div>
  </section>
)}

export default Myskill;

