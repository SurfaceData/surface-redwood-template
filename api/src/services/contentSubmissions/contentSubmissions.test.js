import {
  contentSubmissions,
  contentSubmission,
  createContentSubmission,
  updateContentSubmission,
  deleteContentSubmission,
} from './contentSubmissions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contentSubmissions', () => {
  scenario('returns all contentSubmissions', async (scenario) => {
    const result = await contentSubmissions()

    expect(result.length).toEqual(
      Object.keys(scenario.contentSubmission).length
    )
  })

  scenario('returns a single contentSubmission', async (scenario) => {
    const result = await contentSubmission({
      id: scenario.contentSubmission.one.id,
    })

    expect(result).toEqual(scenario.contentSubmission.one)
  })

  scenario('creates a contentSubmission', async () => {
    const result = await createContentSubmission({
      input: { userId: 'String', entryId: 'String', sentenceCount: 5994798 },
    })

    expect(result.userId).toEqual('String')
    expect(result.entryId).toEqual('String')
    expect(result.sentenceCount).toEqual(5994798)
  })

  scenario('updates a contentSubmission', async (scenario) => {
    const original = await contentSubmission({
      id: scenario.contentSubmission.one.id,
    })

    const result = await updateContentSubmission({
      id: original.id,
      input: { userId: 'String2' },
    })

    expect(result.userId).toEqual('String2')
  })

  scenario('deletes a contentSubmission', async (scenario) => {
    const original = await deleteContentSubmission({
      id: scenario.contentSubmission.one.id,
    })

    const result = await contentSubmission({ id: original.id })

    expect(result).toEqual(null)
  })
})
