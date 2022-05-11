import type { SyncLogsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query SyncLogsQuery($userId: String!) {
    contentSubmissions(userId: $userId) {
      id
      entryId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ contentSubmissions }: CellSuccessProps<SyncLogsQuery>) => {
  return (
    <ul>
      {contentSubmissions.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
