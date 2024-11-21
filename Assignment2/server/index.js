// npm i cors express nodemon mongoose dotenv

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const recipes_router = require("./routes/recipes_router");

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

// routes
app.use("/recipe", recipes_router);

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;