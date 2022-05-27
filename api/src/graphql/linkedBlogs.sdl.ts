export const schema = gql`
  type LinkedBlog {
    id: Int!
    userId: String!
    synckey: String!
    language: String!
    syncDone: Boolean!
    syncSkipped: Boolean!
    licensePool: String!
  }

  type Query {
    linkedBlogs: [LinkedBlog!]! @requireAuth
    linkedBlog(userId: String!): LinkedBlog @requireAuth
  }

  input CreateLinkedBlogInput {
    userId: String!
    synckey: String!
    language: String!
    licensePool: String!
  }

  input UpdateLinkedBlogInput {
    userId: String
    synckey: String
    language: String
  }

  input CreateSyncedBlogInput {
    syncDone: Boolean!
    syncSkipped: Boolean!
  }

  type Mutation {
    createLinkedBlog(input: CreateLinkedBlogInput!): LinkedBlog! @requireAuth
    createSyncedBlog(userId: String!, input: CreateSyncedBlogInput!): LinkedBlog! @requireAuth
    updateLinkedBlog(id: Int!, input: UpdateLinkedBlogInput!): LinkedBlog!
      @requireAuth
    deleteLinkedBlog(id: Int!): LinkedBlog! @requireAuth
  }
`
