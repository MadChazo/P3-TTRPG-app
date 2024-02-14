const { User, Character, Campaign } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("characters").populate("campaigns");
    },
    user: async (parent, { _id }) => {
      return await User.findOne({ _id })
        .populate("characters")
        .populate("campaigns");
    },
    characters: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return await Character.find(params).populate("campaigns");
    },
    campaigns: async () => {
      return await Campaign.find()
        .populate("players")
        .populate("gm")
        .populate("characters");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("characters")
          .populate("campaigns");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { email, username, password }) => {
      const newUser = await User.create({ username, email, password });
      const token = signToken(newUser);
      return { token, newUser };
    },
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
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
    addCharacter: async (
      parent,
      {
        name,
        classRole,
        backstory,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      },
      context
    ) => {
      console.log(
        "Adding: ",
        name,
        classRole,
        backstory,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      );
      console.log("Context: ", context);
      if (context.user) {
        console.log(
          "Adding: ",
          name,
          classRole,
          backstory,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma
        );
        const newChar = await Character.create({
          name,
          classRole,
          backstory,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
          user: context.user._id,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { characters: newChar._id } }
        );
        return newChar;
      }
      throw AuthenticationError;
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
    removeCharacter: async (parent, { characterId }, context) => {
      if (context.user) {
        const character = await Character.findOneAndDelete({
          id: characterId,
          user: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { characters: character._id } }
        );

        return character;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
