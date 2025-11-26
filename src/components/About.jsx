import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import hospitalImg from "../assets/image/hospital.jpg"; // replace with your image

const AboutHospital = () => {
  return (
    <section style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="align-items-center">
          {/* Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={hospitalImg}
              alt="Hopewell Hospital"
              className="img-fluid rounded shadow"
              style={{ objectFit: "cover", height: "400px", width: "100%" }}
            />
          </Col>

          {/* Text */}
          <Col md={6}>
            <h2 className="mb-4">About Hopewell Hospital</h2>
            <p>
              Hopewell Hospital is a multi-specialty healthcare institution committed to delivering exceptional medical care through advanced technology and compassionate service. Our expert team of specialists ensures the highest standards of patient safety and well-being.
            </p>

            <h5 className="mt-4">Our Vision</h5>
            <p>
              To be a trusted leader in healthcare, offering innovative treatments and personalized care for every patient.
            </p>

            <h5 className="mt-4">Our Mission</h5>
            <p>
              To provide accessible, affordable, and comprehensive medical services with integrity, excellence, and empathy.
            </p>

            <Button as={Link} to="/about" variant="primary" className="mt-3">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHospital;
