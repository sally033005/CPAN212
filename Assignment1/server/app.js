const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const educationDetails = [
    {
        school: 'Humber College, Toronto, ON',
        degree: 'Diploma in Computer Programming',
        honors: "Dean’s Honour List: Fall 2023 & Winter 2024",
        graduation: 'Expected Graduation: May 2025',
    },
    {
        school: 'Lingnan University, Hong Kong',
        degree: 'Bachelor of History',
        honors: null,
        graduation: 'Sep 2013 – July 2017',
    },
];

const experienceDetails = [
    {
        title: 'Crew Member',
        company: 'Fusia Asian Kitchen',
        location: 'Etobicoke, ON',
        dates: 'April 2024 – June 2024',
        responsibilities: [
            'Collaborated in a fast-paced team environment to deliver high-quality customer service, developing adaptability and quick problem-solving skills under pressure.'
        ]
    },
    {
        title: 'Clerk',
        company: 'Po Shing Medical (Hong Kong) Limited',
        location: 'Hong Kong',
        dates: 'August 2017 – August 2023',
        responsibilities: [
            'Handled data entry, record-keeping, and inventory management with a focus on accuracy and efficiency.',
            'Responded to customer inquiries, honing communication and problem-solving skills.',
            'Performed basic technical support and troubleshooting tasks related to office systems and software, ensuring smooth daily operations.'
        ]
    },
    {
        title: 'Administrative Assistant',
        company: 'Salala Education Group Limited',
        location: 'Hong Kong',
        dates: 'June 2014 – August 2016',
        responsibilities: [
            'Used software tools like Microsoft Outlook and Slack to organize and manage event data, schedules, and documentation, ensuring smooth project execution and effective team communication.',
            'Assisted in maintaining digital records and generating reports, improving office efficiency through structured file management and data organization.',
            'Communicated effectively across departments, enhancing collaboration and ensuring project timelines were met.'
        ]
    },
    {
        title: 'Part-time Retail Sales Assistant',
        company: 'Ngong Ping 360 Limited',
        location: 'Hong Kong',
        dates: 'June 2014 – October 2014',
        responsibilities: [
            'Maintained inventory accuracy and supported store operations, contributing to efficient team collaboration.'
        ]
    }
];

const overviewDetails = {
    introduction: "I am a Computer Programming student at Humber College with a strong passion for software development. I have hands-on experience in full-stack development, specializing in web technologies like React, Node.js, and Express.",
    goal: "I am seeking opportunities to apply my skills in real-world projects through co-op placements, with a long-term goal of becoming a professional software engineer.",
    skills: {
        "Programming Languages": ["Java", "Python", "JavaScript"],
        "Front-end Development": ["React", "HTML", "CSS"],
        "Back-end Development": ["Node.js", "Express"],
        "Database Management": ["SQL", "MongoDB"],
        "Operating Systems": ["Windows", "Linux"]
    }
};

// routes

app.get("/", (req, res) => {
    res.send("Welcome to our server");
});

app.get('/getEdu', (req, res) => {
    res.json(educationDetails)
});

app.get('/getExp', (req, res) => {
    res.json(experienceDetails);
});

app.get('/getOverview', (req, res) => {
    res.json(overviewDetails)
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
    res.status(404).send("Page not found");
});
