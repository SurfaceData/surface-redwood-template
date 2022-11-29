import { Heading } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

import { Trans } from 'react-i18next'

import {
  SurfaceDetails,
  SurfaceSummary,
} from 'src/components/ui/SurfaceDetails'

const StewardReviewPage = () => {
  return (
    <>
      <MetaTags title="StewardReview" description="StewardReview page" />

      <Heading>Steward Tasks</Heading>

      <SurfaceDetails>
        <SurfaceSummary>How Stewards Help</SurfaceSummary>
        <div>
          Stewards help look after the community and all associated datasets.
        </div>
      </SurfaceDetails>
    </>
  )
}

export default StewardReviewPage
