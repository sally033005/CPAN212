import React, { useState, useEffect } from "react";
import '../app.css';  

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
        <div key={index} className="education-item">
          <h3 className="education-item-h3">{edu.degree}</h3>
          <p><strong>{edu.school}</strong></p>
          {edu.honors && <p className="education-item-em"><em>{edu.honors}</em></p>}
          <p>{edu.graduation}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
