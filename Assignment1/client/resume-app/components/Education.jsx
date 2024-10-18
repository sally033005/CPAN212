import { useState, useEffect } from 'react';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then(response => response.json())
      .then(data => setEducation(data))
      .catch(error => console.error('Error fetching education data:', error));
  }, []);

  return (
    <div className="education-section">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.school}</h3>
          <p>{edu.degree} - {edu.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
