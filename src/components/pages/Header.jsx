import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="header ">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto justify-content-end nav_wrapper">
            <Nav.Link href="#home" className="active underlineText">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="underlineText">
              About
            </Nav.Link>
            <Nav.Link href="#project" className="underlineText">
              Project
            </Nav.Link>
            <Nav.Link href="#contact" className="underlineText">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
