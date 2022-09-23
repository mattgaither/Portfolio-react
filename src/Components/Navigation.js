import React, { useState } from "react";
import NavTabs from "../utils/Nav-helper";
import Home from "../assets/Pages/Home";
import Projects from "./Projects"
import ContactForm from "../assets/Pages/Contact";
import Resume from "../assets/Pages/Resume";
import "../stylesheets/Nav.css"

export default function Nav() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact Me") {
      return <ContactForm />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="content-container">
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
