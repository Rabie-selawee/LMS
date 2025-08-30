import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("تم الإرسال ");
    }, 2000);
  };
  return (
    <div className="container my-5 mssg">
      <h2 className="text-center mb-4">Send your message.</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-5">
              <Form.Label className="label">Name</Form.Label>
              <Form.Control className="control" type="text" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Your Email</Form.Label>
              <Form.Control className="control" type="email" />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Your Subject</Form.Label>
              <Form.Control className="control controls" type="text" />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Your Message</Form.Label>
              <Form.Control
                as="textarea"
                className="control controled"
                rows={5}
              />
            </Form.Group>
          </Col>
          <Col md={12} className="text-center bts">
            <button type="submit" onClick={handleSend} disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  جاري الإرسال...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
