import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter2.svg";
import meter2 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Experienced Full Stack Developer with 4 years of proficiency in
                crafting dynamic and responsive web applications. Specialized in
                frontend technologies for engaging user interfaces, coupled with
                robust backend development using Node.js and Express.js. Adept
                at database management with MongoDB and skilled in the entire
                development lifecycle. Proven track record of optimizing code
                for enhanced performance. Committed to Agile methodologies and
                continuous learning to stay abreast of industry trends.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>NGRX</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>RXJS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>UI Libraries</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Git and Github</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>SEO</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>SQL</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>NoSQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
