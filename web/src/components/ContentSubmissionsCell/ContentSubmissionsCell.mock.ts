// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  contentSubmissions: [
    {
      id: '1234',
      title: 'Article 1',
      snippet: 'Snippet 1',
      createdAt: '2021-02-01'
    },
    {
      id: '4421',
      title: 'Article 2',
      snippet: 'A much longer snippet',
      createdAt: '2021-02-02'
    }
  ],
})
