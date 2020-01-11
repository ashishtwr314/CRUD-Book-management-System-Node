const express = require("express");
const router = express.Router();

const showBooksController = require("../controller/showBooksController");

router.get("/", showBooksController.showBooks);
router.post("/", showBooksController.showBooksPost);

module.exports = router;
