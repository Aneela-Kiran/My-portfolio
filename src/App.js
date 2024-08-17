import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import About from "./components/about";
import Services from "./components/Services";
import ContactMe from "./components/contact-me";
import Footer from "./components/footer";
import Myskill from "./components/Myskill";
import ProjectsSlider from "./components/projects";
import "./index.css";
// import { eventWrapper } from '@testing-library/user-event/dist/utils';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    const eventHandler = (e) => {
      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power1.out",
      });
    };
    window.addEventListener("mousemove", eventHandler);

    return () => {
      window.removeEventListener("mousemove", eventHandler);
    };
  }, []);

  return (
    <>
      <div className="cursor bg-yellow-500"></div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Myskill />
      <ProjectsSlider />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
