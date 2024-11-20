// npm i
// npm i express-session connect-mongo

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const book_router = require("./routers/book_router");
const user_router = require("./routers/user_router");
const session = require("express-session"); //new
const MongoStore = require("connect-mongo"); //new

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_KEY);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.log("DB Error");
});

// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_KEY,
    collection: "sessions",
    ttl: 1000 * 60 * 60 * 24, //this is time in milliseconds -> so 24 hours (ttl: time to live)
    //ttl: 1000 * 5, //this is time in seconds -> so 5 seconds (ttl: time to live)
  }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, 
}))

// routes
app.use("/book", book_router);
app.use("/user", user_router);

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/test-session", (req, res) => {
  console.log(req.session)
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>Views: " + req.session.views + "</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("Welcome to the session demo. Refresh!");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
