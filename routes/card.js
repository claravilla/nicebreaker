const router = require("express").Router();
//set in app.js to point here for everything starting with "/mycards"

const mongoose = require("mongoose");
const { Session } = require("express-session");

//Models
const PublicCard = require("../models/public.card.model");
const PrivateCard = require("../models/private.card.model");
const User = require("../models/User.model");

//Middleware for route guards
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", (req, res, next) => {
  const userId = req.session.user._id; //getting the user ID from the session object
  User.findById(userId)
    .populate("cards")
    .then((foundUser) => {
      let userCards = foundUser.cards;
      res.render("mycards/my-cards", { cards: userCards });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });

  res.render("mycards/my-cards");
});

module.exports = router;
