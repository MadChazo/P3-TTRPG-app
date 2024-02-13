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
    classRole: String
    backstory: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    user: User
    campaigns: [Campaign]
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
    addCharacter(name: String!, classRole: String!, backstory: String!, strength: Int!, dexterity: Int!, constitution: Int!, intelligence: Int!, wisdom: Int!, charisma: Int!, user: ID!): Character
    characterInCampaign(characterId: ID, campaignIds: [ID]): Character
    removeCharacter(characterId: ID!): Character
}
  
type Query {
    characters(id: ID!): [Character]
    users: [User]
    user(id: ID!): User
    campaigns: [Campaign]
    me: User
}
`;

module.exports = typeDefs;
