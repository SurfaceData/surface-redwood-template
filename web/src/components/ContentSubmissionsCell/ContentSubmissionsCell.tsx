import type { ContentSubmissionsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { Panel, Stack } from 'rsuite'

import LinkBlogForm from 'src/components/LinkBlogForm'

export const QUERY = gql`
  query ContentSubmissionsQuery($userId: String!) {
    contentSubmissions(userId: $userId) {
      id
      entryId
      createdAt
      title
      snippet
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
  })

  const handleDelete = () => {
    deleteSubmissions({
      variables: { userId: userId },
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={handleDelete}
        className="bg-red-500 text-xs rounded text-white px-2 py-1 w-20"
      >
        Delete Submissions
      </button>
      <Stack wrap spacing={8}>
        {contentSubmissions.map((item) => {
          return (
            <Panel key={item.id} header={item.title} bordered className="w-60 h-60">
              <div className="text-xs">
                {item.createdAt}
              </div>
              <div className="text-sm">
                {item.snippet}
              </div>
            </Panel>
          )
        })}
      </Stack>
    </div>
  )
}
