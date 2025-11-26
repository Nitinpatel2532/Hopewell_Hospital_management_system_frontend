import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../assets/image/banner1.jpg";
import banner2 from "../assets/image/banner2.jpg";
import banner3 from "../assets/image/banner3.jpg";
import banner4 from "../assets/image/banner4.jpg";

const HospitalCarousel = () => {
  return (
    <Carousel fade interval={2000}>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
          style={{ objectFit: "cover", height: "450px" }}
        />
        <Carousel.Caption>
          <h3>Welcome to Hopewell Hospital</h3>
          <p>Providing trusted, patient-focused healthcare services with cutting-edge technology.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          style={{ objectFit: "cover", height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Expert Doctors & Medical Staff</h3>
          <p>Our experienced team ensures quality care and personal attention to every patient.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
          style={{ objectFit: "cover", height: "500px" }}
        />
        <Carousel.Caption>
          <h3>Advanced Facilities</h3>
          <p>Hopewell Hospital is equipped with modern infrastructure for efficient and safe treatments.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner4}
          alt="Fourth slide"
          style={{ objectFit: "cover", height: "500px" }}
        />
        <Carousel.Caption>
          <h3>24/7 Emergency Services</h3>
          <p>Quick, reliable, and compassionate emergency care around the clock.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HospitalCarousel;
