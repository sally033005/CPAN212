import 'bootstrap/dist/css/bootstrap.min.css';

useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then(response => response.json())
      .then(data => setEducation(data))
      .catch(error => console.error('Error fetching education data:', error));
  }, []);
  