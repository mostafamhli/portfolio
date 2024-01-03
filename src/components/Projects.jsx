import React from "react";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabContainer,
  TabPane,
} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import techsouq from "../assets/img/proj/techsouq.png";
import AlAjialHolding from "../assets/img/proj/AlAjial Holding.png";
import NeronMas from "../assets/img/proj/neronmas.png";
import LPCenter from "../assets/img/proj/lpcenter.png";
import Prokoders from "../assets/img/proj/prokoders.png";
import rawaaTech from "../assets/img/proj/rawaaTech.png";
import OnlineShop from "../assets/img/proj/Shop.png";
import MemoryGame from "../assets/img/proj/memoryGame.png";
import Weather from "../assets/img/proj/weather.png";
import SpecialDesign from "../assets/img/proj/specialDesign.png";
import Template3 from "../assets/img/proj/Template3.png";
import Template2 from "../assets/img/proj/Template2.png";
const Projects = () => {
  const projectsList1 = [
    {
      title: "Rewaa",
      description: "منصة لإدارة كل ما يتعلق بتجارة التجزئة",
      imgUrl: rawaaTech,
      linkUrl: "https://www.rewaatech.com/",
    },
    {
      title: "Prokoders",
      description: "Leading Software Development Company",
      imgUrl: Prokoders,
      linkUrl: "https://prokoders.com/en",
    },
    {
      title: "Techsouq Computers L.L.C",
      description: "Customized IT solutions",
      imgUrl: techsouq,
      linkUrl: "https://techsouq.com/",
    },
    {
      title: "AlAjial Holding",
      description: "A regional institutional family office with global reach",
      imgUrl: AlAjialHolding,
      linkUrl: "https://www.alajial-holding.com/",
    },
    {
      title: "London Premier Centre",
      description: "UK leading training provider",
      imgUrl: LPCenter,
      linkUrl: "https://www.lpcentre.com/",
    },
    {
      title: "NeronMas",
      description: "Energy drink company",
      imgUrl: NeronMas,
      linkUrl: "https://neronmas.com/",
    },
  ];
  const projectsList2 = [
    {
      title: "Online Shopping App",
      description: "E-marketing App",
      imgUrl: OnlineShop,
      linkUrl: "https://mostafamhli.github.io/fashion-market/",
    },
    {
      title: "Weather App",
      description: "Displaying the weather forecast.",
      imgUrl: Weather,
      linkUrl: "https://mostafamhli.github.io/weatherapp/",
    },
    {
      title: "Memory Game",
      description: "Measure the mental ability",
      imgUrl: MemoryGame,
      linkUrl: "https://mostafamhli.github.io/memory-game/",
    },
    {
      title: "Template Design",
      description: "Awesome template design",
      imgUrl: Template3,
      linkUrl: "https://mostafamhli.github.io/HTML_And_CSS_Template_Three/",
    },
    {
      title: "Special Desgin",
      description: "Website with great functionalities",
      imgUrl: SpecialDesign,
      linkUrl:
        "https://mostafamhli.github.io/special-design-using-html-css-js/",
    },

    {
      title: "Template Design",
      description: "Awesome template design",
      imgUrl: Template2,
      linkUrl: "https://mostafamhli.github.io/HTML_And_CSS_Template_Two/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              As a seasoned Full Stack MERN Developer with 4 years of expertise,
              I've crafted diverse projects showcasing proficiency in HTML5,
              CSS3, JavaScript, Typescript, Bootstrap, Tailwind CSS, Angular,
              Angular Material, PrimeNG, React, Redux, NGRX, RXJS, Node.js,
              Express.js, MongoDB, SQL, and MySQL. These technologies have been
              seamlessly integrated, resulting in dynamic, user-centric
              applications that underscore my commitment to delivering
              high-quality solutions. My portfolio reflects the synthesis of
              technical skill and innovation across a range of projects, each
              contributing to a rich and varied experience in the world of Full
              Stack development.
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <NavItem>
                  <NavLink eventKey="first">Tab One</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="second">Tab Two</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="third">Tab Three</NavLink>
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projectsList1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">
                  <Row>
                    {projectsList2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="third">
                  <Row>
                    <p>
                      Experienced in developing over 15 <span className="dashboard-span">Dashboards</span> for prominent
                      entities such as MyCommunity Clinic, JayTaxi, Al-Ameen
                      Hospital, and more. Employing responsive design
                      principles, I ensure seamless functionality across
                      devices. My commitment to best practices and design
                      patterns is evident in each project, contributing to
                      optimal user experiences and efficient, scalable code.
                    </p>
                  </Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};

export default Projects;
