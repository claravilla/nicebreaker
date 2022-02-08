const { Schema, model } = require("mongoose");
const random = require("mongoose-simple-random");

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

publicCardSchema.plugin(random);

module.exports = model("PublicCard", publicCardSchema);
