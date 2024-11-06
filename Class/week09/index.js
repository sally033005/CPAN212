/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon mongoose dotenv
*/

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


// adding our mongoDB database
const mongoose = require("mongoose"); // importing the dependancy
mongoose.connect(process.env.MONGODB_KEY); // establishing a connection -> connect command + an api string to connect to our database
// this does not keep the connection, only establishes where it will go to connect
const db = mongoose.connection; // saving the databse usecase into a variable


db.once("open", () => {
    // Check connection
    console.log("Connected to MongoDB");
});


db.on("error", (err) => {
    // Check for DB errors
    console.log("DB Error");
});


// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes

const Book = require("./models/book");

app.get("/book/fetch-all-try", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books); // Return the fetched books as JSON
    } catch (err) {
        res.status(500).send(err); // Handle error
    }
});

// 2. Promises (preffered)
app.get("/book/fetch-all-promises", (req, res) => {
    Book.find()
        .then((books) => {
            res.json(books); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

app.get("/", (req, res) => {
    res.send("Welcome to our server");
});

// 2. Promises (preffered)
app.get("/book/fetch-filter", (req, res) => {
    Book.find({ title: "The Great Gatsby" })
        .then((books) => {
            res.json(books); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

app.get("/book/basic-search", (req, res) => {
    Book.find({ title: "The Great Gatsby" },
        // {price: 0},
        { title: 1 })
        .then((books) => {
            res.json(books); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

app.get("/book/advance-search", (req, res) => {
    //http://localhost:8001/book/advance-search?title=The%20Great%20Gatsby
    let filter = {}
    if (req.query.title) {
        filter.title = req.query.title
    }

    // if(req.query.pages) {
    //     let pages = parseInt(req.query.pages)
    //     if(req.query.pages === "lt") {
    //         filter.pages = {$lt: pages}
    //     }
    //     if(req.query.pages === "gt") {
    //         filter.pages = {$gt: pages}
    //     }
    //     if(req.query.pages === "eq") {
    //         filter.pages = pages
    //     }
    // }

    Book.find(filter)
        .then((books) => {
            res.json(books); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

app.post("/book/save-book", async (req, res) => {
    const { title, author, pages, genres } = req.body;
    console.log(req.body)
    // Create a new book instance
    const newBook = new Book({
        title,
        author,
        pages,
        genres,
    });
    newBook.save()
        .then((savedBook) => {
            res.status(201).json(savedBook);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.delete("/delete-book", (req, res) => {
    const bookId = req.body._id;
    Book.deleteOne({ _id: bookId })
        .then((result) => {
            if (result.deletedCount === 0) {
                return res.status(404).send({ message: "Book not found" });
            }
            res.status(200).send({ message: "Book deleted successfully" });
        })
        .catch((err) => {
            res.status(500).send(err); // Handle any errors
        });
});

app.get("/", (req, res) => {
    res.send("Welcome to our server");
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


app.use("", (req, res) => {
    res.status(404).send("Page not found");
});