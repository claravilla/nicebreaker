const router = require("express").Router();
const mongoose = require("mongoose");
const PublicCard = require("../models/public.card.model");

/* GET home page */
router.get("/", (req, res, next) => {
  PublicCard.findOneRandom(function (err, result) {
    //select a random card from the public collection
    if (!err) {
      console.log(result);
      res.render("index", result);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
