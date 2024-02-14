const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  classRole: {
    type: String,
    required: true,
    trim: true,
  },
  backstory: {
    type: String,
    trim: true,
  },
  strength: { type: Number, default: 10 },
  dexterity: { type: Number, default: 10 },
  constitution: { type: Number, default: 10 },
  intelligence: { type: Number, default: 10 },
  wisdom: { type: Number, default: 10 },
  charisma: { type: Number, default: 10 },
  campaigns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Character = model("Character", characterSchema);

module.exports = Character;
