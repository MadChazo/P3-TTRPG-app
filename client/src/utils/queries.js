import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      characters {
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
      }
      campaigns {
        _id
        name
        description
        day
        characters {
          _id
          name
        }
        players {
          _id
          username
        }
        gm {
          _id
          username
        }
      }
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getCharacters($_id: ID!) {
    getCharacters(_id: $_id) {
      characters {
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
        user {
          _id
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      characters {
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
      }
      campaigns {
        _id
        name
        description
        day
        characters {
          _id
          name
        }
        players {
          _id
          username
        }
        gm {
          _id
          username
        }
      }
    }
  }
`;
