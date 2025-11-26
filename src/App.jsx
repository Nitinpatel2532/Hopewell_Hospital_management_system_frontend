import { useState } from 'react'
import './App.css'
import Superlogin from './components/Superlogin'
import Index from './components'
import { Route,Routes } from 'react-router-dom'
import Patient_signup from './components/Appointment'
import Home from './components/Home'
import AboutHospital from './components/About'
import Departments from './components/Departments'
import DoctorsCarousel from './components/Doctors'
import QuickBooking from './components/Appointment'
import TestimonialsCarousel from './components/Testimonial'
import LatestBlog from './components/Blog'
import PatientLogin from './components/Login_patient'
import Superdashboard from './components/Superdashboard'
import Patientdashboard from './components/patientdashboard'
import Patient_appointment from './components/patientappointment'
import OtpLogin from './components/otplogin'


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Index />}>
          <Route index element={<Home />} />
          <Route path='superlogin' element={<Superlogin />} />
          <Route path='patient' element={<Patient_signup />} />
          <Route path='about' element={<AboutHospital />} />
          <Route path='departments' element={<Departments />} />
          <Route path='doctor' element={<DoctorsCarousel />} />
          <Route path='appointment' element={<Patient_signup />} /> 
          <Route path='blog' element={<LatestBlog />} /> 
          <Route path='patientlogin' element={<PatientLogin />} /> 
          <Route path='Superdashboard' element={<Superdashboard />} />
          <Route path='patientdashboard' element={<Patientdashboard />} />
          <Route path='patientappointment' element={<Patient_appointment />} />
          <Route path='sendotp' element={ <OtpLogin/>} />

          
          {/* <Route 
          path="/Superdashboard" 
          element={isLoggedIn ? <Superdashboard /> : <Navigate to="/Superlogin" />} 
        />
        <Route 
          path="/" 
          element={<Navigate to={isLoggedIn ? "/Superdashboard" : "/Superlogin"} />} 
        /> */}
          
        </Route>
      </Routes>

    </>
  )
}

export default App
