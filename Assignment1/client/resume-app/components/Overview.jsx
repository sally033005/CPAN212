import { useState, useEffect } from 'react';

const Overview = () => {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then(response => response.json())
      .then(data => setOverview(data))
      .catch(error => console.error('Error fetching overview data:', error));
  }, []);

  return (
    <div className="overview-section">
      <h2>Overview</h2>
      <p><strong>Name:</strong> {overview.name}</p>
      <p>{overview.description}</p>
    </div>
  );
};

export default Overview;
