const mongoose = require("mongoose"); //import

const bookSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    },
    author: {
    type: String,
    required: true,
    },
    pages: {
    type: Number,
    required: true,
    },
    genres: [
    {
    type: String,
    required: true,
    },
    ],
    date_created: {
    type: Date,
    default: Date.now
    },
    });
    // Create the model
    const Book = mongoose.model("books", bookSchema);
    module.exports = Book;