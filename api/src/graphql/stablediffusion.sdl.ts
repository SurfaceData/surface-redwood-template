export const schema = gql`
  type DiffusionResult {
    id: String!
    content: String!
  }

  type Query {
    generateImage: [DiffusionResult]! @skipAuth
  }
`
