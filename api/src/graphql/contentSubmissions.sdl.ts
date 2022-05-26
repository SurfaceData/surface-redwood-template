export const schema = gql`
  type ContentSubmission {
    id: Int!
    synckey: String!
    entryId: String!
    title: String!
    snippet: String!
    createdAt: DateTime!
  }

  type ContentSubmissionDeletion {
    count: Int!
  }

  type Query {
    contentSubmissions(synckey: String!): [ContentSubmission!]! @requireAuth
    contentSubmission(id: Int!): ContentSubmission @requireAuth
  }

  input CreateContentSubmissionInput {
    synckey: String!
    entryId: String!
    sentenceCount: Int!
  }

  input UpdateContentSubmissionInput {
    synckey: String
    entryId: String
    sentenceCount: Int
  }

  type Mutation {
    createContentSubmission(
      input: CreateContentSubmissionInput!
    ): ContentSubmission! @requireAuth
    updateContentSubmission(
      id: Int!
      input: UpdateContentSubmissionInput!
    ): ContentSubmission! @requireAuth
    deleteContentSubmission(id: Int!): ContentSubmission! @requireAuth
    deleteUserContentSubmissions(synckey: String!): ContentSubmissionDeletion! @requireAuth
  }
`;
