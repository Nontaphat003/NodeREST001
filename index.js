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
            res.send(book);//
            //
            //
            //
            
            const express = require('express');
            const Sequelize = require('sequelize');
            const qpp = express();
            
            // parse incoming requests
            application.use(express.json());
            
            // create a connection to the database
            const sequelize = new Sequelize('database','username','password',{
                host: 'localhost',
                dialect: 'sqlite',
                storage: './Database/SQBooks.sqlite'
            });
            
            // define the Book model
            const Book = sequelize.define('book',{
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                title: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                author: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            });
            
            // create the books table if it doesn't exist
            sequelize.sync();
            
            // route to get all books
            app.get('/book', (req, res) => {
                Book.findAll().then(books => {
                    res.json(books);
                }).catch(err => {
                    res.status(500).send(err);
                });
            });
            
            // route to get a book by id
            app.get('/book/:id', (req, res) => {
                Book.findByPk(req.params.id).then(book => {
                    if (!book) {
                        res.status(404).send('Book not found');
                    } else {
                        res.json(book);
                    }
                }).catch(err => {
                    res.status(500).send(err);
                });
            });
            
            // route to create a new book
            app.post('/books', (req, res) => {
                Book.create(req.body).then(book => {
                    res.send(book);
                }).catch(err => {
                    res.status(500).send(err);
                });
            });
            
            // route to update a book
            app.put('/book/:id', (req,res) => {
                Book.findByPk(req.params.id).then(book => {
                    if (!book) {
                        res.status(404).send('Book not found');
                    } else {
                        book.update(req.body).then(() => {
                            res.send(book);
                        }).catch(err => {
                            res.status(500).send(err);
                        });
                    }
                }).catch(err => {
                    res.status(500).send(err);
                });
            });
            
            // route to delete a book
            app.delete('/book/:id', (req,res) => {
                Book.findByPk(req.params.id).then(book => {
                    if (!book) {
                        res.status(404).send('Book not found');
                    } else {
                        book.destroy().then(() => {
                            res.send({});
                        }).catch(err => {
                            res.send(500).send(err);
                        });
                    }
                }).catch(err => {
                    res.status(500).send(err);
                });
            });
            
            // start the sever
            const port = process.env.PORT || 3000;
            app.listen(port, () => console.log(`Listening on port ${port}...`));
            
            
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



