const express = require("express");
const { books } = require("./DB/connection.js");
const { fetchbooks } = require("./controllers/db.controller.js");
const authRoute = require("./routes/books.route.js");

const app = express(); // or alternative let app = require('express')();
// importing databse module here
require("./DB/connection.js");
// it generally tells backend to view data as json so that when we receiva a body from user side we can use the data in database and view in console
app.use(express.json());

///////////////////////////////////// request and response for a certain route .

/* app.get("/", (req, res) => {
  res.send("bye world");
});
app.get("/about", (req, res) => {
  res.json({
    name: "hello",
    address: "itahari",
  });
}); 
*/
///////////////////////// crud operation api ////////////////////

app.use("/", authRoute);

// delete books
app.delete("/books/:id", (req, res) => {
  res.json({
    message: "book deleted successfully.",
  });
});

// update books
app.patch("/books/:id", (req, res) => {
  res.json({
    message: "Book updated Successfully.",
  });
});

app.listen(9002, function () {
  console.log("Server started Listening ............................");
});
