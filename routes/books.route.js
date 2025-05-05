const {
  fetchbooks,
  sendbooks,
  deletebook,
} = require("../controllers/db.controller");

const router = require("express").Router();

router.route("/books").post(sendbooks).get(fetchbooks);
router.route("/delete/:id").get(deletebook);

module.exports = router;
