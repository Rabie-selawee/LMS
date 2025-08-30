import "./Section.css";

export default function Section1() {
  return (
    <section
      id="home"
      className="home_bg"
      style={{
        backgroundImage: 'url("/image/Home.png")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="home_content">
              <h1>
                Better <span>Learning Future</span> Starts With Edusion
              </h1>
              <p>
                It is a long established fact that reader will be distracted
                readable content of a page when.
              </p>
            </div>

            <div className="home_btn">
              <a href="#" className="cta">
                <span>Explore Courses</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="home_me_img">
              <img
               src="/image/home-image.png"
                className="img-fluid"
                alt="Better Learning Future Starts With Edusion"
              />

              <div className="home_ps">
                <img
                  src="/image/file2.svg"
                  alt=""
                />
                <h2>7500+</h2>
                <span>Active student</span>
              </div>

              <div className="home_ps2">
                <img
                  src="/image/user2.svg"
                  alt=""
                />
                <h2>4500+</h2>
                <span>Online Course</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
