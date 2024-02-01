const { Schema, model } = require("mongoose");
const User = require("./User.js");
const Campaign = require("./Campaign.js");

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  campaigns: [Campaign],
  user: User,
});

const Character = model("Character", characterSchema);

module.exports = Character;
