import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UpdatePasswordForm from 'src/components/UpdatePasswordForm'

const ProfileAccountSettingsPage = () => {
  return (
    <>
      <MetaTags title="ProfileAccountSettings" description="ProfileAccountSettings page" />

      <div>
        <UpdatePasswordForm />
      </div>
    </>
  )
}

export default ProfileAccountSettingsPage
