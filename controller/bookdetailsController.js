const Book = require("../model/Book");

exports.getBookDetails = (req, res, next) => {
  const bookId = req.params.bookId;
  Book.findById(bookId)
    .then(book => {
      res.render("book-details.ejs", {
        book: book[0][0]
      });
    })
    .catch(err => {
      console.log(err);
    });
  // ;
};
