import "./Section.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Section3() {
  return (
    <section className="section3 py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={6} className="text-center">
            <img
              src="/image/about1.png"
              alt="About"
              className="img-fluid rounded"
            />
          </Col>

          <Col md={6}>
            <div className="ab_content mb-4">
              <h2>
                Learn New Skills To Go{" "}
                <span className="highlight">Ahead For Your</span> Career.
              </h2>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt ut labore et simply.
              </p>
            </div>

            <div className="abmv shadow-sm">
              <span className="ti-medall"></span>
              <div>
                <h4>Our Mission</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
            </div>

            <div className="abmv shadow-sm">
              <span className="ti-wand"></span>
              <div>
                <h4>Our Vision</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
              </div>
            </div>

            <Button className="btn-login"   style={{ borderRadius: "30px", padding: "10px 30px", fontSize: "15px", backgroundColor: "#61CE70", color: "white", border: "none", }}>
              <span>Discover More</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
