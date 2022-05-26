import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const linkedBlogs: QueryResolvers['linkedBlogs'] = () => {
  return db.linkedBlog.findMany()
}

export const linkedBlog: QueryResolvers['linkedBlog'] = ({ userId }) => {
  return db.linkedBlog.findUnique({
    where: { userId },
  })
}

export const createLinkedBlog: MutationResolvers['createLinkedBlog'] = ({
  input,
}) => {
  return db.linkedBlog.create({
    data: input,
  })
}

export const createSyncedBlog: MutationResolvers['createSyncedBlog'] = ({
  userId,
  input,
}) => {
  return db.linkedBlog.update({
    data: input,
    where: { userId },
  })
}

export const updateLinkedBlog: MutationResolvers['updateLinkedBlog'] = ({
  id,
  input,
}) => {
  return db.linkedBlog.update({
    data: input,
    where: { id },
  })
}

export const deleteLinkedBlog: MutationResolvers['deleteLinkedBlog'] = ({
  id,
}) => {
  return db.linkedBlog.delete({
    where: { id },
  })
}
