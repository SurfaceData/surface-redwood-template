export const standard = defineScenario({
  linkedBlog: {
    synced: {
      data: {
        userId: 'user1',
        synckey: '1234',
        language: 'en',
        syncDone: true,
        syncSkipped: false,
      }
    },
    notSynced: {
      data: {
        userId: 'user2',
        synckey: '1235',
        language: 'en',
        syncDone: false,
        syncSkipped: true,
      }
    }
  }
  // Define the "fixture" to write into your test database here
  // See guide: https://redwoodjs.com/docs/testing#scenarios
})

export type StandardScenario = typeof standard
