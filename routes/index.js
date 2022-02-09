const router = require("express").Router();
const PublicCard = require("../models/public.card.model");

/* GET home page */
router.get("/", (req, res, next) => {
  // PublicCard.findOneRandom(function (err, randomCard) {
  //   //select a random card from the public collection
  //   console.log(req.session.user);
  //   if (!err) {
  //     console.log(randomCard);
  //     res.render("index", {data : {randomCard: randomCard, user : req.session.user}});
  //   } else {
  //     console.log(err);
  //   }
  // });
  res.render("index");
});

module.exports = router;
