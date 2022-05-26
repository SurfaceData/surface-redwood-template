import { db } from 'src/lib/db';
import { saver } from 'src/lib/saver';

export const contentSubmissions = ({ synckey }) => {
  return db.contentSubmission.findMany({
    where: { synckey }
  });
}

export const contentSubmission = ({ id }) => {
  return db.contentSubmission.findUnique({
    where: { id },
  });
}

export const createContentSubmission = ({ input }) => {
  return db.contentSubmission.create({
    data: input,
  });
}

export const updateContentSubmission = ({ id, input }) => {
  return db.contentSubmission.update({
    data: input,
    where: { id },
  });
}

export const deleteContentSubmission = ({ id }) => {
  return db.contentSubmission.delete({
    where: { id },
  });
}

export const deleteUserContentSubmissions = ({ synckey }) => {
  saver.clearPosts(synckey);
  return db.contentSubmission.deleteMany({
    where: { synckey },
  });
}
