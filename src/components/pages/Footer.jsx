import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaLinkedin, FaHeart, FaRegCopyright } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="footer_Section">
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="footer_wrapper">
              <h2>Ashish Singh Rathod</h2>
              <p>
                {" "}
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
          </Col>

          <Col>
            <div className="social_wrapper">
              <h2>SOCIAL</h2>

              <ul>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <PiInstagramLogoFill />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <SiGmail />
                </li>
              </ul>
            </div>
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <div className="footer_bottom text-center">
              Crafted with&nbsp;
              <FaHeart />
              &nbsp;
              <FaRegCopyright /> &nbsp;
              {getCurrentYear()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
