const router = require("express").Router();
const PublicCard = require("../models/public.card.model");

/* GET home page */
router.get("/", (req, res, next) => {
  PublicCard.findOneRandom(function (error, randomCard) {
    //select a random card from the public collection
    if (!error) {
      res.render("index", { randomCard });
    } else {
      next(error);
      res.render("index", { errorMessage: error });
    }
  });
});

module.exports = router;
