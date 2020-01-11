const Book = require("../model/Book");

exports.addBooks = (req, res, next) => {
  res.render("add-books.ejs");
};

exports.bookAdded = (req, res, next) => {
  const book = new Book(
    req.body.bookName,
    req.body.bookDesc,
    req.body.bookPrice,
    req.body.bookAuthor
  );
  book
    .saveBook()
    .then(result => {
      res.redirect("/");
    })
    .catch(err => {});
};
