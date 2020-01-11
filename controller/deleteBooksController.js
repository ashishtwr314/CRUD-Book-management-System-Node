const Book = require("../model/Book");

exports.deleteBooksGet = (req, res, next) => {
  Book.fetchAll()
    .then(result => {
      res.render("delete-books", {
        books: result[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.deleteBooksById = (req, res, next) => {
  const id = req.params.bookId;
  Book.deleteById(id)
    .then(result => {
      res.redirect("/");
    })
    .catch(err => {
      console.log("DELETION ERROR");
    });
};
