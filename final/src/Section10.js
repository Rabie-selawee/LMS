import "./Section.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Section10() {
  const events = [
    {
      id: 1,
      title: "World Famous Talented Teachers",
      date: "15",
      month: "Oct",
      time: "10.00AM - 12.00PM",
      location: "School of Science",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the…",
      img: "/image/pexels-kampus-production-5940836-370x270.jpg",
      type: "big",
    },
    {
      id: 2,
      title: "Electrical Engineering new event",
      date: "18",
      month: "Oct",
      time: "10.00AM - 12.00PM",
      location: "School of Science",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the…",
      img: "/image/pexels-ivan-samkov-5676744-370x270.jpg",
      type: "big",
    },
    {
      id: 3,
      title: "World Famous Talented Teachers",
      date: "15",
      month: "Oct",
      time: "10.00AM - 12.00PM",
      location: "School of Science",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
      type: "mini",
    },
    {
      id: 4,
      title: "Electrical Engineering new event",
      date: "18",
      month: "Oct",
      time: "10.00AM - 12.00PM",
      location: "School of Science",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry…",
      type: "mini",
    },
  ];

  return (
    <section>
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <div className="section-title">
              <h2>Upcoming Events</h2>
              <p>
                Join With Us{" "}
                <span>
                  <u>Our Events</u>
                </span>
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {events
            .filter((e) => e.type === "big")
            .map((event) => (
              <Col key={event.id} lg={4} md={12} className="mb-4">
                <div className="event-slide big">
                  {event.img && (
                    <div className="event-img">
                      <img src={event.img} alt={event.title} />
                      <div className="event-date">
                        <span className="date">{event.date}</span>
                        <span className="month">{event.month}</span>
                      </div>
                    </div>
                  )}

                  <div className="event-content">
                    <h3>
                      <a href="#" className="text-decoration-none">
                        {event.title}
                      </a>
                    </h3>
                    <span>
                      <i className="fa fa-clock"></i>
                      {event.time}
                    </span>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      <strong>{event.location}</strong>
                    </span>
                    <p>{event.description}</p>
                  </div>
                </div>
              </Col>
            ))}

          <Col lg={3} md={12}>
            {events
              .filter((e) => e.type === "mini")
              .map((event) => (
                <div key={event.id} className="event-slide2 mini mb-4">
                  <div className="event-date">
                    <span className="date">{event.date}</span>
                    <span className="month">{event.month}</span>
                  </div>
                  <div className="event-content">
                    <h3>
                      <a href="#" className="text-decoration-none">
                        {event.title}
                      </a>
                    </h3>
                    <span>
                      <i className="fa fa-clock"></i>
                      {event.time}
                    </span>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      <strong>{event.location}</strong>
                    </span>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
