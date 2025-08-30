import "./Section.css"; 
import { Container, Row, Col } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

const teamMembers = [
  {
    name: "Daniel Miller",
    role: "Logo Expert",
    img: "/image/team2-300x300.jpg",
    courses: 3,
    students: 3,
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/username",
    },
  },
  {
    name: "Masum Billah",
    role: "Developer",
    img: "/image/team1-300x300.jpg",
    courses: 6,
    students: 5,
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/username",
    },
  },
  {
    name: "Kenneth Renteria",
    role: "Marketer",
    img: "/image/0.png",
    courses: 0,
    students: 0,
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      website: "http://themesvila.com/themes-wp/edusion",
    },
  },
  {
    name: "Richard Hood",
    role: "UI UX Designer",
    img: "/image/00.png",
    courses: 2,
    students: 0,
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/username",
    },
  },
];

export default function Section12() {
  return (
    <section className="team_home_area section-padding">
      <div className="container">
      

        <Row className="mb-4 text-center">
          <Col>
            <div className="section-title">
              <h2>Team Member</h2>
              <p>
                Join With Us{" "}
              Our Expert <span><u>Instructors</u></span>
              </p>
            </div>
          </Col>
        </Row>






        <div className="row">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="col-xl-3 col-md-6 col-sm-6 col-12 fadeInUp">
              <div className="single-team-home">
                <div className="img">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-content-home">
                  <h3><a href="#">{member.name}</a></h3>
                  <p>{member.role}</p>
                  <div className="sth_det">
                    <span className="ti-file"><u>{member.courses} Courses</u></span>
                    <span className="ti-user"><u>{member.students} Students</u></span>
                  </div>
                  <ul className="social-home">
                    {member.social.facebook && <li><a href={member.social.facebook}><i className="fab fa-facebook"></i></a></li>}
                    {member.social.twitter && <li><a href={member.social.twitter}><i className="fab fa-twitter"></i></a></li>}
                    {member.social.linkedin && <li><a href={member.social.linkedin}><i className="fab fa-linkedin"></i></a></li>}
                    {member.social.website && <li><a href={member.social.website}><i className="fa fa-globe"></i></a></li>}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
