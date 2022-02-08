const mongoose = require("mongoose");
const PublicCard = require("../models/public.card.model");

//connection with DB
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/nicebreaker";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cards = [
  {
    cardText: "What Movie Do You Pretend Is Your Favorite To Sound Cultured?",
  },
  {
    cardText: "What Is Something You Can Do Better Than Anyone Else You Know?",
  },
  {
    cardText: "If You Were To Perform In The Circus, What Would You Do?",
  },
  {
    cardText: "What's the dumbest thing someone has ever said to you?",
  },
  {
    cardText:
      "If you could commit a crime and get away with it, what would that be?",
  },
  {
    cardText: "Would you go with aliens if they beamed down to Earth?",
  },
  {
    cardText:
      "When you die, would you rather have your credit card statement or your Google search history released?",
  },
  {
    cardText: "What is the most random thing you carry with you?",
  },
  {
    cardText:
      "If you could have any mythical creature as a pet what would you choose?",
  },
  {
    cardText: "What would you do if you were invisible for 24 hours?",
  },
];

PublicCard.create(cards)
  .then((newCards) => {
    console.log(`${newCards.length} cards have been created`);
    mongoose.disconnect().then(() => console.log("connection closed"));
  })
  .catch((error) => {
    console.log(error);
  });
