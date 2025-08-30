import "./Section.css";

import { Container, Row, Col } from "react-bootstrap";

export default function Section4() {
  return (
    <section id="counts" className="counts section-padding py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Some Fun Fact</h2>
          <p>
            Our Great <span><u>Achievement</u></span>
          </p>
        </div>

        <Row className="gy-4">
          <Col lg={3} md={6}>
            <div className="count-box">
              <div>
              <i className="ti-face-smile" style={{ color: "#4b08e8ff",fontSize:"50px" ,}}></i>
                <span className="purecounter">854</span>
                <p>Enrolled Students</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="count-box">
              <div>
              <i className="ti-files" style={{ color: "#EE6C20" ,fontSize:"50px",}}></i>
                <span className="purecounter">521</span>
                <p>Academic Programs</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="count-box">
              <div>
              <i className="ti-headphone-alt" style={{ color: "#15BE56" ,fontSize:"50px"}}></i>
                <span className="purecounter">163</span>
                <p>Winning Award</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="count-box">
              <i className="ti-user" style={{ color: "#BB0852" ,fontSize:"55px",marginBottom:"35px"}}></i>
              <div>
                <span className="purecounter">93</span>
                <p style={{marginLeft:"-50px"}}>Certified Students</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
