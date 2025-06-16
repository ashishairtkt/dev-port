import '../../styles/pages/Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      year: 'Sep 2022 to till now',
      title: 'Frontend Developer',
      company: 'Aero Flight Technology',
      description: 'Implemented flight search features based on locations, dates, and passenger count. Built an admin panel for rescheduling, seat changes, cancellations, baggage addition, and e-ticket printing. Optimized React component rendering for better UI responsiveness. Collaborated with the team using Git and GitHub for version control, code reviews, and pull requests.',
      skills: ['React', 'JavaScript','Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      year: 'Apr 2021 – Aug 2022',
      title: 'Full Stack Developer',
      company: 'TechRBM',
      description: 'Developed and maintained a web application using React.js and Node.js with responsive UI, reusable components, and RESTful API integration. Contributed to the Synergy One Lending project, collaborating with U.S. clients. Built tools like Mortgage, Refinance, and HELOC calculators to improve user experience and meet business requirements.',
      skills: ['React', 'Node.js','JavaScript',  'MongoDB', 'Git','Azure']
    },
    {
      year: 'Jul 2020 – Feb 2021',
      title: 'Software Developer Intern',
      company: 'PS Softech Education Pvt. Ltd.',
      description: 'Developed an international student admission platform enabling users to explore and apply to universities worldwide. Built reusable React components, added dynamic filtering and data-fetching for improved UX, and integrated APIs to ensure smooth frontend-backend communication. Contributed to a scalable, user-friendly solution supporting a diverse global audience.',
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
          {timelineData.reverse().map((item, index) => (
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