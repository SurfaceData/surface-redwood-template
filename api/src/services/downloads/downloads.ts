import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import {
  GetObjectCommand,
} from '@aws-sdk/client-s3'

import { s3client } from 'src/lib/aws'

export const datasetUrl = async ({ dataset }) => {
  const command = new GetObjectCommand({
    Key: 'sentence-collector.txt',
    Bucket: 'sdc-collector-access-prbrqde7w7gcccefnx9s44wy1txzrapn1b-s3alias',
  })

  const url = await getSignedUrl(s3client, command, { expiresIn: 3600 })
  return {
    url
  }
}
