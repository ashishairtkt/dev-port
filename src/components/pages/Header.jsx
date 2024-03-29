import { useState, useEffect } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
const sections = ["home", "about", "project", "contact", "Resume"];

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (section) => {
    scrollToSection(section);
    setActiveSection(section);
  };

  return (
    <Navbar expand="lg" className={`header ${isSticky ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand>
          <FaUserCircle size={30} color="#1e1e1e" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end nav_wrapper">
            {sections.map((section) => (
              <Nav.Link
                key={section}
                onClick={() => handleNavClick(section)}
                className={`underlineText ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
