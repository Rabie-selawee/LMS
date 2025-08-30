import { useState } from "react";

export default function Section20() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What does it take excellent author?",
      answer:
        "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: 2,
      question: "Who will view my content?",
      answer:
        "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: 3,
      question: "What does it take become an author?",
      answer:
        "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: 4,
      question: "How to Change my Password easily?",
      answer:
        "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
    {
      id: 5,
      question: "How does it create content?",
      answer:
        "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use.",
    },
  ];

  return (
    <section className="faq-section container py-5">
      <div className="row align-items-center">
        <div className="section-title text-center ">
            <h2>Frequently Asked Question</h2>
            <p>
              General <span><u>Questions</u></span>
            </p>
          </div>
        <div className="col-lg-6">
          

          <div className="accordion" id="accordionExample">
            {faqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${active === faq.id ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${active === faq.id ? "show" : ""}`}
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src="/image/faq.png"
            alt="FAQ"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
}
