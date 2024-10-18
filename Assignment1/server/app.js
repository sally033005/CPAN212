const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cors = require("cors");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());

const educationData = [
    { school: 'University of Fictitious Studies', degree: 'BSc in Computer Science', year: '2020-2024' },
    { school: 'Fictitious Community College', degree: 'Diploma in Web Development', year: '2018-2020' }
  ];
  const experienceData = [
    { company: 'Tech Solutions Inc.', role: 'Software Developer', duration: 'Jan 2022 - Present' },
    { company: 'Web Works Ltd.', role: 'Frontend Developer Intern', duration: 'May 2021 - Aug 2021' }
  ];
  const overviewData = {
    name: 'John Doe',
    bio: 'Aspiring software engineer with a passion for developing full-stack web applications.'
  };
  
// routes

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get('/getEdu', (req, res) => {
    res.json(educationData)
});

app.get('/getExp', (req, res) => {
    res.json(experienceData)
});

app.get('/getOverview', (req, res) => {
    res.json(overviewData)
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
