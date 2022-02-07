const { Schema, model } = require("mongoose");

const publicCardSchema = new Schema(
  {
    public: {
      type: boolean,
      default: true,
    },
    cardText: String,
  },
  { timestamp: true }
);

module.exports = model("publicCard", publicCardSchema);
