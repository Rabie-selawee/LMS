import "./Section.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const testimonialsData = [
  {
    name: "James Clayton",
    role: "Design Expert",
    img: "/image/t4.png",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor."
  },
  {
    name: "James Simmons",
    role: "Marketing Expert",
    img: "/image/team1-300x300.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor."
  },
  {
    name: "Devid max",
    role: "Max iNC",
    img: "/image/team2-300x300.jpg",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor."
  },
  {
    name: "Alex feroundo",
    role: "Marketing Expert",
    img: "/image/t1.png",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor."
  }
];

export default function Section11() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="testi_home_area section-padding">
       <div className="container">
       
        <div className="section-title text-center mb-5">
          <h2 className="fw-bold">Testimonial</h2>
          <p>
            What Says <span><u>Our Students</u></span> 
          </p>
        </div>

        <Slider {...settings}>
          {testimonialsData.map((t, index) => (
            <div className="testimonial_card" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star"></i>
                ))}
              </div>
              <p>{t.text}</p>
              <div className="student_info">
                <img src={t.img} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div className="arrow next" onClick={onClick}>&#10095;</div>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className="arrow prev" onClick={onClick}>&#10094;</div>;
}
