import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function ContactForm() {

  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!form.email.includes("@")) newErrors.email = "بريد غير صحيح";
    if (!form.subject.trim()) newErrors.subject = "الموضوع مطلوب";
    if (!form.message.trim()) newErrors.message = "الرسالة مطلوبة";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setSuccess("");

      setTimeout(() => {
        setLoading(false);
        setSuccess("✅ تم إرسال الرسالة بنجاح!");
      }, 2000);
    }
  };
  
  return (
    <div className="container my-5 mssg">
      <h2 className="text-center mb-4">Send your message.</h2>
      <Form onSubmit={handleSend} noValidate>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-5">
              <Form.Label className="label">Name</Form.Label>
              <Form.Control className="control" 
              type="text" 
                name="name"
                value={form.name}
                onChange={handleChange}
                isInvalid={!!errors.name} />
                  <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Your Email</Form.Label>
              <Form.Control type="email"  className="control"
                name="email"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errors.email}/>
                 <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Your Subject</Form.Label>
              <Form.Control className="control controls"   type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}/>
                
              <Form.Control.Feedback type="invalid">
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label className="label">Your Message</Form.Label>
              <Form.Control         className="control controled"
              as="textarea"
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
               <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12} className="text-center bts">
            <button type="submit"  disabled={loading}>
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
       {success && <p className="text-center mt-4 text-success fw-bold">{success}</p>}
    </div>
    
  );
}
