import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
mutation Mutation($name: String!, $classRole: String!, $backstory: String!, $strength: Int!, $dexterity: Int!, $constitution: Int!, $intelligence: Int!, $wisdom: Int!, $charisma: Int!, $user: ID!) {
  addCharacter(name: $name, classRole: $classRole, backstory: $backstory, strength: $strength, dexterity: $dexterity, constitution: $constitution, intelligence: $intelligence, wisdom: $wisdom, charisma: $charisma, user: $user, ) {
    _id
    backstory
    charisma
    classRole
    constitution
    dexterity
    intelligence
    name
    strength
    wisdom
  }
}
`;

export const ADD_CAMPAIGN = gql`
mutation addCampaign($name: String!, $module: String!, $story: String!, $days: [String!], $startTime: Int!, $endTime: Int!, $gm: ID!){
addCampaign(name: $name, module: $module, story: $story, days: $days, startTime: $startTime, endTime: $endTime, gm: $gm){
    _id
    name
    module
    story
    days
    startTime
    endTime
    gm
}
}
`