import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaBaby,
  FaProcedures,
  FaXRay,
  FaUserMd,
} from "react-icons/fa";

const departments = [
  {
    title: "Cardiology",
    icon: <FaHeartbeat size={50} color="#dc3545" />,
    description: "Advanced heart care services with expert cardiologists and modern facilities.",
  },
  {
    title: "Neurology",
    icon: <FaBrain size={50} color="#6f42c1" />,
    description: "Comprehensive diagnosis and treatment for neurological disorders and conditions.",
  },
  {
    title: "Orthopedics",
    icon: <FaBone size={50} color="#0d6efd" />,
    description: "Specialized bone and joint care including trauma, fractures, and joint replacements.",
  },
  {
    title: "Pediatrics",
    icon: <FaBaby size={50} color="#fd7e14" />,
    description: "Compassionate healthcare services for infants, children, and adolescents.",
  },
  {
    title: "ICU",
    icon: <FaProcedures size={50} color="#198754" />,
    description: "Fully equipped Intensive Care Units offering 24/7 emergency and critical care.",
  },
  {
    title: "Radiology",
    icon: <FaXRay size={50} color="#20c997" />,
    description: "State-of-the-art imaging and diagnostic services, including X-ray and MRI.",
  },
  {
    title: "General Surgery",
    icon: <FaUserMd size={50} color="#ffc107" />,
    description: "Experienced surgical team handling a range of general and specialized procedures.",
  },
];

const Departments = () => {
  return (
    <section style={{ padding: "10px 0", backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-5">Our Departments</h2>
        <Row>
          {departments.map((dept, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="text-center h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="mb-3">{dept.icon}</div>
                  <Card.Title>{dept.title}</Card.Title>
                  <Card.Text>{dept.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Departments;
