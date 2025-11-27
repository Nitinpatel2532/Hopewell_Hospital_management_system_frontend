import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";

// Updated API URL to Render backend
const api_url = 'https://hopewell-hospital-management-system.onrender.com/addpatient/';

function Superdashboard() {
  const [patients, setPatients] = useState([]);
  const user = sessionStorage.getItem('Superuser');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(api_url)
      .then(response => {
        setPatients(response.data); 
      })
      .catch(error => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('Superuser');
    navigate('/Superlogin');
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">🏥 MedCare Dashboard</h1>
      <p className="dashboard-welcome">
        Hello, <strong>{user}</strong> 👋 — manage your hospital records with ease.
      </p>

      <h2 className="section-heading">📝 Patient List</h2>
      <ul className="patient-list">
        {Array.isArray(patients) ? (
          <table className="patient-table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{patient.First_name}</td>
                  <td>{patient.Last_name}</td>
                  <td>{patient.Contact_number}</td>
                  <td>{patient.Email}</td>
                  <td>
                    <button className="btn update-btn">Update</button>
                    <button className="btn delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No patients found or wrong data format</p>
        )}
      </ul>

      <button className="btn logout-btn" onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
}

export default Superdashboard;
