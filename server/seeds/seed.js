const db = require("../config/connection.js");
const { User, Character, Campaign } = require("../models");
const cleanDB = require("./cleanDB");

const userData = require("./userData.json");
const characterData = require("./characterData.json");
const campaignData = require("./campaignData.json");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Character", "characters");
  await cleanDB("Campaign", "campaigns");

  const users = await User.insertMany(userData);
  const characters = await Character.insertMany(characterData);
  const campaigns = await Campaign.insertMany(campaignData);

  for (newCharacter of characters) {
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.characters.push(newCharacter);
    newCharacter.user = tempUser;
    await tempUser.save();
  }

  for (newUser of users) {
    const tempCampaign =
      campaigns[Math.floor(Math.random() * campaigns.length)];
    tempCampaign.players.push[newUser];
    newUser.campaigns.push[tempCampaign];
    await tempCampaign.save();
  }

  // Sets a random player as GM of each campaign
  for (newCampaign of campaigns) {
    if (newCampaign.players.length) {
      const tempGM =
        newCampaign.players[
          Math.floor(Math.random() * newCampaign.players.length)
        ];
      newCampaign.gm = tempGM;
      await tempGM.save();
    }
  }

  console.log("Seed complete.");
  process.exit(0);
});
