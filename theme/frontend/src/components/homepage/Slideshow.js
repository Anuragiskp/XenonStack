import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slideshow.css'; 

const slides = [
  {
    image: "/Images/carousel_1.jpg",
    title: "Find Your Perfect Rental",
    subtitle: "Explore a wide range of properties available now",
    link: "/properties",
    pos: "left",
  },
  {
    image: "/Images/carousel_2.jpg",
    title: "Exclusive Offers",
    subtitle: "Get special discounts on selected rentals this season",
    link: "/offers",
    pos: "right",
  },
  {
    image: "/Images/carousel_3.jpg",
    title: "Luxury Living",
    subtitle: "Discover high-end apartments and homes for rent",
    link: "/luxury-rentals",
    pos: "center",
  },
];

const ExampleCarouselImage = ({ text, image }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '580px',
      opacity: '0.6'
    }}
    className="d-flex justify-content-center align-items-center text-center text-black"
  >
    <div className="carousel-caption">
      <h3>{text}</h3>
    </div>
  </div>
);

const Slideshow = () => (
  <Carousel fade>
    {slides.map((slide, index) => (
      <Carousel.Item key={index}>
        <ExampleCarouselImage image={slide.image} />
        <Carousel.Caption className={`caption-${slide.pos}`}>
          <h3>{slide.title}</h3>
          <p>{slide.subtitle}</p>
          <a href={slide.link} className="btn btn-dark">
            Discover Now
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default Slideshow;
