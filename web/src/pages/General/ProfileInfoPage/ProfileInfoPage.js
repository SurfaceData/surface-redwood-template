import { Flex, Heading } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { LabeledInput } from '@surfacedata/sd-components'

import { Trans, useTranslation } from 'react-i18next'

import {
  SurfaceDetails,
  SurfaceSummary,
} from 'src/components/ui/SurfaceDetails'
import { SurfaceHeader2 } from 'src/components/ui/SurfaceHeader2'

const ProfileInfoPage = () => {
  const { currentUser } = useAuth()
  const { t } = useTranslation('admin')
  const roleLabels = {
    admin: 'Admin',
    steward: 'Steward',
    general: 'General',
  }
  const role = currentUser?.roles ? currentUser.roles[0] : 'general'
  return (
    <>
      <MetaTags title="ProfileInfo" description={t('profileInfoMeta')} />

      <Flex spacing="12px" direction="column" gap="4">
        <Heading>Profile</Heading>

        <SurfaceDetails>
          <SurfaceSummary>
            <Trans i18key="translation.profileHelp">How this helps</Trans>
          </SurfaceSummary>
          <div>
            <Trans i18key="translation.profileSummary">
              Contact information helps us stay in communication
            </Trans>
          </div>
        </SurfaceDetails>

        <LabeledInput label="Email" readOnly value={currentUser?.email || ''} />
        <LabeledInput label="Role" readOnly value={roleLabels[role]} />
      </Flex>
    </>
  )
}

export default ProfileInfoPage
