const { model, Schema } = require("mongoose");

const privateCardSchema = new Schema(
  {
    cardText: {
      type: String,
      required: true,
    },
    SFW: Boolean,
    dinnerTable: Boolean,
    nightOut: Boolean,
    firstDate: Boolean,
    hasWorked: Boolean,
    hasNotWorked: Boolean,
    publicCardId: String,
    public: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = model("PrivateCard", privateCardSchema);
