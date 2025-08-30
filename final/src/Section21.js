import { useState } from "react";
import { Container, Row, Col  } from "react-bootstrap";
import "./Section.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topage from "./Topage"
export default function Section21() {

  const courses = [
    {
      img: "/image/pexels-karolina-grabowska-5882683.jpg",
      price: "$265",
      category: "Business",
      title: "Financial Security Thinking and Principles Theory",
      lessons: "6 Lessons",
      duration: "4 hours",
      rating: "4.5",
      level: "All Levels",
    },
    {
      img: "/image/pexels-olia-danilevich-4974912-600x400.jpg",
      price: "$250",
      category: "Finance",
      title: "Professional Ceramic Moulding for Beginners",
      lessons: "15 Lessons",
      duration: "4 hours",
      rating: "5.0",
      level: "All Levels",
    },
    {
      img: "/image/pexels-tiia-pakk-4350767.jpg",
      price: "Free",
      category: "UI/UX Design",
      title: "Basic Fundamentals of Interior & Graphics Design",
      lessons: "16 Lessons",
      duration: "22 hours 30 minutes",
      rating: "5.0",
      level: "Intermediate",
    },
    {
      img: "/image/pexels-pixabay-265667.jpg",
      price: "Free",
      category: "Digital Program",
      title: "WordPress for Beginners – Master WordPress",
      lessons: "15 Lessons",
      duration: "7 hours 20 minutes",
      rating: "4.33",
      level: "Beginner",
    },
    {
      img: "/image/pexels-christina-morillo-1181359.jpg",
      price: "$300",
      category: "Data Science",
      title: "The Complete Python Course for Beginner 2023",
      lessons: "14 Lessons",
      duration: "18 hours 30 minutes",
      rating: "4.0",
      level: "Intermediate",
    },
    {
      img: "/image/pexels-caio-56759.jpg",
      price: "Free",
      category: "UI/UX Design",
      title: "Ultimate Photoshop Training: From Beginner",
      lessons: "14 Lessons",
      duration: "13 hours 30 minutes",
      rating: "3.33",
      level: "All Levels",
    },
    
    {
      img: "/image/pexels-eugene-capon-1261823.jpg",
      price: "Free",
      category: "Modern Physics",
      title: "User Experience Design Essentials Adobe xd UI UX Design",
      lessons: "15 Lessons",
      duration: "10 hours 40 minutes",
      rating: "4.5",
      level: " Beginner",
    },
    {
      img: "/image/pexels-josh-sorenson-1714202.jpg",
      price: "$250",
      category: "Modern Physics",
      title: "Basic Fundamentals of Interior & Graphics Design",
      lessons: "16 Lessons",
      duration: "15 hours 20 minutes",
      rating: "5.0",
      level: "Beginner",
    },
    {
      img: "/image/pexels-pixabay-356056.jpg",
      price: "Free",
      category: "Digital Program",
      title: "WordPress for Beginners – Master WordPress",
      lessons: "15 Lessons",
      duration: "7 hours 30 minutes",
      rating: "3.33",
      level: "Intermediate",
    },

     {
      img: "/image/pexels-pew-nguyen-153729021.jpg",
      price: "Free",
      category: "UI/UX Design",
      title: "Increasing Engagement with Instagram & Facebook",
      lessons: "14 Lessons",
      duration: "3 hours 20 minutes",
      rating: "4.5",
      level: "Intermediate",
    },
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "a-z") return a.title.localeCompare(b.title);
    if (sort === "z-a") return b.title.localeCompare(a.title);
    return 0;
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / itemsPerPage));
  const start = (page - 1) * itemsPerPage;
  const visible = sorted.slice(start, start + itemsPerPage);

      

  return (
    <section className="courses-sections py-5">
      <Container>
        
        <div className="d-flex align-items-right  mb-3 flex-wrap">
         

<div className="d-flex gap-2 justify-content-end w-100">
            

            <select
              className="course-sort"
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(1); }}
              aria-label="Sort courses"
            >
              <option value="newest">Release Date (newest first)</option>
              <option value="oldest">Release Date (oldest first)</option>
              <option value="a-z">Title (A - Z)</option>
              <option value="z-a">Title (Z - A)</option>
            </select>
          </div>
        </div>

        <Row>
          {visible.map((course, idx) => (
            <Col key={idx} lg={4} md={6} sm={12} className="mb-4">
              <div className="course-slide">
                <div className="course-img">
                  <img src={course.img} alt={course.title} className="img-fluid" />
                  <div className="course-date">
                    <span>
                      <div className="price">{course.price}</div>
                    </span>
                  </div>
                </div>
                <div className="course-content">
                  <div className="c_btn">{course.category}</div>
                  <h3><a href="#">{course.title}</a></h3>
                  <span><i className="fa fa-file-text"></i> {course.lessons}</span>
                  <span className="course_duration"><i className="fa fa-clock"></i> {course.duration}</span>
                  <span><i className="fab fa-star"></i>{course.rating}</span>
                  <span><i className="fab fa-signal"></i> <strong>{course.level}</strong></span>
                </div>
              </div>
            </Col>
          ))}
        </Row>


        <Topage page={page} setPage={setPage} totalPages={totalPages} />



      </Container>
    </section>
  );
}
