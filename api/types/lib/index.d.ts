export type GhostPost {
  id: String,
  plaintext: String,
}

export interface GhostSaver {
  async savePost(post: GhostPost): void;
}
