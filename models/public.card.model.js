const { Schema, model } = require("mongoose");

const publicCardSchema = new Schema(
  {
    public: {
      type: boolean,
      default: true,
    },
    cardText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("publicCard", publicCardSchema);
