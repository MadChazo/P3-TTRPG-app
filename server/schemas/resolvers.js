const { User, Character, Campaign } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

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
      return await Campaign.find().populate("players").populate("gm");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const newUser = await User.create({ username, email, password });
      const token = signToken(newUser);
      return { token, newUser };
    },
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      console.log(user, " found");
      if (!user) {
        console.log("Incorrect User");
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        console.log("Incorrect Password");
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
    addCampaign: async (parent, { campaignInput }, { user }) => {
      if (!user) {
        throw AuthenticationError;
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
