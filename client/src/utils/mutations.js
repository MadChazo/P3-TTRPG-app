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
  mutation addCharacter( $name: String!, $classRole: String!, $backstory: String!, $strength: Int!, $dexterity: Int!, $constitution: Int!, $intelligence: Int!, $wisdom: Int!, $charisma: Int!) {
    addCharacter( name: $name, classRole: $classRole, backstory: $backstory, strength: $strength, dexterity: $dexterity, constitution: $constitution, intelligence: $intelligence, wisdom: $wisdom, charisma: $charisma) {
      _id
      name
      classRole
      backstory
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      user
    }
  }
`;
