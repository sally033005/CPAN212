import { useState, useEffect } from 'react';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then(response => response.json())
      .then(data => setExperience(data))
      .catch(error => console.error('Error fetching experience data:', error));
  }, []);

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.company}</h3>
          <p>{exp.role} - {exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
