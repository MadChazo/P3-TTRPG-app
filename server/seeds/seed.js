const db = require("../config/connection.js");
const { Character, User, Campaign } = require("../models");
const cleanDB = require("./cleanDB");

const characterData = require("./characterData.json");
const userData = require("./userData.json");
const campaignData = require("./campaignData.json");

db.once("open", async () => {
  await cleanDB("Character", "characters");
  await cleanDB("User", "users");
  await cleanDB("Campaign", "campaigns");

  const characters = await Character.create(characterData);
  const users = await User.create(userData);
  const campaigns = await Campaign.create(campaignData);


  for (newCharacter of characters) {
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.characters.push(newCharacter._id);
    await tempUser.save();
  }

  for (newUser of users) {
    const tempCampaign =
      campaigns[Math.floor(Math.random() * campaigns.length)];
    tempCampaign.players.push[newUser._id];
    newUser.campaigns.push[tempCampaign];
    await tempCampaign.save();
  }

  for (const newCampaign of campaigns) {
    if (newCampaign.players.length > 0) {
      const randomIndex = Math.floor(Math.random() * newCampaign.players.length);
      const randomPlayerId = newCampaign.players[randomIndex];
      await Campaign.findByIdAndUpdate(newCampaign._id, { gm: randomPlayerId });
    }
  }

  console.log("Seed complete.");
  process.exit(0);
});
