const typeDefs = `
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

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addCampaign(name: String!, description: String!, day: String!): Campaign
    addCharacter(characterInput: CharacterInput): Character
    characterInCampaign(characterId: ID, campaignIds: [ID]): Character
}
type User {
    _id: ID
    username: String
    email: String
    characters: [Character]
    password: String
    campaigns: [Campaign]

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