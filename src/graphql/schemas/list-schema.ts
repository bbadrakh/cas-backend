import gql from "graphql-tag";

export const listTypeDefs = gql`
  type List {
    id: ID!
    cardId: String!
    name: String!
    startedYear: String!
    startedMonth: String!
    startedDay: String!
    startedHour: String!
    startedMinute: String!
    startedSecond: String!
    endedYear: String
    endedMonth: String
    endedDay: String
    endedHour: String
    endedMinute: String
    endedSecond: String
    check: Boolean!
  }
  input createListInput {
    cardId: String!
    name: String!
    startedYear: String!
    startedMonth: String!
    startedDay: String!
    startedHour: String!
    startedMinute: String!
    startedSecond: String!
    check: Boolean!
  }

  input patchListInput {
    endedYear: String!
    endedMonth: String!
    endedDay: String!
    endedHour: String!
    endedMinute: String!
    endedSecond: String!
    check: Boolean!
  }

  type Query {
    getLists: [List]!
    getList(id: ID!): List!
  }
  type Mutation {
    createList(input: createListInput!): List!
    deleteList(id: ID!): List!
    patchList(id: ID!, input: patchListInput!): List!
  }
`;
