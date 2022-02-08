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

//GET USER CARDS

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

//CREATING A NEW CARD

router.get("/new", (req, res, next) => {
  res.render("mycards/create-card");
});

router.post("/new", (req, res, next) => {
  const { cardText, labels } = req.body;
  const userId = req.session.user._id;
  PrivateCard.create(cardText, labels)
    .then((createdCard) => {
      cardId = createdCard._id;
      return User.findOneAndUpdate(
        { id: userId },
        { $push: { cards: cardId } }
      );
    })
    .then(() => res.redirect("/mycards"))
    .catch((error) => {
      console.log(error);
      res.render("mycards/create-card", { errorMessage: error });
    });
});

module.exports = router;
