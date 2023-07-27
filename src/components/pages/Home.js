import React from "react";
import { Link } from "react-router-dom";

import '../../main.css'
import "./home.css";
import {Row, Col, Button} from "react-bootstrap";



export default function Home() {
  return (
      <Row>
        <Col id="headShotCol" xs={12} sm={4}>
          {/* <img
            id="headShotImg"
            src={headShot}
            className="img-responsive"
            alt="Adam Hayward posing in a suit"
          /> */}
        </Col>
        <Col
          id="greetingCol"
          sm={12}
          md={8}
          className="displayFlex justifyContentCenter"
          style={{ flexDirection: "column" }}
        >
          <div id="column2">
            <Row>
              <Col>
                <div className="displayFlex">
                  <div id="greetingLine1">Welcome to</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div
                  className="displayFlex justifyContentCenter haywardContainer"
                  style={{
                    flexWrap: "wrap",
                  }}
                >
                  <div id="greetingLine3">MickeyVela.com</div>
                 
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="banner">
                  <div id="bannerRow1">My site is currently getting a makeover</div>
                  <div id="bannerRow2">Make sure to check back soon</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="displayFlex justifyContentCenter " xs={12} xl={4}>              
                <Button id="btnResume"><Link style={{textDecoration:"none"}} to="/resume">View My Resume</Link></Button>
              </Col>
              <Col className="displayFlex justifyContentCenter " xs={12} xl={4}>              
                <Button id="btnResume"><Link style={{textDecoration:"none"}} to="/reviews">View My Reviews</Link></Button>
              </Col>
              <Col className="displayFlex justifyContentCenter " xs={12} xl={4}>              
                <Button id="btnResume"><Link style={{textDecoration:"none",}} to="/referrences">View My Recommendations</Link></Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <div
                  id="finalLine"
                  className="displayFlex justifyContentCenter"
                >
                  <div>I look forward to connecting with you</div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
  );
}


