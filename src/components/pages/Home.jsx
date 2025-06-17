import { Container, Col, Row, Button, Image } from "react-bootstrap";
import avatar from "/images/embg.png";

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homebg" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="headline">
              <h1>
                Hi there! 👋
                <br /> I'm Ashish Singh Rathod.
              </h1>

              <p>
                A passionate frontend developer with a keen eye for creating
                visually stunning and user-friendly web experiences. My journey
                in the world of coding began with a fascination for turning
                lines of code into beautiful, interactive websites that leave a
                lasting impression.
              </p>

              <p>Let's build something amazing together! 💻✨</p>
              <div>
                <Button className="btnclick" onClick={scrollToProjects}>View My Work</Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="avtar_image">
              <Image src={avatar} alt="avatar" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Row>
          <div className="home-hero__mouse-scroll-cont">
            <div className="mouse"></div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
