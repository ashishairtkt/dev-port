import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaTools, FaImage } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../../data/projects.json' 
import '../../styles/pages/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoadError, setImageLoadError] = useState({});

  const handleImageError = (projectId) => {
    setImageLoadError(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const getTechIcon = (tech) => {
    const techIcons = {
      'React': <FaCode />,
      'Node.js': <FaServer />,
      'MongoDB': <FaDatabase />,
      'Python': <FaCode />,
      'Django': <FaServer />,
      'PostgreSQL': <FaDatabase />,
      'JavaScript': <FaCode />,
      'Express': <FaServer />,
      'MySQL': <FaDatabase />
    };
    return techIcons[tech] || <FaTools />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Container>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">What I’ve Built</h2>
          <p className="section-subtitle">A showcase of my recent work and technical expertise</p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="projects-grid"
        >
          <Row className="g-4">
            {projectsData.projects.map((project) => (
              <Col key={project.id} md={6} lg={4}>
                <motion.div variants={cardVariants}>
                  <Card className="project-card h-100">
                    <div className="project-image-container">
                      {!imageLoadError[project.id] ? (
                        <Card.Img 
                          variant="top" 
                          src={project.image} 
                          alt={project.title}
                          onError={() => handleImageError(project.id)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="image-placeholder">
                          <FaImage size={40} />
                          <span>Image not available</span>
                        </div>
                      )}
                      <motion.div 
                        className="project-overlay"
                        whileHover={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                      >
                        <Button 
                          variant="light" 
                          className="view-project-btn"
                          onClick={() => setSelectedProject(project)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </Button>
                      </motion.div>
                    </div>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <motion.div 
                        className="technologies"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="tech-badge"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {getTechIcon(tech)}
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </Card.Body>
                    <Card.Footer className="project-links">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline-primary me-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> GitHub
                      </motion.a>
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            show={selectedProject !== null}
            onHide={() => setSelectedProject(null)}
            size="lg"
            centered
            className="project-modal"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal-content">
                  <motion.div 
                    className="modal-image-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {!imageLoadError[selectedProject.id] ? (
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="modal-image"
                        onError={() => handleImageError(selectedProject.id)}
                      />
                    ) : (
                      <div className="image-placeholder">
                        <FaImage size={60} />
                        <span>Image not available</span>
                      </div>
                    )}
                  </motion.div>
                  <div className="modal-details">
                    <h4>Project Overview</h4>
                    <p>{selectedProject.longDescription}</p>
                    
                    <h4>Key Features</h4>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    
                    <h4>Technologies Used</h4>
                    <div className="modal-technologies">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h4>Challenges & Solutions</h4>
                    <p>{selectedProject.challenges}</p>
                    
                    <h4>My Role</h4>
                    <p>{selectedProject.role}</p>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
                <Button 
                  variant="primary" 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> View on GitHub
                </Button>
                <Button 
                  variant="success" 
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Button>
              </Modal.Footer>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 