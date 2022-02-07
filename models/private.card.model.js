const { model, Schema } = require("mongoose");

const privateCardSchema = new Schema(
  {
    cardText: {
      type: String,
      required: true,
    },
    label: {
      type: [String], //the user can select multiple labels from the list
      enum: ["SFW", "dinner table", "night out", "first date"],
    },
    hasWorked: Boolean,
    hasNotWorked: Boolean,
    publicCardId: String,
    public: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("PrivateCard", privateCardSchema);
