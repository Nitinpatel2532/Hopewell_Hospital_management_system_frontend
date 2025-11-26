import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OtpLogin() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('send');
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate()

  // set page tab title
  useEffect(() => {
    document.title = "Patient Email OTP Verification";
  }, []);

  const handleSendOtp = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/send-otp/', { email });
      setStep('verify');
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/verify-otp/', { email, otp });
        setMessage(res.data.message);
        navigate('/patientdashboard')
    } catch (err) {
      setMessage(err.response?.data?.error || 'Failed to verify OTP');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '30px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Patient Email OTP Verification</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />

      {step === 'verify' && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
      )}

      {step === 'send' ? (
        <button
          onClick={handleSendOtp}
          style={{ padding: '10px', width: '100%', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
        >
          Send OTP
        </button>
      ) : (
        <button
          onClick={handleVerifyOtp}
          style={{ padding: '10px', width: '100%', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}
        >
          Verify OTP
        </button>
      )}

      <p style={{ marginTop: '15px', color: '#333', textAlign: 'center' }}>{message}</p>
    </div>
  );
}

export default OtpLogin;
