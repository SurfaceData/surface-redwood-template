import type { FindLinkedBlogQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'

import RegisterBlogForm from 'src/components/RegisterBlogForm'
import LinkBlogForm from 'src/components/LinkBlogForm'
import SyncBlogForm from 'src/components/SyncBlogForm'
import ContentSubmissionsCell from 'src/components/ContentSubmissionsCell'

export const QUERY = gql`
  query FindLinkedBlogQuery($userId: String!) {
    linkedBlog: linkedBlog(userId: $userId) {
      id
      synckey
      language
      syncDone
      syncSkipped
    }
  }
`

const DELETE = gql`
  mutation DeleteLinkedBlog($id: Int!) {
    deleteLinkedBlog(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <RegisterBlogForm />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  linkedBlog,
  userId,
}: CellSuccessProps<FindLinkedBlogQuery>) => {
  const { synckey, language, syncDone, syncSkipped } = linkedBlog
  const [deleteLinkedBlog] = useMutation(DELETE, {
    refetchQueries: [
      {
        query: QUERY,
        variables: { userId },
      },
    ],
  })

  const handleDelete = () => {
    deleteLinkedBlog({
      variables: { id: linkedBlog.id },
    })
  }

  if (syncDone || syncSkipped) {
    return (
      <div>
        <ContentSubmissionsCell synckey={synckey} />
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-xs rounded text-white px-2 py-1 w-20"
        >
          Unlink Blog
        </button>
      </div>
    )
  }

  return <SyncBlogForm synckey={synckey} language={language} />
}
