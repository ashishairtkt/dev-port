import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import './Timeline.css';

const Timeline = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Leading frontend development initiatives, implementing modern React patterns, and mentoring junior developers.',
      skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive web applications and collaborated with UX designers to implement pixel-perfect designs.',
      skills: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
    },
    {
      year: '2022',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Built and maintained web applications, worked on bug fixes, and implemented new features.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    // Add more experiences as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container fluid className="timeline-page">
      <Container className="timeline-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="timeline-header"
        >
          <h1>My Journey</h1>
          <p>A timeline of my professional experience and growth</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="timeline-wrapper"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-year">{experience.year}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <h3>{experience.title}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.description}</p>
                  <div className="timeline-skills">
                    {experience.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Container>
  );
};

export default Timeline; 