import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../Data/projectData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProjectsSlider = () => {

  useEffect(()=>{
    AOS.init()
 },[]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section  id="projects" className="py-12 mt-16 mx-auto m-4 px-8">
      <h1 data-aos="zoom-in" className="text-yellow-500 font-bold text-3xl text-center mb-8">
        Projects
      </h1>
      <Slider {...settings}>
        
        {projects.map((item, index) => (
          <div  key={index} className="shadow-4xl p-3  rounded-lg">
            <div className="bg-slate-300 overflow-hidden rounded-lg  h-64 flex justify-center items-center m-3 ">
              <img
                className="h-full w-full object-cover border-2 hover:scale-125 duration-1000 border-yellow-400"
                src={item.image}
                alt={item.title}
              />
            </div>
            <p className="font-semibold text-gray-50  py-2 ">{item.title}</p>
            <p className="text-purple-400 text-sm ">{item.tech}</p>
           <div className="text-gray-200 text-start  py-2"> <p >{item.description}</p></div>
          </div>
        ))}
   
      </Slider>
    </section>
  );
};

export default ProjectsSlider;

