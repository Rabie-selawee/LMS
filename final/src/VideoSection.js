import React from "react";

export default function VideoSection() {
  return (
    <section
      className="vid_area section-padding"
      style={{
        backgroundImage:
          "url(https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/video.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 vp_top wow fadeInUDown animated"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
            }}
          >
            <div className="video-area">
              <a
                href="https://www.youtube.com/watch?v=0KYxN1kJSb0"
                className="magnific_popup video-button"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
