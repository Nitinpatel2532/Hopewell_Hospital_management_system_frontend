


import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "../App.css"
import axios from 'axios';


const api_url = 'http://127.0.0.1:8000/addpatient/'
console.log(api_url)

function Patient_signup() {
    const navigate=useNavigate()
    
    const [patient, setpatient] = useState({})
    const [form, setform] = useState({
        First_name: "",
        Last_name: "",
        Contact_number: "",
        Email: "",
        password:"",
        
    })

    const handleform = (e) => {
       
        setform({...form,[e.target.name]:e.target.value})
    }



    function handleaddpatient(e) {
        e.preventDefault()
        axios.post(api_url, form)
            .then(res => navigate('/patientlogin'))
            
            
        .catch(err=>alert("Data is not posted"))
        
    }
  return (
      <>
          <div className="heading-container">
          <h1 className="signup-heading">🩺 Patient Signup Portal</h1>
          <p className="sub-heading">Register to book your appointments easily</p>
          </div>

         <form onSubmit={handleaddpatient} className="signup-form">

  <label>First Name</label>
              <input type="text"
                  name="First_name" 
                  value={form.First_name}
                  onChange={handleform} />

  <label>Last Name</label>
              <input type="text"
                  name="Last_name" 
                  value={form.Last_name}
                  onChange={handleform} />

  <label>Contact</label>
              <input type="text"
                  name="Contact_number" 
                  value={form.Contact_number}
                  onChange={handleform} />

  <label>Email</label>
              <input type="email"
                  name="Email" 
                  value={form.Email}
                  onChange={handleform} />
              
 <label>Password</label>
              <input type="password"
                  name="password" 
                  value={form.password}
                  onChange={handleform} />

  {/* <label>Password</label>
  <input type="password" value={form.Password} onChange={handleform} /> */}

  <button  type='submit' className="signup-btn">Patient Signup</button>
 <p className="login-link">
        Already have an account? <Link to="/patientlogin">Login here</Link>
      </p>
</form>

    </>
  );
};

export default Patient_signup;
