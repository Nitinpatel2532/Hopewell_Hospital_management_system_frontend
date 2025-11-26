import React from 'react';
import Navbar1 from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import EmergencyBanner from './Contact';

function Index(){
  return (
    <>
      <EmergencyBanner/>
      {/* creating navbar */}
      <Navbar1 />
      
          <Outlet />
          
          <Footer/>
    </>
  );
};

export default Index;