import React, { useState, useEffect } from 'react';
import '../app.css';

const Overview = () => {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then((response) => response.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error('Error fetching overview:', error));
  }, []);

  return (
      <div className="overview-container">
      <h2>About me</h2>
      <p className='about-container'>{overview.introduction}</p>
      <h2>Career Goal</h2>
      <p className='about-container'>{overview.goal}</p>

      <h2>Skills</h2>
      <div className="skills-container">
        {overview.skills && Object.entries(overview.skills).map(([category, items]) => (
          <div key={category} className="skill-box">
            <h4 className="category">{category}</h4>
            <ul className="skill-list">
              {items.map((item, index) => (
                <li key={index} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Overview;


