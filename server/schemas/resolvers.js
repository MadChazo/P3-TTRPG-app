const { User, Character, Campaign } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

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
    },
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
        throw new AuthenticationError('Authenticartion failed');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Authentication failed');
      }

      const token = signToken(user);
      return { token, user };
    },
    addCharacter: async (parent, { characterInput }, { user }) => {
      if (!user) {
        throw new AuthenticationError('User not authenticated');
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
    addCampaign: async (parent, { campaignInput }, { user }) => {
      if (!user) {
        throw new AuthenticationError('User not authenticated');
      }
      const newCampaign = await Campaign.create({
        ...campaignInput,
        gm: user._id,
      });

      await User.findByIdAndUpdate(user._id, {
        $push: {
          campaigns: newCampaign._id,
        },
      });

      return newCampaign;
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
