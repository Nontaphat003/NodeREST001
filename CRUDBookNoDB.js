//
//
//
//
require("dotenv").config();
const express = require('express');
const app = express();

// parse inconing requests
app.use(express.json());

// sample data
let books = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1'
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3'
    },
];

// route to get all books
app.get('/books', (req, res) => {
    res.json(books);
});

//
app.get('/books/:id', (req, res) => {
    const book = books.find(d => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book ont found');
    res.json(book);
});

// route to update a book
app.post('/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});

//
app.get('/books/:id', (req, res) => {
    const book = books.find(d => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book ont found');
    book.title = req.body.title;
    book.author = req.body.author;
    res.send(book);
});

//
app.get('/books/:id', (req, res) => {
    const book = books.find(d => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book ont found');
    const index = books.indexOf(book);
    book.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
