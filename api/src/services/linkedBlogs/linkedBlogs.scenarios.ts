import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LinkedBlogCreateArgs>({
  linkedBlog: {
    one: { data: { userId: 'String', synckey: 'String', language: 'String' } },
    two: { data: { userId: 'String', synckey: 'String', language: 'String' } },
  },
})

export type StandardScenario = typeof standard
