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
  stats: {
    strength: { type: Number, default: 0 },
    dexterity: { type: Number, default: 0 },
    constitution: { type: Number, default: 0 },
    intelligence: { type: Number, default: 0 },
    wisdom: { type: Number, default: 0 },
    charisma: { type: Number, default: 0 },
  },
  backstory: {
    type: String,
    trim: true,
  },
  campaigns: [Campaign],
  user: User,
});

const Character = model("Character", characterSchema);

module.exports = Character;
