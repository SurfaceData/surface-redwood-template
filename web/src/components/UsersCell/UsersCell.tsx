import type { UsersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'
import { Button, Table } from 'rsuite'


export const QUERY = gql`
  query UsersQuery {
    users {
      id
      email
      role
    }
  }
`

export const MUTATION = gql`
  mutation UpdateUserRole($id: String!, $role: String!) {
    updateUserRole(id: $id, role: $role) {
      id
      role
    }
  }
`

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Table.Cell {...props} style={{padding: '6px'}}>
      <Button
        appearance="link"
        onClick={() => {
          onClick && onClick(rowData.id)
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Table.Cell>
  )
}

const EditCell = ({ rowData, dataKey, onChange, ...props}) => {
  const editing = rowData.status === 'EDIT';
  return (
    <Table.Cell {...props} className={editing ? 'table-content-editing' : ''}>
      {editing ? (
        <input className="rs-input"
          defaultValue={rowData[dataKey]}
          onChange={event => {
            onChange && onChange(rowData.id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className=''>{rowData[dataKey]}</span>
      )}
    </Table.Cell>
  )
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }: CellSuccessProps<UsersQuery>) => {
  const [updateUserRole] = useMutation(MUTATION)

  const [userList, setUserList] = useState(users.map( (user) => {
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      status: '',
    }
  }))

  const handleChange = (id, key, value) => {
    const newUserList = Object.assign([], userList)
    const activeUser = newUserList.find(user => user.id === id)
    activeUser[key] = value
    setUserList(newUserList)
  }
  const handleEditState = (id) => {
    const newUserList = Object.assign([], userList)
    const activeUser = newUserList.find(user => user.id === id)
    if (activeUser.status === 'EDIT') {
      updateUserRole({
        variables: {
          id: id,
          role: activeUser.role
        }
      })
      activeUser.status = null
    } else {
      activeUser.status = 'EDIT' 
    }
    setUserList(newUserList)
  }

  return (
    <Table data={userList}>
      <Table.Column width={300}>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.Cell dataKey="id" />
      </Table.Column>

      <Table.Column width={300}>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.Cell dataKey="email" />
      </Table.Column>

      <Table.Column width={200}>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <EditCell dataKey="role" onChange={handleChange} />
      </Table.Column>

      <Table.Column flexGrow={1}>
        <Table.HeaderCell>Action</Table.HeaderCell>
        <ActionCell dataKey="id" onClick={handleEditState} />
      </Table.Column>
    </Table>
  )
}
