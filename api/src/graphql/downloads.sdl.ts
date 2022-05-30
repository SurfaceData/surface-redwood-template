export const schema = gql`
  input DownloadCorpusInput {
    dataset: String!
  }

  type DownloadCorpusOutput {
    url: String!
  }

  type Query {
    datasetUrl(input: DownloadCorpusInput!): DownloadCorpusOutput! @requireAuth
  }
`;
