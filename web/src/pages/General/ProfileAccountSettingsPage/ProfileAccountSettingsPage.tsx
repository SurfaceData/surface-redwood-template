import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useTranslation } from 'react-i18next'

import UpdatePasswordForm from 'src/components/UpdatePasswordForm'

const ProfileAccountSettingsPage = () => {
  const { t } = useTranslation('translation')
  return (
    <>
      <MetaTags title="ProfileAccountSettings" description={t('profileAccountMeta')} />

      <div>
        <UpdatePasswordForm />
      </div>
    </>
  )
}

export default ProfileAccountSettingsPage
