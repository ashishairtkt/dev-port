import { Container, Col, Row, Button, Image } from "react-bootstrap";

export default function About() {
  let skills = [
    "HTML",
    "CSS3",
    "React.Js",
    "Next.Js",
    "TypeScript",
    "JavaScript",
    "Node.Js",
    "Git",
    "GitHub",
    "Responsive Design",
    "SQL Basic",
  ];
  return (
    <Container>
      <Row>
        <Col>
          <div className="about_section">
            <div>
              <h2 className="border_line">About Me</h2>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              magni tempore tenetur nulla! Hic repudiandae quidem tempore
              similique molestias animi maxime ratione! Fuga vitae quidem
              eveniet dolores sapiente, officia qui.
            </p>{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Get to know me!</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            magni tempore tenetur nulla! Hic repudiandae quidem tempore
            similique molestias animi maxime ratione! Fuga vitae quidem eveniet
            dolores sapiente, officia qui.
          </p>{" "}
        </Col>
        <Col>
          <h2>My Skills</h2>
          <div className="skill_wrapper">
            {skills.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </Col>
      </Row>
      hello world
    </Container>
  );
}
