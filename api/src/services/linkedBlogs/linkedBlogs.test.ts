import {
  linkedBlogs,
  linkedBlog,
  createLinkedBlog,
  updateLinkedBlog,
  deleteLinkedBlog,
} from './linkedBlogs'
import type { StandardScenario } from './linkedBlogs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('linkedBlogs', () => {
  scenario('returns all linkedBlogs', async (scenario: StandardScenario) => {
    const result = await linkedBlogs()

    expect(result.length).toEqual(Object.keys(scenario.linkedBlog).length)
  })

  scenario(
    'returns a single linkedBlog',
    async (scenario: StandardScenario) => {
      const result = await linkedBlog({ id: scenario.linkedBlog.one.id })

      expect(result).toEqual(scenario.linkedBlog.one)
    }
  )

  scenario('creates a linkedBlog', async () => {
    const result = await createLinkedBlog({
      input: { userId: 'String', synckey: 'String', language: 'String' },
    })

    expect(result.userId).toEqual('String')
    expect(result.synckey).toEqual('String')
    expect(result.language).toEqual('String')
  })

  scenario('updates a linkedBlog', async (scenario: StandardScenario) => {
    const original = await linkedBlog({ id: scenario.linkedBlog.one.id })
    const result = await updateLinkedBlog({
      id: original.id,
      input: { userId: 'String2' },
    })

    expect(result.userId).toEqual('String2')
  })

  scenario('deletes a linkedBlog', async (scenario: StandardScenario) => {
    const original = await deleteLinkedBlog({ id: scenario.linkedBlog.one.id })
    const result = await linkedBlog({ id: original.id })

    expect(result).toEqual(null)
  })
})
