import { Heading } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import { Details } from '@surfacedata/sd-components'

import { Trans } from 'react-i18next'

const StewardReviewPage = () => {
  return (
    <>
      <MetaTags title="StewardReview" description="StewardReview page" />

      <Heading>Steward Tasks</Heading>

      <Details title="How Stewards Help">
        Stewards help look after the community and all associated datasets.
      </Details>
    </>
  )
}

export default StewardReviewPage
