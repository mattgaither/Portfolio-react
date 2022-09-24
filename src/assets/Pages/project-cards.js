import React from "react";
import Card from "react-bootstrap/Card";

import "../../stylesheets/Cards.css";

const Project = ({ project }) => {
  return (
    <div className="card-container">
      <Card key={project.id}>
        <Card.Img variant="top" src={project.img} alt={project.alt} />
        <Card.Body>
          <Card.Title>{project.appName}</Card.Title>
          <Card.Text>
            <a href={project.github}>GitHub Page</a> <br />
            <a href={project.link} className="Card text">
              Deployed Page
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
