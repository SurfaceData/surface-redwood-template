import { mockHttpEvent } from '@redwoodjs/testing/api'

import { LocalFileGhostSaver } from 'src/lib/savers/localSaver'
const savePostMethodMock = jest
  .spyOn(LocalFileGhostSaver.prototype, 'savePost')
  .mockImplementation(() => {})

import { handler } from './savePost'

import { db } from 'src/lib/db'

describe('savePost function', () => {
  it('should return 400 without synckey', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {},
    })

    const response = await handler(httpEvent, null)
    expect(response.statusCode).toBe(400)
    expect(savePostMethodMock).not.toHaveBeenCalled()
  })

  it('should return 400 without post body', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        synckey: '1234',
      },
    })

    const response = await handler(httpEvent, null)
    expect(response.statusCode).toBe(400)
    expect(savePostMethodMock).not.toHaveBeenCalled()
  })

  it('should return 400 without body current post', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        synckey: '1234',
      },
      body: {
        post: {
          previous: {},
        },
      },
    })

    const response = await handler(httpEvent, null)
    expect(response.statusCode).toBe(400)
    expect(savePostMethodMock).not.toHaveBeenCalled()
  })

  scenario('should return 400 without a stored synckey', async (secenario) => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        synckey: '1236',
      },
      body: {
        post: {
          current: {
            id: '628f3722365baf0001166337',
            title: 'Test Post',
            plaintext: 'Test words go here',
            excerpt: 'Test words go here',
          },
        },
      },
    })

    const response = await handler(httpEvent, null)
    expect(response.statusCode).toBe(400)
    expect(savePostMethodMock).not.toHaveBeenCalled()
  })

  scenario('should return 400 without a sync done', async (scenario) => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        synckey: scenario.linkedBlog.notSynced.synckey,
      },
      body: {
        post: {
          current: {
            id: '628f3722365baf0001166337',
            title: 'Test Post',
            plaintext: 'Test words go here',
            excerpt: 'Test words go here',
          },
        },
      },
    })

    const response = await handler(httpEvent, null)
    expect(response.statusCode).toBe(400)
    expect(savePostMethodMock).not.toHaveBeenCalled()
  })

  scenario('should return save post', async (scenario) => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        synckey: scenario.linkedBlog.synced.synckey,
      },
      body: {
        post: {
          current: {
            id: '628f3722365baf0001166337',
            title: 'Test Post',
            plaintext: 'Test words go here',
            excerpt: 'Test words go here',
          },
        },
      },
    })

    const response = await handler(httpEvent, null)
    expect(response.statusCode).toBe(200)

    const submissions = await db.contentSubmission.findMany({
      where: {
        synckey: '1234',
      },
    })
    expect(submissions.length).toBe(1)
    expect(submissions[0].entryId).toBe('628f3722365baf0001166337')
    expect(submissions[0].title).toBe('Test Post')
    expect(submissions[0].snippet).toBe('Test words go here')
    expect(savePostMethodMock).toHaveBeenCalledTimes(1)
  })
})
