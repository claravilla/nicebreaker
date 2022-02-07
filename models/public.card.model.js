const { Schema, model } = require("mongoose");

const publicCardSchema = new Schema(
  {
    public: {
      type: Boolean,
      default: true,
    },
    cardText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("PublicCard", publicCardSchema);
