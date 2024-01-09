/*require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => { 
    res.send('Hello World! Testing Nodemon UU');
});

app.listen(port,
    () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });*/

//
//
//
//

const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

// connect to database
const db = new sqlite3.Database('./Database/Book.sqlite');

//parse incoming requests
app.use(express.json());

// create books table of it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGR PRIMARY KEY,
    title TEXT,
    author TEXT
)`);

// route to get all books
app.get('/books', (req, res) => {
    db.all('SELECT * FROM books', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rows);
        }
    });
});
        
// route to get a book by id     
app.get('/books', (req, res) => {   
    db.get('SELECT * FROM books WHERE id = ?', req.params.id, (err, row) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (!row) {
                res.status(404).send('Book not found');
            } else {
                res.json(row);
            }
        }
    });
});

// route to create a new book
app.post('book', (req, res) => {
    const book = req.body;
    db.run('INERT INTO books (title, author) VALUES (7, 7)', book.author, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            book.id = this.lastID;
            res.send(book);
        }
    });
});

// route to update a book
app.put('/books/:id', (req, res) => {
    const book = req.body;
    db.run('UPDATE books SET title =?, author = ? WHERE id = ?', book.title, book.author, req.params.id, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(book);
        }
    });
});

// route to delete a book
app.delete('/books/:id', (req, res) => {
    db.run('DELETE FROM books WHERE id = ?', req.params.id, function(err) {
        if (err) {
            res.status(500).send(err);
        }else {
            res.send({});
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));



