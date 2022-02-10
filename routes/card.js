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
      res.render("mycards/my-cards", { errorMessage: error });
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
  //if boolean is in the array of labels we set it to true
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
  PrivateCard.create({
    cardText,
    SFW,
    dinnerTable,
    nightOut,
    firstDate,
    userId,
  }) //create card in private collection
    .then((createdCard) => {
      cardId = createdCard._id;
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
      next(error);
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
  //if the boolean are in the array of labels, we set them to true
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
      res.redirect("/mycards");
    })
    .catch((error) => {
      next(error);
      res.render("mycards/edit-card", { errorMessage: error });
    });
});

//DELETING AN EXISTING CARD

router.post("/:id/delete", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  PrivateCard.findByIdAndDelete(id)
    .then((id) => {
      res.redirect("/mycards");
    })
    .catch((error) => {
      next(error);
      res.render("mycards/my-cards", { errorMessage: error });
    });
});

//BOOKMARKING A CARD

router.post("/bookmark/:id", (req, res, next) => {
  const { id } = req.params; //public card Id
  const userId = req.session.user._id;
  PublicCard.findById(id)
    .then((foundCard) => {
      const { cardText, _id: id } = foundCard; //getting details of the public card
      return PrivateCard.create({ cardText });
    })
    .then((createdCard) => {
      //create card in private collection
      cardId = createdCard._id;
      return User.findByIdAndUpdate(
        userId,
        { $push: { cards: cardId } },
        { new: true } //add card to the the user record
      );
    })
    .catch((error) => {
      next(error);
      res.render("index", { errorMessage: error });
    });
});

// FILTER CARDS

router.get("/filter", isLoggedIn, (req, res, next) => {
  const userId = req.session.user._id;
  let queryString = {
    userId: userId,
  };
  for (let key in req.query) {
    //adding the filter coming from the query to the obj
    queryString[key] = true;
  }
  PrivateCard.find(queryString)
    .then((userCards) => {
      res.render("mycards/my-cards", {
        userCards: userCards,
        filter: queryString,
      });
    })
    .catch((error) => {
      next(error);
      res.render("mycards/my-cards", { errorMessage: error });
    });
});

module.exports = router;
