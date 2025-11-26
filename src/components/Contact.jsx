import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css'; // for custom styling if needed

const EmergencyBanner = () => {
  return (
    <div className="emergency-banner text-white text-center">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md="auto">
            🚨 <strong>Emergency Helpline:</strong> 📞 1800-123-4567 (24x7)
          </Col>
          <Col xs="auto" className="mt-2 mt-md-0">
            <Button href="tel:18001234567" variant="light" className="call-now-btn">
              📞 Call Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmergencyBanner;
