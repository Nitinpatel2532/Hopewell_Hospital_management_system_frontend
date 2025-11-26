import React from "react";
import { Carousel, Card, Container } from "react-bootstrap";
import doctor1 from "../assets/image/doctor1.jpg";
import doctor2 from "../assets/image/doctor2.jpg";
import doctor3 from "../assets/image/doctor3.jpg";
import doctor4 from "../assets/image/doctor4.jpg";

const doctors = [
  {
    name: "Dr. Rajiv Mehra",
    specialty: "Cardiologist",
    experience: "15 Years",
    photo: doctor1,
  },
  {
    name: "Dr. Ananya Gupta",
    specialty: "Neurologist",
    experience: "12 Years",
    photo: doctor2,
  },
  {
    name:"Dr. Neha Sharma" ,
    specialty: "Orthopedic Surgeon",
    experience: "18 Years",
    photo: doctor3,
  },
  {
    name: "Dr. Vikram Singh",
    specialty: "Pediatrician",
    experience: "10 Years",
    photo: doctor4,
  },
];

const DoctorsCarousel = () => {
  return (
    <section style={{ padding: "60px 0", backgroundColor: "lightgreen" }}>
      <Container>
        <h2 className="text-center mb-5">Meet Our Doctors</h2>
        <Carousel indicators={false} controls={true} interval={2000}>
          {doctors.map((doctor, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <Card className="text-center shadow-sm border-0" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={doctor.photo} style={{ height: "300px", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{doctor.name}</Card.Title>
                    <Card.Text>
                      <strong>Specialty:</strong> {doctor.specialty}<br />
                      <strong>Experience:</strong> {doctor.experience}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default DoctorsCarousel;
