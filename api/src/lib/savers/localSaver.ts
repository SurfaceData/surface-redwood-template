import fs from 'fs';

import type { GhostPost, GhostSaver } from 'src/lib/savers/ghostSaver';

export class LocalFileGhostSaver implements GhostSaver {
  basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  savePost(userId: string, post: GhostPost) {
    const userDataPath = `${this.basePath}/${userId}`;
    fs.mkdirSync(userDataPath, { recursive: true });
    const datablob = {
      id: post.id,
      plaintext: post.plaintext,
    };
    fs.writeFileSync(`${userDataPath}/${post.id}.json`, JSON.stringify(datablob));
  }
}
