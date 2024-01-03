import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col sm={6} md={4}>
      <a href={linkUrl}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
