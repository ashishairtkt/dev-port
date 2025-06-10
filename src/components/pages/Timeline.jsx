import '../../styles/pages/Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      year: '2022 to till now',
      title: 'Frontend Developer',
      company: 'Aero Flight Technology',
      description: 'Leading development of enterprise-scale applications using React and Node.js. Implementing microservices architecture and cloud solutions.',
      skills: ['React', 'JavaScript','Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'TechRBM',
      description: 'Developed and maintained multiple web applications. Implemented CI/CD pipelines and automated testing procedures.',
      skills: ['React', 'Node.js','JavaScript',  'MongoDB', 'Git','Azure']
    },
    {
      year: '2020',
      title: 'Software Developer Intern',
      company: 'P S  Softtech PVT LTD',
      description: 'Created responsive and interactive user interfaces. Collaborated with UX designers to implement modern design patterns.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS' ]
    },
    
  ];

  return (
    <div className="timeline-page">
      <div className="timeline-background">
        <div className="timeline-dot"></div>
        <div className="timeline-dot"></div>
        <div className="timeline-dot"></div>
        <div className="timeline-dot"></div>
        <div className="timeline-dot"></div>
      </div>
      <div className="timeline-wave"></div>
      <div className="timeline-container">
        <div className="timeline-header">
          <h1>Professional Journey</h1>
          <p>Explore my career progression and key milestones in software development</p>
        </div>

        <div className="timeline-wrapper">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                  <div className="timeline-skills">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 