const express = require("express");
const router = express.Router();
const editBooksController = require("../controller/editBooksController");

router.get("/edit-books", editBooksController.editBook);
router.get("/edit-books/:bookId", editBooksController.editBookByID);
router.post("/edited", editBooksController.bookEdited);

module.exports = router;
