export const schema = gql`
  type LinkedBlog {
    id: Int!
    userId: String!
    synckey: String!
    language: String!
  }

  type Query {
    linkedBlogs: [LinkedBlog!]! @requireAuth
    linkedBlog(id: Int!): LinkedBlog @requireAuth
  }

  input CreateLinkedBlogInput {
    userId: String!
    synckey: String!
    language: String!
  }

  input UpdateLinkedBlogInput {
    userId: String
    synckey: String
    language: String
  }

  type Mutation {
    createLinkedBlog(input: CreateLinkedBlogInput!): LinkedBlog! @requireAuth
    updateLinkedBlog(id: Int!, input: UpdateLinkedBlogInput!): LinkedBlog!
      @requireAuth
    deleteLinkedBlog(id: Int!): LinkedBlog! @requireAuth
  }
`
