const { User, Character, Campaign } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("characters");
    },
    user: async (parent, { id }) => {
      return await User.findById(id).populate("characters");
    },
    characters: async () => {
      return await Character.find({}).populate("campaigns");
    },
    campaigns: async () => {
      return Campaign.find().populate("players").populate("gm");
    },
  },
  Character: {
    campaigns: async (parent) => {
      return await Campaign.find({ _id: { $in: parent.campaigns} });
    }
  },
  Campaign: {
    gm: async (parent) => {
      if (parent.players.length > 0) {
        const randomIndex = Math.floor(Math.random() * parent.players.length);
        const randomPlayerId = parent.players[randomIndex];
        const gameMaster = await User.findById(randomPlayerId);
        return gameMaster;
      }
    },
  },
};

module.exports = resolvers;