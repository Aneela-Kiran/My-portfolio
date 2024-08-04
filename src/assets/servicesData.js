import React from 'react';
import { FaReact, FaWordpress  } from 'react-icons/fa';
import { FaMobileRetro } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and dynamic websites using modern technologies. Expertise in HTML, CSS, and JavaScript frameworks.',
    icon: <DiJavascript className='inline-block'/>,
    link: '#about' ,
  },
  {
    title: 'Web Design',
    description: 'Creating user-friendly and visually appealing designs. Focus on enhancing user experience and interface aesthetics.',
    icon: <RiTailwindCssFill className='inline-block' />,
    link: '#about',
  },
  {
    title: 'Fully-Responsive',
    description: 'Ensuring websites are fully responsive and work seamlessly on all devices. Mobile-first design approach for optimal performance',
    icon: <FaMobileRetro className='inline-block'/>,
    link: '#about',
  },
  {
    title: 'Frontend Optimization',
    description: 'Optimizing frontend performance for a smoother user experience. Techniques include lazy loading, code splitting, and asset optimization.',
    icon: <IoSettingsOutline className='inline-block' />,
    link: '#about',
  },
  {
    title: 'Single Page Applications',
    description: 'Developing SPAs for a seamless user experience. Utilizes modern JavaScript frameworks for fast and interactive applications',
    icon: <FaReact className="inline-block" />,
    link: '#about',
  },
  {
    title: 'WordPress Sites',
    description: 'Creating and customizing WordPress sites to meet your specific needs. Expertise in themes, plugins, and site management.',
    icon: <FaWordpress className="inline-block" />,
    link: '#about',
  },
];

export default services;