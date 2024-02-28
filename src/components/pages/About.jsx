import { Container, Col, Row, Button } from "react-bootstrap";

const About = () => {
  const skills = [
    "HTML",
    "CSS3",
    "React Js",
    "Next Js",
    "TypeScript",
    "JavaScript",
    "Node Js",
    "Git",
    "GitHub",
    "Responsive Design",
    "SQL Basic",
  ];

  return (
    <>
      <Container id="about" fluid className="m-0 p-0">
        <Row>
          <Col style={{ position: "relative" }}>
            <div className="context">
              <Container>
                <Row>
                  <Col>
                    <div className="about_section">
                      <div>
                        <h2 className="border_line">About Me</h2>
                      </div>
                      <p>
                        Here you will find more information about me, what I do,
                        and my current skills mostly in terms of programming and
                        technology.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="info_section">
                      <h2>Get to know me!</h2>
                      <p>
                        I'm a Frontend Focused Web Developer building and
                        managing the Front-end of Websites and Web Applications
                        that leads to the success of the overall product.
                        <br />
                        <br />
                        I'm passionate about sharing insights and knowledge
                        gained throughout my journey in web development. Join me
                        on LinkedIn to connect.
                        <br />
                        <br />
                        I'm open to Job opportunities where I can contribute,
                        learn, and grow. If you have a good opportunity that
                        matches my skills and experience, then don't hesitate to
                        contact me.
                      </p>
                      <Button className="btnclick">Contact</Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="skills-section">
                      <h2>My Skills</h2>
                      <div className="skill_wrapper">
                        {skills.map((skill, index) => (
                          <p key={index}>{skill}</p>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="area">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
