import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="nav nav-tabs">
      <ul className={currentPage === "Home" ? "nav-item active" : "nav-item"}>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </ul>
      <ul
        className={currentPage === "Projects" ? "nav-item active" : "nav-item"}
      >
        <a
          href="#project"
          onClick={() => handlePageChange("Projects")}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </ul>
      <ul
        className={
          currentPage === "Contact Me" ? "nav-item active" : "nav-item"
        }
      >
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact Me")}
          // Check to see if the currentPage is `Contact Me`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Contact Me" ? "nav-link active" : "nav-link"
          }
        >
          Contact Me
        </a>
      </ul>
      <ul className={currentPage === "Resume" ? "nav-item active" : "nav-item"}>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </ul>
    </div>
  );
}

export default NavTabs;
