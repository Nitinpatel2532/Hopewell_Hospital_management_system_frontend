import React from 'react';
import HospitalCarousel from './HOmeimagecrousel';
import AboutHospital from './About';
import Departments from './Departments';
import DoctorsCarousel from './Doctors';
import Patient_signup from './Appointment';     
import TestimonialsCarousel from './Testimonial';
import LatestBlog from './Blog';

import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  
  useEffect(() => {
  AOS.init({
    duration: 1000,  // animation duration in ms
    once: true       // whether animation should happen only once
  });
  }, []);
  
  return (
    <>
      <div data-aos="zoom-in-left">
          
        <HospitalCarousel />
      </div>
       <div data-aos="zoom-in-left">
      
        <AboutHospital />
        
      </div>
      <div data-aos="zoom-in-left"><Departments /></div>
      <div data-aos="zoom-in-left"><DoctorsCarousel /></div>
      <div data-aos="zoom-in-left"><Patient_signup /></div>
      <div data-aos="zoom-in-left"><TestimonialsCarousel /></div>
      <div data-aos="zoom-in-left"><LatestBlog /></div>
         
          
          
          
        
        
        
          
      
    </>
  );
};

export default Home;