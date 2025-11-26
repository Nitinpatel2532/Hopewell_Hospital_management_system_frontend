import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0d6efd", color: "#fff", padding: "40px 0" }}>
      <Container>
        <Row>
          {/* Hospital Logo and Name */}
          <Col md={4} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="Hopewell Logo"
                style={{ borderRadius: "50%", width: "50px", marginRight: "10px" }}
              />
              <h4 className="mb-0">Hopewell Hospital</h4>
            </div>
            <p>Your health is our priority. Providing trusted care and advanced facilities for every family.</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
              <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
              <li><a href="/departments" style={{ color: "#fff", textDecoration: "none" }}>Departments</a></li>
              <li><a href="/doctor" style={{ color: "#fff", textDecoration: "none" }}>Our Doctors</a></li>
              <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </Col>

          {/* Contact Info & Social Links */}
          <Col md={4}>
            <h5>Contact Us</h5>
            <p className="mt-3">
              <FaMapMarkerAlt className="me-2" /> 123 Hopewell Street, Bhopal
            </p>
            <p>
              <FaPhone className="me-2" />  +91 98765 43210
            </p>
            <p>
              <FaEnvelope className="me-2" /> info@hopewellhospital.com
            </p>
            <div className="mt-3">
              <a href="#" className="text-white me-3 fs-5"><FaFacebookF /></a>
              <a href="#" className="text-white me-3 fs-5"><FaTwitter /></a>
              <a href="#" className="text-white me-3 fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Hopewell Hospital. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
