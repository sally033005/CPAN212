import React, { useState, useEffect } from 'react';
import '../app.css';  

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then((response) => response.json())
      .then((data) => setExperience(data))
      .catch((error) => console.error('Error fetching experience:', error));
  }, []);

  return (
    <div className="experience-section">
      <h2>Work Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="job-container">
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}, {job.location}</p>
          <p className="job-dates">{job.dates}</p>
          <ul className="job-responsibilities">
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
