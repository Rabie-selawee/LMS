import { useState } from "react";
import "./Section.css";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="vid_area section-padding"
      style={{
        backgroundImage:
          "url(https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/video.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className="video-button"
        onClick={() => setIsOpen(true)}
        style={{
          fontSize: "60px",
          color: "#fff",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <i className="fa fa-play"></i>
      </button>

      {isOpen && (
        <div
          className="video-modal"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: "80%", maxWidth: "900px" }}>
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/0KYxN1kJSb0?autoplay=1"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
