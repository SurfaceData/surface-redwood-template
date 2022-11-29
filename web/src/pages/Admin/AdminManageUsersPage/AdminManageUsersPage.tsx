import { Heading } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

import { Trans, useTranslation } from 'react-i18next'

import {
  SurfaceDetails,
  SurfaceSummary,
} from 'src/components/ui/SurfaceDetails'
import UsersCell from 'src/components/UsersCell'

const AdminManageUsersPage = () => {
  return (
    <>
      <MetaTags title="AdminManageUsers" description="Manage Users" />

      <Heading>Manage Users</Heading>

      <SurfaceDetails>
        <SurfaceSummary>How to manage users</SurfaceSummary>
        <div>
          Managing users means setting their permissions. Choose the right level
          of access for each user.
        </div>
      </SurfaceDetails>

      <div>
        <UsersCell />
      </div>
    </>
  )
}

export default AdminManageUsersPage
