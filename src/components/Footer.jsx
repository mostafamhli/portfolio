import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logo-text">
              <span>M.</span> Mhli
            </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mostafa-mhli-560430200/">
                <img src={navIcon1} alt=" " />
              </a>
              <a href="https://github.com/mostafamhli">
                <img src={navIcon2} alt=" " />
              </a>
              <a href="https://m.facebook.com/mostafa.fmhli/">
                <img src={navIcon3} alt=" " />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
