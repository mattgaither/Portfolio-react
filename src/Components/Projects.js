import React from "react";
import Project from "../assets/Pages/Project-cards";
import { data } from "../assets/Data/projectData";

const Projects = () => {
  return (
    <div className="Projects">
      {data.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
