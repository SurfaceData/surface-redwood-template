export const schema = gql`
  input LinkBlogInput {
    id: String!
    url: String!
    apikey: String!
    language: String!
  }

  type ContentSubmissionLog {
    id: Int!
    userId: String!
    synckey: String!
    language: String!
  }

  type Mutation {
    linkBlog(input: LinkBlogInput!): ContentSubmissionLog @requireAuth
  }
`;
