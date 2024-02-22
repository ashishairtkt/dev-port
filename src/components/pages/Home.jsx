import { Container, Col, Row, Button, Image } from "react-bootstrap";
import avatar from "../../assets/images/embg.png";

export default function Home() {
  return (
    <div className="homebg">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="headline">
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, .
              </h1>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores possimus sint porro quis in excepturi laudantium
                necessitatibus, deleniti voluptas sit odit delectus incidunt
                inventore nihil, deserunt modi aperiam temporibus repellat!
              </p>
              <div>
                <Button className="btnclick">Click here</Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="avtar_image">
              <Image src={avatar} alt="avatar" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
