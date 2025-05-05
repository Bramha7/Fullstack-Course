const { DataTypes } = require("sequelize");

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    // all the schema defi
    bookTitle: {
      type: DataTypes.STRING,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      defaultValue: "Elliot", // provides fefault value in case of no user input
    },
    bookGenre: {
      type: DataTypes.STRING,
    },
  });
  return Book;
};

module.exports = bookModel;
