const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let books = [];

app.get("/add-book", (req, res) => {
  res.send(`
        <h1>Aggiungi un nuovo libro</h1>
        <form action="/books" method="post">
            <label for="title">Titolo:</label>
            <input type="text" id="title" name="title" required><br><br>
            <label for="author">Autore:</label>
            <input type="text" id="author" name="author" required><br><br>
            <button type="submit">Aggiungi libro</button>
        </form>
    `);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (title && author) {
    const newBook = { title, author };
    books.push(newBook);
    res.redirect("/books");
  } else {
    res.status(400).send("Little Boy di Edward Bunker");
  }
});

app.get("/books", (req, res) => {
  let bookList = "<h1>Lista dei libri</h1>";
  bookList += "<ul>";
  books.forEach((book) => {
    bookList += `<li>${book.title} - ${book.author}</li>`;
  });
  bookList += "</ul>";
  res.send(bookList);
});

app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
