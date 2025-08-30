
import { Container, Row, Col } from "react-bootstrap";
import "./Section.css";

export default function Section9() {
  const topics = [
    {
      img: "/image/ct5.svg",
      title: "Business",
      link: "#",
      courses: "1 Course",
    },
    {
      img: "/image/ct6.svg",
      title: "Data Science",
      link: "#",
      courses: "1 Course",
    },
    {
      img: "/image/ct2.svg",
      title: "Digital Program",
      link: "#",
      courses: "2 Courses",
    },
    {
      img: "/image/ct3.svg",
      title: "Finance",
      link: "#",
      courses: "2 Courses",
    },
    {
      img: "/image/ct4.svg",
      title: "Modern Physics",
      link: "#",
      courses: "3 Courses",
    },
    {
      img: "/image/ct1.svg",
      title: "UI/UX Design",
      link: "#",
      courses: "3 Courses",
    },
  ];

  return (
    <section
      className="topic_content_area py-5"
      style={{  }}
    >
      <Container>
        <div className="section-title text-center mb-5">
          <h2 className="fw-bold">Start Learning</h2>
          <p>
            Popular <span><u>Topics To Learn</u></span> From Today.
          </p>
        </div>

        <Row>
          {topics.map((topic, index) => (
            <Col key={index} lg={4} sm={6} xs={12} className="mb-2">
              <div className="single_tca">
                <img src={topic.img} alt={topic.title} className="mb-2" />
                <h2>
                  <a href={topic.link} className=" text-decoration-none">
                    {topic.title}
                  </a>
                </h2>
                <span>{topic.courses}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
