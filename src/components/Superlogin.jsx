import React, { useState } from "react";
import API from "../axios";   
import { useNavigate } from 'react-router-dom';

function Superlogin() {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [psw, setpassword] = useState('');
  const [message, Setmessage] = useState('');
  const [loading, Setloading] = useState(false);

  const handlelogin = async (e) => {
    e.preventDefault();
    Setloading(true);
    Setmessage('');

    try {
      const response = await API.post("/superadmin/superlogin/", { 
        name: name.trim(),
        psw: psw.trim()
      });

      if (response.data.message === 'Login successful') {
        sessionStorage.setItem('Superuser', name.trim());
        Setmessage('Login successful');

        setTimeout(() => {
          navigate('/Superdashboard');
        }, 4000);

        return;
      } else {
        Setmessage('Unexpected error');
      }
    } 
    catch (error) {
      if (error.response) {
        Setmessage(error.response.data.error || "Login failed");
      } else {
        Setmessage("Server error or no response");
      }
    } 
    finally {
      Setloading(false);
      setpassword('');
    }
  };

  return (
    <>
      <div className="superlogin">
        <div className="superadmin-login-container">
          <h2>SuperAdmin Login</h2>
          <p className="login-description">
            Welcome to the SuperAdmin portal. Please enter your credentials to securely access and manage the system dashboard.
          </p>

          <form onSubmit={handlelogin}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required
                onChange={(e) => setname(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required
                onChange={(e) => setpassword(e.target.value)} />
            </div>

            <button type="submit" disabled={loading} className="login-btn">
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <p className="forgot-link">
              <a href="#">Forgot Password?</a>
            </p>
          </form>

          {message && (
            <p className={`message ${message === 'Login successful' ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Superlogin;
