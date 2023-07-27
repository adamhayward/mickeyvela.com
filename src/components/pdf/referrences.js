import React, { useState } from "react";
import { Document, Page } from "react-pdf";
// import { PDFDownloadLink} from '@react-pdf/render';



import letterPDF from "../../VelaReferrenceLetters.pdf";


import "../../main.css";
import "./resume.css";

import arrow from "../../images/arrow.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Referrences(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Row className="mt-4">
        <Col>
          <div id="pdfContainer">
            <Document
              className="displayFlex justifyContentCenter"
              style={{ width: "100%", hiegth: "unset" }}
              file={letterPDF}
              options={{ workerSrc: "/pdf.worker.js" }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={3} md={{ span: 2, offset: 2 }}>
          <div id="prevButtonContainer">
            <Button
              variant="cust"
              style={{ backgroundColor: "#486781", color: "white" }}
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <img className="arrow" src={arrow} alt="previous" />
            </Button>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div id="pageDisplay">
            Letter {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </div>
        </Col>
        <Col xs={3} md={4}>
          <div id="nextButtonContainer">
            <Button
              variant="cust"
              style={{ backgroundColor: "#486781", color: "white" }}
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <img
                className="arrow"
                src={arrow}
                alt="previous"
                style={{ transform: "rotate(180deg)" }}
              />
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div id="footerText">&copy; {new Date().getFullYear()} MickeyVela.com</div>
        </Col>
      </Row>
    </div>
  );
}
