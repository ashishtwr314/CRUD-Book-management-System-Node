const express = require("express");
const router = express.Router();
const bookdetailsController = require("../controller/bookdetailsController");

router.get("/details/:bookId", bookdetailsController.getBookDetails);

module.exports = router;
