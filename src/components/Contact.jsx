import React, { useState } from "react";
import contactImage from "../assets/img/contact-img.svg";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [fromDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  function handleSubmit(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    emailjs
      .sendForm(
        "service_pkaj9q9",
        "template_hc4o4dd",
        e.target,
        "OfD7Ni9OanmZ1-lEa"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImage} alt="contact image" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" placeholder="Last Name" name="lastName" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    name="phoneNumber"
                  />
                </Col>
                <Col className="px-1">
                  <textarea
                    row="7"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={`${
                        status.success === false ? "danger" : "success"
                      }`}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
