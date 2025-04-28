const express = require("express");

const app = express(); // or alternative let app = require('express')();
// importing databse module here
require("./database/connection.js");

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

app.get("/books", (req, res) => {
  // logic to fetch books from database
  res.json({
    message: "books fetched successfully.",
  });
});

app.post("/books", (req, res) => {
  // logic to add book to database

  res.json({
    message: "Books added successfully!!",
  });
});
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

DATABASE_URL =
  "postgresql://postgres.loghzraywjbuvnutqkif:Password@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres";

app.listen(9002, function () {
  console.log("Server started Listening ............................");
});
