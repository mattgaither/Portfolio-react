import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="main-footer">
      <div className="icon-container">
        <a href="https://github.com/mattgaither">
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-gaither-88732794/"
          className="linkedin"
        >
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:mattgaither2@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer