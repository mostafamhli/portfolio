import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { List } from "react-bootstrap-icons";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} navbar`}>
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="logo-text"><span>M.</span> Mhli</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggole-icon">
            <List />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`navbar-link ${
                activeLink === "skills" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`navbar-link ${
                activeLink === "projects" ? "active" : ""
              }`}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <button className="vvd" onClick={() => console.log("connect")}>
              <Nav.Link href="#connect">
                <span>Let's connect</span>
              </Nav.Link>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
