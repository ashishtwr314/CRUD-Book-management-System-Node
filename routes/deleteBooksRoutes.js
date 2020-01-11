const express = require("express");
const router = express.Router();
const deleteBooksGet = require("../controller/deleteBooksController");
const deleteBooksById = require("../controller/deleteBooksController");

router.get("/delete-books/:bookId", deleteBooksGet.deleteBooksById);
router.get("/delete-books", deleteBooksGet.deleteBooksGet);

module.exports = router;
