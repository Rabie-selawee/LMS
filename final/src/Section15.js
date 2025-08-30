import "./Section.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Section3() {
  return (
    <section className="section3 py-5">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={6} className="text-center">
            <img
              src="/image/free-course-768x813.png"
              alt="About"
              className="img-fluid rounded"
            />
          </Col>

          <Col md={6}>
            <div className="ab_content mb-4">
              <h2 style={{letterSpacing: "0px",
    margin: "0px",
    fontFamily: "'Mulish', sans-serif",
    color: "#1a2d62",fontSize:"44px",fontWeight:"700",marginBottom:"20PX",}}>
                Learn New Skills To Go{" "}
                <span className="highlight">Ahead For Your </span> Career.
              </h2>
              <p className="text-muted ">
               Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.
              </p>
              <p className="text-muted ">
Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy              </p>
              
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
