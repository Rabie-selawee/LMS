import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"

export default function ContactSection() {
  const contacts = [
    { icon: "ti-map", title: "Our Location", text: "3481 Melrose Place, Beverly Hills\nCA 90210" },
    { icon: "ti-mobile", title: "Telephone", text: "(+1) 517 397 7100\n(+1) 411 315 8138" },
    { icon: "ti-email", title: "Send email", text: "Info@example.com\nadmin@example.com" }
  ];

  return (
    <div className="container my-5">
      <div className="row text-center">
        {contacts.map((c, i) => (
          <div key={i} className={`col-md-4 mb-4 single_add ${i === 1 ? "add" : ""}`}>
            <i className={`${c.icon} fs-1 mb-2 d-block`}></i>
            <h4>{c.title}</h4>
            <p>
              {c.text.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
