const { model, Schema } = require("mongoose");

const privateCardSchema = new Schema(
  {
    cardText: {
      type: String,
      required: true,
    },
    label: {
      type: [String],
      enum: ["SFW", "dinner table", "night out", "first date"],
    },
    hasWorked: boolean,
    hasNotWorked: boolean,
    publicCardId: String,
    public: { type: boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("privateCard", privateCardSchema);
