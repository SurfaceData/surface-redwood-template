import type { ContentSubmissionsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

import LinkBlogForm from 'src/components/LinkBlogForm'

export const QUERY = gql`
  query ContentSubmissionsQuery($userId: String!) {
    contentSubmissions(userId: $userId) {
      id
      entryId
      createdAt
    }
  }
`

const DELETE = gql`
mutation DeleteContentSubmissionsMutation($userId: String!) {
  deleteUserContentSubmissions(userId: $userId) {
    count
  }
}
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <LinkBlogForm />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  contentSubmissions,
  userId,
}: CellSuccessProps<ContentSubmissionsQuery>) => {
  const [deleteSubmissions] = useMutation(DELETE, {
    refetchQueries: [
      {
        query: QUERY,
        variables: { userId: userId },
      },
    ],
  });

  const handleDelete = () => {
    deleteSubmissions({
      variables: { userId: userId },
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDelete}
        className="bg-red-500 text-xs rounded text-white px-2 py-1">
        Delete Submissions
      </button>
      <ul>
        {contentSubmissions.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
    </>
  )
}
