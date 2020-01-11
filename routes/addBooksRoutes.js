const express = require("express");
const router = express.Router();
const addBooksController = require("../controller/addBooksController");

router.get("/add-books", addBooksController.addBooks);
router.post("/book-added", addBooksController.bookAdded);

module.exports = router;
