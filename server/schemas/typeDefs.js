const typeDefs = `
type User {
    _id: ID

    firstName: String
    lastName: String
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
}

type Auth {
    token: ID
    user: User
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCampaign(name: String!, description: String!, goal: Int!): Campaign
}

input CharacterInput {
    name: String!
    characterClass: String!
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
`
module.exports = typeDefs;

