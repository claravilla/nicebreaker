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
      res.render("mycards/my-cards", { userCards });
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
  let keys = Object.keys(req.body); //getting the label from the body
  let listOfKeys = keys.map((elem) => elem); //put then in an array
  let label = listOfKeys.splice(1); //drop the cardText
  //initialising boolean to false
  let SFW = false,
    dinnerTable = false,
    nightOut = false,
    firstDate = false;
  //if boolean is the array of label we set it to true
  if (label.includes("SFW")) {
    SFW = true;
  }
  if (label.includes("dinner table")) {
    dinnerTable = true;
  }
  if (label.includes("night out")) {
    nightOut = true;
  }
  if (label.includes("first date")) {
    firstDate = true;
  }
  const cardText = req.body.cardText; //getting the cardText from the body
  const userId = req.session.user._id; //getting the user ID
  console.log("this is the logged in user ", userId);
  PrivateCard.create({ cardText, SFW, dinnerTable, nightOut, firstDate }) //create card in private collection
    .then((createdCard) => {
      cardId = createdCard._id;
      console.log("this is the used id inside the create card ", userId);
      return User.findByIdAndUpdate(
        userId,
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
  const { id: cardId } = req.params;
  PrivateCard.findById(cardId).then((card) => {
    res.render("mycards/edit-card", card);
  });
});

router.post("/:id/edit", isLoggedIn, (req, res, next) => {
  const { id: cardId } = req.params;

  let keys = Object.keys(req.body); //getting the label from the body
  let listOfKeys = keys.map((elem) => elem); //in an array
  let label = listOfKeys.splice(1); //drop the cardText
  //initialising boolean to false
  let SFW = false,
    dinnerTable = false,
    nightOut = false,
    firstDate = false;
  //if the boolean are in the array of label, we set them to true
  if (label.includes("SFW")) {
    SFW = true;
  }
  if (label.includes("dinner table")) {
    dinnerTable = true;
  }
  if (label.includes("night out")) {
    nightOut = true;
  }
  if (label.includes("first date")) {
    firstDate = true;
  }
  const cardText = req.body.cardText;

  PrivateCard.findByIdAndUpdate(
    { _id: cardId },
    { cardText, SFW, dinnerTable, nightOut, firstDate },
    { new: true }
  )
    .then((card) => {
      console.log("card had been update: ", card);
      res.redirect("/mycards");
    })
    .catch((error) => {
      res.render("mycards/edit-card", { errorMessage: error });
    });
});

//DELETING AN EXISTING CARD

router.post("/:id/delete", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  PrivateCard.findByIdAndDelete(id).then((id) => {
    console.log("card has been deleted, id ", id);
    res.redirect("/mycards");
  });
});

// SFW filter
router.get("/sfw", isLoggedIn, (req, res, next) => {
  console.log(req.body);
});

module.exports = router;
