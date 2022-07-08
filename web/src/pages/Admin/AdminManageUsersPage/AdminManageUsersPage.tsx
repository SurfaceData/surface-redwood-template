import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Trans, useTranslation } from 'react-i18next'

import { SurfaceDetails, SurfaceSummary } from 'src/components/ui/SurfaceDetails'
import { SurfaceHeader2 } from 'src/components/ui/SurfaceHeader2'
import UsersCell from 'src/components/UsersCell'

const AdminManageUsersPage = () => {
  const { t } = useTranslation('translation')
  return (
    <>
      <MetaTags title="AdminManageUsers" description={t('adminManageMeta')} />

      <SurfaceHeader2>
        <Trans i18key="layoutes.adminManageUsers">Manage Users</Trans>
      </SurfaceHeader2>

      <SurfaceDetails>
        <SurfaceSummary>
          <Trans i18key="translation.manageUsersHelp">
            How to manage users
          </Trans>
        </SurfaceSummary>
        <div>
          <Trans i18key="translation.manageUsersSummary">
            Managing users means setting their permissions.  Choose the right
            level of access for each user.
          </Trans>
        </div>
      </SurfaceDetails>

      <div>
        <UsersCell />
      </div>
    </>
  )
}

export default AdminManageUsersPage
