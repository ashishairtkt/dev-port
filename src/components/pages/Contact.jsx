import { useState, memo, useCallback } from "react";
import { Container, Col, Row, Button, Form, Alert } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { Motion, spring } from 'react-motion';

import emailjs from "@emailjs/browser";

const Contact = memo(function Contact() {
  const [showMsg, setShowMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { Formik } = formik;

  const schema = yup.object().shape({
    userName: yup
      .string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    userMailId: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = useCallback(async (event) => {
    try {
      setIsSubmitting(true);
      setErrorMsg('');
      
      let body = {
        from_name: event.userName,
        message: event.message,
        reply_to: event.userMailId,
      };
      
      await sendEmail(body);
    } catch (error) {
      setErrorMsg('Failed to submit form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const sendEmail = useCallback(async (body) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        body,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );
      
      console.log("SUCCESS!", response.status, response.text);
      setShowMsg(true);
      setErrorMsg('');
    } catch (err) {
      console.error("FAILED...", err);
      setErrorMsg('Failed to send email. Please try again.');
      setShowMsg(false);
      throw err;
    }
  }, []);

  return (
    <div className="homebg" id="contact">
      <Container>
        <Row>
          <Col>
            <Motion
              defaultStyle={{ opacity: 0, y: 20 }}
              style={{ opacity: spring(1), y: spring(0) }}
            >
              {({ opacity, y }) => (
                <div className="text-center contact-section" style={{ opacity, transform: `translateY(${y}px)` }}>
                  <h2 className="border_line">Contact</h2>
                  <p>
                    Feel free to Contact me by submitting the form below and I will
                    get back to you as soon as possible
                  </p>
                </div>
              )}
            </Motion>
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col lg={6} md={10} sm={10}>
            <Motion
              defaultStyle={{ opacity: 0, scale: 0.9 }}
              style={{ opacity: spring(1), scale: spring(1) }}
            >
              {({ opacity, scale }) => (
                <div className="contact_form" style={{ opacity, transform: `scale(${scale})` }}>
                  {!showMsg && (
                    <Formik
                      validationSchema={schema}
                      onSubmit={handleSubmit}
                      initialValues={{
                        userName: "",
                        userMailId: "",
                        message: "",
                      }}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                        handleBlur,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          {errorMsg && (
                            <Alert variant="danger" className="mb-3">
                              {errorMsg}
                            </Alert>
                          )}
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik01">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="userName"
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.userName && !!errors.userName}
                                disabled={isSubmitting}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.userName}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik02">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                name="userMailId"
                                value={values.userMailId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.userMailId && !!errors.userMailId}
                                disabled={isSubmitting}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.userMailId}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="validationFormik03">
                              <Form.Label>Message</Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Message"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.message && !!errors.message}
                                disabled={isSubmitting}
                                rows={4}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.message}
                              </Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                          <Button 
                            type="submit" 
                            className="btnclick"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  )}
                  {showMsg && (
                    <div className="success-box-con">
                      <div className="success-checkmark">
                        <div className="check-icon">
                          <span className="icon-line line-tip"></span>
                          <span className="icon-line line-long"></span>
                          <div className="icon-circle"></div>
                          <div className="icon-fix"></div>
                        </div>
                      </div>
                      <h4>Submitted!</h4>
                      <p>Thank you for your message. I will get back to you soon.</p>
                      <Button
                        type="button"
                        className="btnclick"
                        onClick={() => setShowMsg(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </Motion>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default Contact;
