
import React from "react";


import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Section.css";

export default function Section5() {
  const logos = [
    "/image/5.png",    
    "/image/image.png",
    "/image/3.png",    
    "/image/2.png",    
    "/image/1.png",    
    "/image/3.png",    
    "/image/5.png",   ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="partner-logo section-padding mb-5">
      <Container>
        <div className="text-center partner_title mb-4">
          <h3>Trusted Company Around The World!</h3>
        </div>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-box">
              <a href="#">
                <img src={logo} alt={`partner-${index}`} className="img-fluid" />
              </a>
            </div>
          ))}
        </Slider>
        
      </Container>
    </section>
  );
}
