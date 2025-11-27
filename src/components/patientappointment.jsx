// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import API from '../axios';  // ✅ Use custom axios instance
// import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

// function Patient_appointment() {

//   const [date, setDate] = useState('');
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [department, setDepartment] = useState('');
//   const [address, setAddress] = useState('');
//   const [message, Setmessage] = useState();
//   const [success, setSuccess] = useState(false);

//   const navigate = useNavigate();

//   const patientId = sessionStorage.getItem('id');
//   const name = sessionStorage.getItem('fname');
//   const email = sessionStorage.getItem('Email');
//   const mobile = sessionStorage.getItem('mobile');

//   if (!name) {
//     return (
//       <Container className="p-4">
//         <h2>Please login first</h2>
//       </Container>
//     );
//   }

//   const handleAppointment = async (e) => {
//     e.preventDefault();

//     const appointmentData = {
//       patient: patientId,
//       name,
//       email,
//       mobile,
//       date,
//       blood_group: bloodGroup,
//       department,
//       address,
//     };

//     console.log('Appointment Booked:', appointmentData);

//     try {
//       const response = await API.post("/patientappointment/", appointmentData);  // ✅ FIXED

//       console.log('Response:', response.data);
//       alert("Appointment added successfully!");
//       setSuccess(true);

//     } catch (error) {
//       console.error('Error while booking appointment:', error);
//       Setmessage("Something went wrong while booking!");
//     }

//     // Clear form
//     setDate('');
//     setBloodGroup('');
//     setDepartment('');
//     setAddress('');
//   };


//   return (
//     <Container fluid className="p-4 bg-light min-vh-100">
//       <h2 className="text-center mb-4">📅 Book Your Appointment</h2>

//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Card className="shadow-sm">
//             <Card.Header className="bg-primary text-white">
//               <h5 className="mb-0">Patient Details</h5>
//             </Card.Header>
//             <Card.Body>
//               <p><strong>Patient ID:</strong> {patientId}</p>
//               <p><strong>Name:</strong> {name}</p>
//               <p><strong>Email:</strong> {email}</p>
//               <p><strong>Mobile:</strong> {mobile}</p>
//             </Card.Body>
//           </Card>

//           <Card className="shadow-sm mt-4">
//             <Card.Header className="bg-success text-white">
//               <h5 className="mb-0">Appointment Form</h5>
//             </Card.Header>
//             <Card.Body>

//               {success && (
//                 <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
//                   Appointment booked successfully!
//                 </Alert>
//               )}

//               <Form onSubmit={handleAppointment}>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Select Date</Form.Label>
//                   <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Blood Group</Form.Label>
//                   <Form.Select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
//                     <option value="">Select Blood Group</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Department</Form.Label>
//                   <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)} required>
//                     <option value="">Select Department</option>
//                     <option value="Cardiology">Cardiology</option>
//                     <option value="Neurology">Neurology</option>
//                     <option value="Orthopedics">Orthopedics</option>
//                     <option value="Pediatrics">Pediatrics</option>
//                     <option value="Dermatology">Dermatology</option>
//                     <option value="ENT">ENT</option>
//                     <option value="Gastroenterology">Gastroenterology</option>
//                     <option value="General Surgery">General Surgery</option>
//                     <option value="Psychiatry">Psychiatry</option>
//                     <option value="Oncology">Oncology</option>
//                     <option value="Gynecology">Gynecology</option>
//                     <option value="Ophthalmology">Ophthalmology</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Address</Form.Label>
//                   <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} required />
//                 </Form.Group>

//                 <div className="text-center">
//                   <Button variant="success" type="submit">
//                     📑 Book Appointment
//                   </Button>
//                 </div>

//               </Form>

//             </Card.Body>
//           </Card>

//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Patient_appointment;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Patient_appointment(params) {
  const [date, setDate] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');
  const [message, Setmessage] = useState();
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const patientId = sessionStorage.getItem('id');
  const name = sessionStorage.getItem('fname');
  const email = sessionStorage.getItem('Email');
  const mobile = sessionStorage.getItem('mobile');

  if (!name) {
    return (
      <Container className="p-4">
        <h2>Please login first</h2>
      </Container>
    );
  }

  const handleAppointment = async (e) => {
    e.preventDefault();

    const appointmentData = {
      patient: patientId,   // Only send backend accepted fields
      date,
      blood_group: bloodGroup,
      department,
      address,
    };

    console.log('Appointment Booked:', appointmentData);

    try {
      const response = await axios.post(
        'https://hopewell-hospital-management-system.onrender.com/',
        appointmentData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response.data);
      alert("Appointment added successfully!");
      setSuccess(true);
    } catch (error) {
      console.error('Error while booking appointment:', error.response?.data);
      Setmessage("Something went wrong while booking!");
    }

    setDate('');
    setBloodGroup('');
    setDepartment('');
    setAddress('');
  };


  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <h2 className="text-center mb-4">📅 Book Your Appointment</h2>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">Patient Details</h5>
            </Card.Header>
            <Card.Body>
              <p><strong>Patient ID:</strong> {patientId}</p>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Mobile:</strong> {mobile}</p>
            </Card.Body>
          </Card>

          <Card className="shadow-sm mt-4">
            <Card.Header className="bg-success text-white">
              <h5 className="mb-0">Appointment Form</h5>
            </Card.Header>
            <Card.Body>
              {success && (
                <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
                  Appointment booked successfully!
                </Alert>
              )}

              <Form onSubmit={handleAppointment}>
                <Form.Group className="mb-3">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                    <option value="">Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="ENT">ENT</option>
                    <option value="Gastroenterology">Gastroenterology</option>
                    <option value="General Surgery">General Surgery</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Oncology">Oncology</option>
                    <option value="Gynecology">Gynecology</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} required />
                </Form.Group>

                <div className="text-center">
                  <Button variant="success" type="submit">
                    📑 Book Appointment
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Patient_appointment;
