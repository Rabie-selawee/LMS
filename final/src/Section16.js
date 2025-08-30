import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Section.css";

export default function Section7() {
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
  ];

  return (
    <section className="courses-section py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <h2>Popular Courses</h2>
          <p>
            Choose Our{" "}
            <span>
              <u>Top Courses</u>
            </span>
          </p>
        </div>

        <Row>
          {courses.map((course, index) => (
            <Col key={index} lg={6} md={6} sm={12} className="mb-4">
              <div className="courses-slide">
                <div className="courses-flex">
                  <div className="courses-img">
                    <img src={course.img} alt={course.title} />
                    <div className="prices">{course.price}</div>
                  </div>

                  <div className="courses-content">
                    <div className="c_btns">{course.category}</div>
                    <h3>
                      <a href="#">{course.title}</a>
                    </h3>
                  </div>
                </div>{" "}
                <div className="anmi">
                  <span>
                    <i className="fa fa-file-text"></i> {course.lessons}
                  </span>
                  <span className="course_duration">
                    <i className="fa fa-clock"></i> {course.duration}
                  </span>
                  <span>
                    <i className="fa fa-star"></i> {course.rating}
                  </span>
                  <span>
                    <i className="fa fa-signal"></i>{" "}
                    <strong>{course.level}</strong>
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button
            className="btn-login"
            style={{
              borderRadius: "30px",
              padding: "10px 30px",
              fontSize: "15px",
              backgroundColor: "#61CE70",
              color: "white",
              border: "none",
            }}
          >
            <span>View All Course</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
