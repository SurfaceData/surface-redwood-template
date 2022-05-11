import {
  S3Client,
  DeleteObjectsCommand,
  ListObjectsV2Command,
  PutObjectCommand,
} from '@aws-sdk/client-s3'

import type { GhostPost, GhostSaver } from 'src/lib/savers/ghostSaver'

export class AWSGhostSaver implements GhostSaver {
  client: S3Client
  bucket: string

  constructor(region: string, bucket: string) {
    this.client = new S3Client({
      region: region,
    })
    this.bucket = bucket
  }

  async savePost(userId: string, post: GhostPost) {
    const key = `${userId}/${post.id}`
    const datablob = {
      id: post.id,
      plaintext: post.plaintext,
    }

    await this.client.send(
      new PutObjectCommand({
        Key: key,
        Body: JSON.stringify(datablob),
        Bucket: this.bucket,
      })
    )
  }

  async clearPosts(userId: string) {
    const key = `${userId}/`
    const userObjects = await this.client.send(
      new ListObjectsV2Command({
        Bucket: this.bucket,
        Prefix: key,
      })
    )
    const objectKeys = userObjects.Contents.map(({ Key }) => {
      return {
        Key,
      }
    })
    await this.client.send(
      new DeleteObjectsCommand({
        Bucket: this.bucket,
        Delete: {
          Objects: objectKeys,
        },
      })
    )
  }
}
