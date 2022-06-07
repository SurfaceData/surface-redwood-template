import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UsersCell from 'src/components/UsersCell'

const AdminManageUsersPage = () => {
  return (
    <>
      <MetaTags title="AdminManageUsers" description="AdminManageUsers page" />

      <div>
        <UsersCell />
      </div>
    </>
  )
}

export default AdminManageUsersPage
