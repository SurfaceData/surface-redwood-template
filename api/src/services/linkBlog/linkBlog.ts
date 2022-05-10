import { validate, validateWith } from '@redwoodjs/api';
import fs from 'fs';

import { db } from 'src/lib/db';
import { saver } from 'src/lib/saver';

export const linkBlog = async ({ input }) => {
  let blogUrl;
  validate(input.apikey, 'Ghost API Key', {
    presence: true,
    format: {
      pattern: /^[0-9a-z]+/,
      message: 'apikey must be a Ghost API Key',
    },
  });
  validateWith(() => {
    try {
      blogUrl = new URL(input.url);
    } catch (_) {
      throw new Error('Invalid URL');
    }
  });
  const postsUrl = `${blogUrl.href}/ghost/api/v2/content/posts?key=${input.apikey}&formats=plaintext`;
  const response = await fetch(postsUrl);
  if (!response.ok) {
    throw new Error('Could not fetch blog contents');
  }

  const results = await response.json();
  return await results.posts.map(async (post: GhostPost) => {
    const sentences = post.plaintext.split('\n');
    saver.savePost(input.id, post);
    return await db.contentSubmission.create({
      data: {
        userId: input.id,
        entryId: post.id,
        sentenceCount: sentences.length,
      },
    });
  });
}
