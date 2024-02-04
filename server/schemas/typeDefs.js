const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    character: [Character]
    campaign: [Campaign]

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
    token: ID
    user: User
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCampaign(name: String!, description: String!, goal: Int!): Campaign
    addCharacter(name: String!, class: String!, stats: CharacterStatsInput, backstory: String): Character
    characterInCampaign(characterId: ID, campaignIds: [ID]): Character
}

input CharacterInput {
    name: String!
    class: String!
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
    users: [User]
    user: User
    characters: [Character]
    campaigns: [Campaign]
}
`
module.exports = typeDefs;

