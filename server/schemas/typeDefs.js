const typeDefs = `
type User {
    _id: ID

    firstName: String
    lastName: String
    email: String
    character: [Character]

}

type Character {
    _id: ID
    name: String

    description: String
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
`
module.exports = typeDefs;

