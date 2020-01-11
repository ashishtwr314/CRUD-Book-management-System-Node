/* Required  imports */
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

/* Required Settings */
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

/* Rquired Routes */
const showBooks = require("./routes/showBooksRoutes");
const addBooks = require("./routes/addBooksRoutes");
const bookDetails = require("./routes/bookdetailsRoutes");
const deleteBooks = require("./routes/deleteBooksRoutes");
const editBooks = require("./routes/editBooksRoutes");

/* Initializing Routes */
app.use(showBooks);
app.use(addBooks);
app.use(bookDetails);
app.use(deleteBooks);
app.use(editBooks);

app.use("/", (req, res, next) => {
  res.render(path.join(__dirname, "views", "404.ejs"));
});

app.listen(3000);
