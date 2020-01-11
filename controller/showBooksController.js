const Book = require("../model/Book");
// const books = null;
exports.showBooks = (req, res, next) => {
  Book.fetchAll()
    .then(result => {
      res.render("index.ejs", {
        books: result[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.showBooksPost = (req, res, next) => {
  Book.fetchAll()
    .then(result => {
      res.render("index.ejs", {
        books: result[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
};
