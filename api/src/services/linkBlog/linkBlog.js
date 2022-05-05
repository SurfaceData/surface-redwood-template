import { validate, validateWith } from '@redwoodjs/api'
import fs from 'fs'

import { db } from 'src/lib/db'

export const linkBlog = async ({ input }) => {
  let blogUrl
  validate(input.apikey, 'Ghost API Key', {
    presence: true,
    format: {
      pattern: /^[0-9a-z]+/,
      message: 'apikey must be a Ghost API Key',
    },
  })
  validateWith(() => {
    try {
      blogUrl = new URL(input.url)
    } catch (_) {
      throw new Error('Invalid URL')
    }
  })
  const postsUrl = `${blogUrl.href}/ghost/api/v2/content/posts?key=${input.apikey}&formats=plaintext`
  const response = await fetch(postsUrl)
  if (!response.ok) {
    throw new Error('Could not fetch blog contents')
  }
  const userDataPath = `${process.env.BLOBSTORE_PATH}/${input.id}`
  fs.mkdirSync(userDataPath, { recursive: true })

  const results = await response.json()
  return await results.posts.map(async ({ id, plaintext }) => {
    const sentences = plaintext.split('\n')
    const datablob = {
      entryId: id,
      sentences: sentences,
    }
    fs.writeFileSync(`${userDataPath}/${id}.json`, JSON.stringify(datablob))

    return await db.contentSubmission.create({
      data: {
        userId: input.id,
        entryId: id,
        sentenceCount: sentences.length,
      },
    })
  })
}
