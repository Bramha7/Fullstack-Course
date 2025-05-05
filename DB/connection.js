////////////////////////////// logic behind connection of database///////////////////////////

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres.loghzraywjbuvnutqkif:IqpywCRzaUVS4Qmh@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
);
//////////////////////////////// checking whether connection is successsful or not
sequelize
  .authenticate()
  .then(() => {
    console.log("Authentication successful.");
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// storing the model in db object so that it will be runned in app.js while importing
db.books = require("../DB/Models/bookModel.js")(sequelize, DataTypes);

sequelize.sync({ alter: false }).then(() => {
  console.log("done");
});

module.exports = db;
