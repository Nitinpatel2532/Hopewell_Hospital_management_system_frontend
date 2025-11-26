import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaInfoCircle, FaUserMd, FaThList, FaBlog, FaEnvelope } from "react-icons/fa";
import logo from "../assets/image/logo.png";

const Navbar1 = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-top me-2"
            style={{ borderRadius: "50%" }}
            width={"50px"}
          />
          Hopewell+
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars style={{ color: "#fff" }} />
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><FaHome className="me-2" /> Home</Nav.Link>
            <Nav.Link as={Link} to="/about"><FaInfoCircle className="me-2" /> About</Nav.Link>
            <Nav.Link as={Link} to="/doctor"><FaUserMd className="me-2" /> Doctor</Nav.Link>
            <Nav.Link as={Link} to="/departments"><FaThList className="me-2" /> Departments</Nav.Link>
            <Nav.Link as={Link} to="/blog"><FaBlog className="me-2" /> Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact"><FaEnvelope className="me-2" /> Contact</Nav.Link>
          </Nav>

          {/* Make an Appointment Button */}
          <Button
            as={Link}
            to="/appointment"
            className="ms-lg-3"
            style={{
              backgroundColor: "#ffc107",
              borderColor: "#ffc107",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "30px",
              padding: "4px 8px",
            }}
          >
            Make an Appointment
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
