import "./Section.css";
import { Container, Row, Col,  } from "react-bootstrap";

export default function Section8({img}) {
  return (
    


<section
      className="course_promo py-5"
      style={{background: 'url("/image/section-bg-2.png")',}}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} sm={12} className="mb-4 mb-lg-0">
            <div className="cp_content">
              <h4 className="text-success fw-bold">Best Online Learning Platform</h4>
              <h2 className="fw-bold">
                One Platform &amp; Many <span><u>Courses</u></span> For You
              </h2>
              <p className="text-muted">
                From blogs to emails to ad copies, auto-generate catchy, original, 
                and high-converting copies in popular tones &amp; languages.
              </p>

              <ul className="list-unstyled">
                <li><i className="ti-check text-white me-2"></i> 9/10 Average Satisfaction Rate</li>
                <li><i className="ti-check text-white me-2"></i> 96% Completion Rate</li>
                <li><i className="ti-check text-white me-2"></i> Friendly Environment &amp; Expert Teacher</li>
              </ul>

             <div className="home_btn">
              <a href="#" className="cta">
                <span>Explore Our Courses </span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
            </div>
          </Col>

          <Col lg={6} sm={12} className="text-center">
            <img
              src={img}
              className="img-fluid"
              alt="Best Online Learning Platform"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}