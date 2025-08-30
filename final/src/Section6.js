import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section.css";

export default function Section6() {
  const features = [
    {
      icon: "ti-book",
    title: <>Learn More <br /> Anywhere</>,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
    {
      icon: "ti-heart",
      title: <>Expert<br/>  Instructor</>,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
    {
      icon: "ti-user",
      title: <>Team  <br/> Management</>,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
    {
      icon: "ti-eye",
      title: <>Course<br/> Planning</>,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
    {
      icon: "ti-light-bulb",
      title: <>Teacher<br/> Monitoring</>,          
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
    {
      icon: "ti-email",
      title: <>24/7 Strong<br/> Support</>,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore."
    },
  ];

  return (
    <section className="features-section py-5">
      <Container>
         <div className="section-title text-center mb-5">
          <h2>Why Choose Edusion</h2>
          <p>
            Find the <span><u>best features</u></span> {""}of Edusion
          </p>
        </div>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <div className="single_feature_one text-center p-4 h-100 border rounded shadow-sm">
                <div className="sf_top mb-3">
                  <span className={`${feature.icon} ss_one display-4`}></span>
                  <h2 className="mt-2">{feature.title}</h2>
                </div>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
