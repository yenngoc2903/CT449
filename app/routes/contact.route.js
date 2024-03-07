const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route("/favotire")
  .get(contacts.findAllFavorite);

router.route("/:id")
  .get(contects.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
