import { db } from 'src/lib/db';

export const contentSubmissions = () => {
  return db.contentSubmission.findMany();
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
