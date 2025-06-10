import { Container, Col, Row } from "react-bootstrap";
import { FaLinkedin, FaHeart, FaRegCopyright, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialMediaIcons = [
    { 
      icon: <FaLinkedin />, 
      urlLink: "https://www.linkedin.com/in/ashish-singh-rathod/",
      label: "LinkedIn"
    },
    { 
      icon: <PiInstagramLogoFill />, 
      urlLink: "https://www.instagram.com/ashish_singh_rathod/",
      label: "Instagram"
    },
    { 
      icon: <FaGithub />, 
      urlLink: "https://github.com/ashish-singh-rathod",
      label: "GitHub"
    },
    { 
      icon: <SiGmail />, 
      urlLink: "mailto:ashishsinghrathod@gmail.com",
      label: "Gmail"
    },
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                  <li 
                    key={index}
                    onClick={() => handleSocialClick(socialMedia.urlLink)}
                    title={socialMedia.label}
                    style={{ cursor: 'pointer' }}
                  >
                    {socialMedia.icon}
                  </li>
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
