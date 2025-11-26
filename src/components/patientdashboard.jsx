import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Patientdashboard() {
  const name = sessionStorage.getItem('fname');
  const lname = sessionStorage.getItem('lname');
  const Email = sessionStorage.getItem('Email');
  const mobile = sessionStorage.getItem('mobile');
  const password = sessionStorage.getItem('password');
  const id = sessionStorage.getItem('id');

  const navigate = useNavigate();

  const appointment = () => {
    navigate('/patientappointment');
  };

  const logout = () => {
    sessionStorage.clear(); // clears all stored session data
    navigate('/patientlogin'); // redirect to login or homepage
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <h2 className="text-center mb-4">🏥 Patient Dashboard</h2>

      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Patient Details</h5>
              <Button variant="danger" size="sm" onClick={logout}>
                🔒 Logout
              </Button>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6} className="mb-3">
                  <strong>First Name:</strong> {name}
                </Col>
                <Col md={6} className="mb-3">
                  <strong>Last Name:</strong> {lname}
                </Col>
                <Col md={6} className="mb-3">
                  <strong>Email:</strong> {Email}
                </Col>
                <Col md={6} className="mb-3">
                  <strong>Mobile:</strong> {mobile}
                </Col>
                <Col md={6} className="mb-3">
                  <strong>Password:</strong> {password}
                </Col>
                <Col md={6} className="mb-3">
                  <strong>Patient ID:</strong> {id}
                </Col>
              </Row>
              <div className="text-center mt-4">
                <Button variant="success" onClick={appointment}>
                  📅 Book Appointment
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Patientdashboard;
