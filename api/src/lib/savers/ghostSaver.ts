export type GhostPost = {
  id: string,
  plaintext: string,
}

export interface GhostSaver {
  savePost(userId: string, post: GhostPost): void;

  clearPosts(userId: string): void;
}
