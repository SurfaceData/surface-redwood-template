import type { APIGatewayEvent, Context } from 'aws-lambda'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import {
  GetObjectCommand,
} from '@aws-sdk/client-s3'

import { s3client } from 'src/lib/aws'
import { logger } from 'src/lib/logger'

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
  if (!event.queryStringParameters ||
      !event.queryStringParameters.synckey ||
      !event.queryStringParameters.dataset) {
    return {
      statusCode: 400,
    }
  }
  const dataset = event.queryStringParameters.dataset
  const synckey = event.queryStringParameters.synckey

  const command = new GetObjectCommand({
    Key: dataset,
    Bucket: 'sdc-collector-access-prbrqde7w7gcccefnx9s44wy1txzrapn1b-s3alias',
  })

  const url = await getSignedUrl(s3client, command, { expiresIn: 3600 })

  return {
    statusCode: 302,
    headers: {
      Location: url,
    },
  }
}
