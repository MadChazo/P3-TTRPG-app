const { Schema, model } = require("mongoose");

const campaignSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  module: {
    type: String,
    trim: true,
  },
  days: [
    {
      type: String,
      trim: true,
    },
  ],
  story: {
    type: String,
    trim: true,
  },
  startTime: {
    type: Number,
  },
  endTime: {
    type: Number,
  },
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
