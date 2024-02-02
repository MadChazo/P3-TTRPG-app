const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    characters: [Character]
    campaigns: [Campaign]
}

type Character {
    _id: ID
    name: String
    class: String
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    backstory:
}`;
