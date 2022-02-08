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

router.get("/", isLoggedIn, (req, res, next) => {
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
});

//CREATING A NEW CARD

router.get("/new", isLoggedIn, (req, res, next) => {
  res.render("mycards/create-card");
});

router.post("/new", (req, res, next) => {
  const { cardText, label } = req.body; //getting the data from the form
  const userId = req.session.user._id; //getting the user ID
  PrivateCard.create({ cardText, label }) //create card in private collection
    .then((createdCard) => {
      cardId = createdCard._id;
      console.log(createdCard);
      return User.findOneAndUpdate(
        { id: userId },
        { $push: { cards: cardId } },
        { new: true } //add card to the the user record
      );
    })
    .then(() => {
      res.redirect("/mycards");
    })
    .catch((error) => {
      console.log(error);
      res.render("mycards/create-card", { errorMessage: error });
    });
});

//EDITING AN EXISTING CARD
router.get("/:id/edit", (req, res, next) => {
  const { cardId } = req.params;
  PrivateCard.findById({ _id: cardId }).then((card) => {
    res.render("mycards/edit-card", { card });
  });
});

router.post("/:id/edit", isLoggedIn, (req, res, next) => {
  const { cardId } = req.params;
  const { cardText, labels, hasWorked, hasNotWorked } = req.body;
  PrivateCard.findByIdAndUpdate(
    { _id: cardId },
    { cardText, labels, hasWorked, hasNotWorked },
    { new: true }
  )
    .then((card) => {
      console.log("card had been update: ", card);
      res.redirect("/");
    })
    .catch((error) => {
      res.render("mycards/edit-card", { errorMessage: error });
    });
});

//DELETING AN EXISTING CARD

//rendering the modal when the delete button is created
router.get("/:id/delete", isLoggedIn, (req, res, next) => {
  const cardId = req.params;
  res.render("mycards/modal");
});

//delete the card

router.post("/:id/delete", isLoggedIn, (req, res, next) => {
  const cardId = req.params;
  PrivateCard.deleteOne({ _id: cardId }).then(() => {
    console.log("card has been deleted");
    res.redirect("mycards");
  });
});

module.exports = router;
