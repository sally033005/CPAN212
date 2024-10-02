// npm init -y
// npm install express nodemon

// addition: register route, get and post
const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const path = require("path");
const logger = require("./middleware/logger")
const auth = require("./middleware/auth")
// const {auth1} = require("./middleware/auth")

// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

// routes
app.get("/", logger, auth, (req, res) => {
    // logger(req);  (doesn't need this if we pass the logger function above)
    res.send("Welcome to our server");
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
    res.status(404).send("Page not found");
});
