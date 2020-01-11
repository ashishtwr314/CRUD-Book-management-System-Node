const Book = require("../model/Book");

exports.editBook = (req, res, next) => {
  Book.fetchAll()
    .then(books => {
      res.render("edit-books", {
        books: books[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.editBookByID = (req, res, next) => {
  Book.findById(req.params.bookId)
    .then(book => {
      res.render("edit-form", {
        book: book[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.bookEdited = (req, res, next) => {
  Book.editBookById(req.body)
    .then(book => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
};
