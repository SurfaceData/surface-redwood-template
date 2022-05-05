export const schema = gql`
  input LinkBlogInput {
    id: String!
    url: String!
    apikey: String!
  }

  type ContentSubmissionLog {
    id: Int!
    userId: String!
    entryId: String!
    sentenceCount: Int!
  }

  type Mutation {
    linkBlog(input: LinkBlogInput!): [ContentSubmissionLog]! @requireAuth
  }
`
