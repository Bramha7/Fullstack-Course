const { books } = require("../DB/connection.js");
const sendbooks = async (req, res) => {
  // logic to add book to database
  if (req.body === undefined) {
    res.status(401).json({
      message: "All fields are required",
    });
  } else {
    let { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
    if (!bookPrice || !bookName || !bookAuthor || !bookGenre) {
      res.status(400).send({
        message: "All fields are required.",
      });
    } else {
      await books.create({
        bookTitle: bookName,
        bookPrice,
        bookGenre,
        bookAuthor,
      });
      res.status(201).json({
        message: "Books are added succssfully!!",
      });
    }
  }
  // validationg user to enter the forms
};

const fetchbooks = async (req, res) => {
  // logic to fetch books from database
  const BookFetched = await books.findAll();
  res.json({
    Books: BookFetched,
    message: "Books fetched Successfully!!",
  });
};

// code to delete book
const deletebook = async (req, res) => {
  // logic to delete

  let id = req.params.id;
  id = Number(id);
  if (isNaN(id)) {
    res.status(400).send({
      message: "id must be a number",
    });
  } else {
    await books.destroy({
      where: {
        id, // its same as id:id
      },
    });
    res.json({
      message: "book deleted Successfully.",
    });
  }
};

module.exports = { fetchbooks, sendbooks, deletebook };
