const { User, Character, Campaign } = require("../models");
// const { signToken, AuthenticationError } = require("");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("characters").populate("campaigns");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate("characters")
        .populate("campaigns");
    },
    characters: async () => {
      return Character.find().populate("user").populate("campaigns");
    },
    campaigns: async () => {
      return Campaign.find().populate("players").populate("gm");
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addCharacter: async (parent, { characterInput }, { user }) => {
      if (!user) {
        throw AuthenticationError;
      }
      const newCharacter = await Character.create({
        ...characterInput,
        user: user._id,
      });

      await User.findByIdAndUpdate(user._id, {
        $push: { characters: newCharacter._id },
      });

      return newCharacter;
    },

    characterInCampaign: async (parent, { characterId, campaignIds }) => {
      const updatedCharacter = await Character.findByIdAndUpdate(
        characterId,
        { $push: { campaigns: { $each: campaignIds } } },
        { new: true }
      );

      return updatedCharacter;
    },
  },
};

module.exports = resolvers;
