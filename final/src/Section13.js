
import "./Section.css";
import { Container, Row, Col } from "react-bootstrap";

const events = [
  {
    id: 1,
    title: "Professional Mobile Painting and Sculpting",
    date: "Jun 01, 2024",
    month: "Technology",
    img: "/image/pexels-thisisengineering-3862132-370x260.jpg",
    type: "big",
  },
  {
    id: 2,
    title: "Professional Ceramic Moulding for Beginner",
    date: "May 29, 2024",
    month: "Programming",
    img: "/image/pexels-thisisengineering-3861972-370x260.jpg",
    type: "big",
  },
  {
    id: 3,
    title: "Professional Mobile Painting and Sculpting",
    date: "Jun 01, 2024",
    month: "Technology",
    type: "mini",
  },
  {
    id: 4,
    title: "Professional Ceramic Moulding for Beginner",
    date: "May 29, 2024",
    month: "Programming",
    type: "mini",
  },
];

export default function Section13() {
  return (
    
    <section className="blog-section"    style={{
        backgroundImage: "url('/image/blog-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Row className="mb-5 text-center">
          <Col>
          <div className="section-title text-center mb-5">
              <h2>News{" "}</h2>
              <p className="m-1">
                Our Latest{" "}
                <span>
                  <u>Blogs</u>
                </span>
              </p>
            </div>




            
          </Col>
        </Row>

        <Row className="gx-5">
          <Col lg={4} md={12}>
            {events.filter((e) => e.type === "mini").map((event) => (
              <div key={event.id} className="blog-card mini mb-4">
                <span className="dates">
                  {event.date} | <a href="#">{event.month}</a>
                </span>
                <h3>
                  <a href="#" className="text-decoration-none">{event.title}</a>
                </h3>
                <div className="home_btn">
              <a href="#" className="cta">
                <span>READ MORE</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
              </div>
            ))}
          </Col>

          <Col lg={8} md={12}>
            <Row>
              {events.filter((e) => e.type === "big").map((event) => (
                <Col key={event.id} lg={6} md={6} className="mb-4">
                  <div className="blog-card ">
                    {event.img && (
                      <img src={event.img} alt={event.title} className="img-fluid rounded" />
                    )}
                    <div className="p-3">
                      <span className="dates">
                        {event.date} | <a href="#">{event.month}</a>
                      </span>
                      <h3>
                        <a href="#" className="text-decoration-none">{event.title}</a>
                      </h3>
                    <div className="home_btn " style={{textAlign:"left"}}>
              <a href="#" className="cta">
                <span>READ MORE</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}



