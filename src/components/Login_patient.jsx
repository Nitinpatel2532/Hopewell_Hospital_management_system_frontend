import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config';

const PatientLogin = () => {
  const [email, setEmail] = useState('');
  const [psw, setPassword] = useState('');
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/patientlogin/`, { email, psw });

      const { id, fname, lname, Email, mobile, password } = response.data;

      sessionStorage.setItem('id', id);
      sessionStorage.setItem('fname', fname);
      sessionStorage.setItem('lname', lname);
      sessionStorage.setItem('Email', Email);
      sessionStorage.setItem('mobile', mobile);
      sessionStorage.setItem('password', password);

      // Redirect to OTP screen
      navigate('/sendotp');
      
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("API not working: " + error.message);
      }
    }
  };

  return (
    <div className="Login" style={{ display: "flex", justifyContent: "center" }}>
      <div className="login-container">
        <h2>Welcome Back, Patient!</h2>
        <p className="login-description">
          Please log in to securely access your medical records, book appointments, 
          and stay connected with your healthcare provider. Your health, your control.
        </p>

        <form onSubmit={handlelogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              required
              onChange={e => setEmail(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              required
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="register-link">
            Don’t have an account? <Link to="/appointment">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PatientLogin;
