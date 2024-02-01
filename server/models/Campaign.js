const { Schema, model } = require("mongoose");
const User = require("./User.js");
const Character = require("./Character.js");

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
  characters: [Character],
  players: [User],
  gm: User,
});

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;
