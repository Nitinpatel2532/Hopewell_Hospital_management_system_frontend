import React from "react";
import { Carousel, Container, Card } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Aman Verma",
    rating: 5,
    message: "Hopewell Hospital gave me a new life. The staff is highly professional and caring. Highly recommended!",
  },
  {
    name: "Sneha Kapoor",
    rating: 4.5,
    message: "Wonderful doctors and clean environment. They handled my surgery with utmost care. Thank you!",
  },
  {
    name: "Rohan Malhotra",
    rating: 5,
    message: "ICU services are excellent and doctors are available 24x7. Best hospital in town for emergencies.",
  },
];

const TestimonialsCarousel = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i} color="#ffc107" />
          ))}
        {halfStar && <FaStarHalfAlt color="#ffc107" />}
      </>
    );
  };

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-5">What Our Patients Say</h2>
        <Carousel indicators={false} controls={true} interval={4000}>
          {testimonials.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <Card className="text-center shadow-sm border-0" style={{ maxWidth: "600px" }}>
                  <Card.Body>
                    <Card.Title className="mb-3">{item.name}</Card.Title>
                    <div className="mb-3">{renderStars(item.rating)}</div>
                    <Card.Text>"{item.message}"</Card.Text>
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

export default TestimonialsCarousel;
