import { Container, Col, Row } from "react-bootstrap";
import { FaLinkedin, FaHeart, FaRegCopyright, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialMediaIcons = [
    { icon: <FaLinkedin />, urlLink: "LinkedIn" },
    { icon: <PiInstagramLogoFill />, urlLink: "Instagram" },
    { icon: <FaGithub />, urlLink: "GitHub" },
    { icon: <SiGmail />, urlLink: "Gmail" },
  ];
  return (
    <div className="footer_Section">
      <Container>
        <Row>
          <Col>
            <div className="footer_wrapper">
              <h2>Ashish Singh Rathod</h2>
              <p>
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
                {socialMediaIcons.map((socialMedia, index) => (
                  <li key={index}>{socialMedia.icon}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer_bottom text-center">
              Crafted with&nbsp;
              <FaHeart />
              &nbsp;
              <FaRegCopyright /> &nbsp;
              {currentYear}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
