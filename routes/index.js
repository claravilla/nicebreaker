const router = require("express").Router();
const PublicCard = require("../models/public.card.model");

/* GET home page */
router.get("/", (req, res, next) => {
  PublicCard.findOneRandom(function (err, randomCard) {
    //select a random card from the public collection
    if (!err) {
      console.log(randomCard);
      res.render("index", { randomCard });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
