const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    characters: [Character]
    password: String
    campaigns: [Campaign]
}    
type Character {
    _id: ID
    name: String
    class: String
    stats: CharacterStats
    backstory: String
    user: User
    campaigns: [Campaign]
}
type CharacterStats {
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
}

type Campaign {
    _id: ID
    name: String
    description: String
    day: String
    characters: [Character]
    gm: User
    players: [User]
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
    addCampaign(name: String!, description: String!, day: String!): Campaign
    addCharacter(name: String!, classRole: String!, backstory: String!, stats: CharacterStatsInput): Character
    characterInCampaign(characterId: ID, campaignIds: [ID]): Character
}
input CharacterInput {
    name: String
    class: String
    stats: CharacterStatsInput
    backstory: String
}
  
input CharacterStatsInput {
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
  }
  
type Query {
    characters: [Character]
    users: [User]
    user(id: ID!): User
    campaigns: [Campaign]
}
`;

module.exports = typeDefs;
