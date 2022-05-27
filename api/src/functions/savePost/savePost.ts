import type { APIGatewayEvent, Context } from 'aws-lambda'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { saver } from 'src/lib/saver'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  // Reject any requests without a synckey or a body.
  if (!event.queryStringParameters || !event.queryStringParameters.synckey) {
    return {
      statusCode: 400,
    }
  }
  if (!event.body.post ||
      !event.body.post.current) {
    return {
      statusCode: 400,
    }
  }

  // Reject requests where the user didn't actually request us to sync their
  // posts.
  const synckey = event.queryStringParameters.synckey
  const linked = await db.linkedBlog.findMany({
    where: { synckey },
  })
  if (linked.length != 1 ||
      !linked[0].syncDone) {
    return {
      statusCode: 400,
    }
  }

  // Request looks good.  Save the post and return.
  const post: GhostPost = event.body.post.current
  saver.savePost(synckey, post)

  await db.contentSubmission.create({
    data: {
      synckey: synckey,
      entryId: post.id,
      title: post.title,
      snippet: post.excerpt,
    },
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'done',
    }),
  }
}
