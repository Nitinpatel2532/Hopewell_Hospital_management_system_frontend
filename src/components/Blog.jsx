import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import blog1 from "../assets/image/blog1.png";
import blog2 from "../assets/image/blog2.png";
import blog3 from "../assets/image/blog3.webp";

const articles = [
  {
    title: "10 Tips for a Healthy Heart",
    description: "Simple lifestyle changes that can help you maintain a strong, healthy heart at any age.",
    image: blog1,
    link: "/blog/healthy-heart",
  },
  {
    title: "Managing Stress Effectively",
    description: "Learn easy techniques to keep your stress levels under control for better mental well-being.",
    image: blog2,
    link: "/blog/manage-stress",
  },
  {
    title: "Importance of Regular Health Checkups",
    description: "Why regular checkups can help in early detection and prevention of major health issues.",
    image: blog3,
    link: "/blog/health-checkups",
  },
];

const LatestBlog = () => {
  return (
    <section style={{ padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5">Latest Health Articles</h2>
        <Row>
          {articles.map((item, index) => (
            <Col md={4} sm={6} className="mb-4" key={index}>
              <Card className="shadow-sm h-100 border-0">
                <Card.Img variant="top" src={item.image} style={{ height: "220px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary" href={item.link}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestBlog;
