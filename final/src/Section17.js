import { Container, Row, Col } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Section.css";

export default function Section17() {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "/Month",
      perYearLabel: "Upgrade as you need",
      perYearLink: "#",
    },
    {
      name: "Saver plan",
      price: "29",
      period: "/Month",
      perYearLabel: "$348 Per Year",
      perYearLink: "#",
    },
    {
      name: "Unlimited plan",
      price: "49",
      period: "/Month",
      perYearLabel: "$588 Per Year",
      perYearLink: "#",
    },
  ];

  const featureIcons = [
    "fa-regular fa-calendar",      
    "fa-regular fa-file-lines",   
    "fa-regular fa-lightbulb",     
    "fa-regular fa-star",          
    "fa-regular fa-image",        
    "fa-regular fa-paper-plane"    
  ];

  return (
    <section className="pricing-wrapper ">
      <Container>
          <div className="section-title text-center mb-5">
          <h2>Popular Courses</h2>
          <p>
            Choose Our <span><u>Top Courses</u></span>
          </p>
        </div>
        <Row className="g-4">
          {plans.map((p) => (
            <Col key={p.name} lg={3} md={6} sm={12}>
              <div className="pricing-card ">
                <div className="pricing-header">
                  <h2 className="plan-name">{p.name}</h2>
                  <div className="price-line">
                    <h1 className="priced">${p.price}</h1>
                    <span className="period">{p.period}</span>
                  </div>
                  <a href={p.perYearLink} className="per-year">
                    {p.perYearLabel}
                  </a>
                </div>


                <ul className="features">
                  {featureIcons.map((icon, i) => (
                    <li key={i}>
                      <i className={icon} aria-hidden="true" />
                      <span>Learn at your own pace</span>
                    </li>
                  ))}
                </ul>

                <button className="starts-btn">Start Now</button>

                <span className="corner-accent" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
