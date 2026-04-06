import { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import '../../styles/pages/Home.css';

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Web Creator",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homebg home-section" id="home">
      {/* Ambient background orbs */}
      <div className="home-orb home-orb--1" />
      <div className="home-orb home-orb--2" />
      <div className="home-orb home-orb--3" />

      <Container className="home-container">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <motion.div
              className="headline"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Animated role pill */}
              <motion.div variants={itemVariants}>
                <div className="role-pill">
                  <span className="role-pill-dot" />
                  <span className="role-text-wrapper">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roleIndex}
                        className="role-text"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {roles[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={itemVariants}>
                Hi there! 👋
                <br />
                I'm{" "}
                <span className="name-highlight">Ashish Singh Rathod.</span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants}>
                A passionate frontend developer with a keen eye for creating
                visually stunning and user-friendly web experiences. My journey
                in the world of coding began with a fascination for turning
                lines of code into beautiful, interactive websites that leave a
                lasting impression.
              </motion.p>

              <motion.p variants={itemVariants}>
                Let's build something amazing together! 💻✨
              </motion.p>

              {/* CTA button */}
              <motion.div variants={itemVariants}>
                <motion.div
                  style={{ display: "inline-block" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="btnclick btnclick--glow"
                    onClick={scrollToProjects}
                  >
                    View My Work
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stat badges */}
              <motion.div variants={itemVariants} className="hero-badges">
                <div className="hero-badge">
                  <span>4+</span> Years Experience
                </div>
                <div className="hero-badge">
                  <span>10+</span> Projects Built
                </div>
                <div className="hero-badge">
                  ✅ Open to Work
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col xs={12} md={6}>
            <motion.div
              className="avtar_image"
              initial={{ opacity: 0, x: 60, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            >
              <picture>
                <source
                  srcSet="/images/optimized-embg.webp"
                  type="image/webp"
                />
                <img
                  src="/images/optimized-embg.png"
                  alt="avatar"
                  className="img-fluid"
                  loading="lazy"
                />
              </picture>
            </motion.div>
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
