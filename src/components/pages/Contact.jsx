import { useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showMsg, setShowMsg] = useState(false);
  const { Formik } = formik;

  const schema = yup.object().shape({
    userName: yup.string().required("Name is required"),
    userMailId: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });
  const handleSubmit = (event) => {
    // console.log("Form Submitted", event);
    let body = {
      from_name: event.userName,
      message: event.message,
      reply_to: event.userMailId,
    };
    sendEmail(body);
  };

  const sendEmail = (body) => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        body,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setShowMsg(true);
        },
        (err) => {
          console.log("FAILED...", err);
          setShowMsg(false);
        }
      );
  };

  return (
    <div className="homebg" id="contact">
      <Container>
        <Row>
          <Col>
            <div className="text-center contact-section ">
              <h2 className="border_line">Contact</h2>

              <p>
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col lg={6} md={10} sm={10}>
            <div className="contact_form">
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
                    handleBlur,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationFormik01">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="userName"
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.userName}
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
                            isInvalid={!!errors.userMailId}
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
                            isInvalid={!!errors.message}
                            rows={4}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Button type="submit" className="btnclick">
                        Submit
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
                  <h4>Submitted !</h4>

                  <p>If you have more Query , feel free to contact us.</p>
                  <Button
                    type="submit"
                    className="btnclick"
                    onClick={() => setShowMsg(!showMsg)}
                  >
                    Go back
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
