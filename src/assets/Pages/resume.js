import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "../Resume/resume.pdf";

import "../../stylesheets/Resume.css";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

  return (
    <div className="main-container">
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="button-container">
        <div className="img-div">
          <img
            src={require("../Images/Mern.png")}
            alt="Mern Logo"
            className="img-top"
          ></img>
          <img
            src={require("../Images/JS-CSS-HTML.png")}
            alt="Javascript, Css, and Html Logos"
            className="img-top"
          ></img>
        </div>
        <div>
          <h3>Click on the "Download Now!" button for a copy of this PDF!</h3>
          <a
            href={resume}
            download="Matt's Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button>Download Now!</button>
          </a>
        </div>
        <nav>
          <button onClick={goToNextPage}>Next</button>
          <button onClick={goToPrevPage}>Previous</button>
        </nav>
        <div className="text-box">
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
        <div className="img-div">
          <img
            className="App-logo"
            src={require("../Images/ReactLogo.png")}
            alt="React Logo"
          ></img>
          <img
            className="App-logo"
            src={require("../Images/MongoDB.png")}
            alt="MongoDB Logo"
          ></img>
          <img
            className="App-logo"
            src={require("../Images/MySQL.png")}
            alt="MySQL Logo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Resume;
