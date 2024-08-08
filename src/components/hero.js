import React from "react";
import image from "../assets/pc1.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="flex flex-col-reverse   justify-center md:flex-row mt-10  md:justify-evenly  items-center py-3 mx-auto m-4 px-8"
      >
        {/* hero Text */}
        <div className="m-3 mb-2 mt-7 px-3 mx-auto md:mx-0  md:py-5 leading-snug text-center md:text-left text-white text-sm  ">
          <h1>
            <span className="text-sm py-2">Hello,There Welcome to my site</span>{" "}
            <br></br>
            <span className="py-2   mt-2 animate-fadeIn text-3xl sm:text-5xl ">
              I'm Aneela Kiran
            </span>
          </h1>
          <TypeAnimation
            className="text-yellow-500 inline-block text-[2em] m-2 sm:text-6xl mb-3 font-bold"
            sequence={[
              "Frontend Developer",
              2000,
              "React+Tailwindcss",
              1000,
              "Typescript+Javascript",
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <div className="max-w-xl  mx-14 sm:mx-auto">
            <p className="text-sm md:text-xl text-gray-400  leading-relaxed hover:text-white ">
              Passionate Frontend Developer focused on creating user-friendly
              responsive, and visually appealing websites.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex md:items-start  md:justify-start mt-8 justify-center items-center  ">
            <a
              href="#contact"
              className=" text-white font-bold m-4 py-3 px-14 rounded-full  shadow-[0_0_15px_5px_rgba(255,255,0,0.50)]  hidden md:block"
            >
              Hire me
            </a>

            <a
              href="https://drive.google.com/file/d/1TimMCDmqNMmvYF5DSYKTLGzeONtbKYPz/view?usp=drive_link"
              target="_blank"
              className=" border border-spacing-2 border-yellow-500 hover:shadow-[0_0_15px_5px_rgba(255,255,0,0.50)] hover:border-none text-white font-bold m-4 py-3 px-6   rounded-full shadow-lg  flex items-end  gap-2  "
            >
              Download CV <MdOutlineFileDownload className="mb-[2px] text-sm font-bold" />
            </a>
          </div>
        </div>

        {/* picture  */}

        <div className="mt-6 ml-10 h-100 w-auto overflow-hidden rounded-full  shadow-2xl   ">
          <img
            className="w-80 h-96  object-cover"
            src={image}
            alt="image not found"
          ></img>
        </div>
      </section>
      </>
  );
};

export default HeroSection;
