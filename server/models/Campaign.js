const { Schema, model } = require("mongoose");

const campaignSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  day: {
    type: String,
    trim: true,
  },
  // description: {
   // type: String,
   // trim: true,
 // },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  gm: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;
