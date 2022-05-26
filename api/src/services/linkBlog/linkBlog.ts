import { validate, validateWith } from '@redwoodjs/api';
import fs from 'fs';
import generateApiKey from 'generate-api-key';

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

  const synckey = generateApiKey({ method: 'bytes' });
  const linkedBlog = await db.linkedBlog.upsert({
    where: {
      userId: input.id,
    },
    update: {
      synckey: synckey,
      language: input.language,
    },
    create: {
      userId: input.id,
      synckey: synckey,
      language: input.language,
    }
  })

  // First, we have to create the users link information.
  // We do this by creating a new API key for them and adding it to the
  // LinkBlog model.
  const postsUrl = `${blogUrl.href}/ghost/api/v2/content/posts?key=${input.apikey}&formats=plaintext`;
  const response = await fetch(postsUrl);
  if (!response.ok) {
    throw new Error('Could not fetch blog contents');
  }

  const results = await response.json();
  await results.posts.map(async (post: GhostPost) => {
    saver.savePost(synckey, post);
    return await db.contentSubmission.create({
      data: {
        synckey: synckey,
        entryId: post.id,
        title: post.title,
        snippet: post.excerpt,
      },
    });
  });

  return linkedBlog;
}
