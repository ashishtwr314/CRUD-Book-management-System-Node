const db = require("../util/database");

module.exports = class Book {
  constructor(bookName, bookDesc, bookPrice, bookAuthor) {
    this.bookName = bookName;
    this.bookDesc = bookDesc;
    this.bookPrice = bookPrice;
    this.bookAuthor = bookAuthor;
  }

  static fetchAll = () => {
    return db.execute("SELECT * FROM books");
  };

  saveBook = () => {
    return db.execute(
      `INSERT INTO books(book_name, book_description, book_price, book_author) 
      VALUES ("${this.bookName}", "${this.bookDesc}", "${this.bookPrice}", "${this.bookAuthor}");`
    );
  };

  static findById = id => {
    return db.execute("SELECT * FROM books WHERE books.book_id = ?", [id]);
  };

  static deleteById = id => {
    // console.log(id);
    return db.execute("DELETE FROM books WHERE books.book_id = ? ", [id]);
  };

  static editBookById = data => {
    console.log(data);

    return db.execute(
      `UPDATE books SET book_name = "${data.bookName}", book_description = "${data.bookDesc}", book_price = "${data.bookPrice}", book_author= "${data.bookAuthor}" WHERE book_id = "${data.bookId}"`
    );
  };
};
