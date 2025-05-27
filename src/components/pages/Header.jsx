import { useState, useEffect, memo } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { Motion, spring } from 'react-motion';
import './Header.css';

const sections = ["home", "about", "project", "contact", "Resume"];

const Header = memo(function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const handleScroll = () => {
    setSticky(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    <Motion
      defaultStyle={{ opacity: 0, y: -20 }}
      style={{ opacity: spring(1), y: spring(0) }}
    >
      {({ opacity, y }) => (
        <Navbar expand="lg" className={`header ${isSticky ? "sticky" : ""}`} style={{ opacity, transform: `translateY(${y}px)` }}>
          <Container>
            <Navbar.Brand>
              <FaUserCircle size={30} color={isDarkMode ? "#ffffff" : "#1e1e1e"} />
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
                <button 
                  className="theme-toggle" 
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </Motion>
  );
});

export default Header;
