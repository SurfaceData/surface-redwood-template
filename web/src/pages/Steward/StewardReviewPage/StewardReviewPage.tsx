import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Trans } from 'react-i18next'

import { SurfaceDetails, SurfaceSummary } from 'src/components/ui/SurfaceDetails'
import { SurfaceHeader2 } from 'src/components/ui/SurfaceHeader2'

const StewardReviewPage = () => {
  return (
    <>
      <MetaTags title="StewardReview" description="StewardReview page" />

      <SurfaceHeader2>
        <Trans i18key="translation.stewardTasks">Steward Tasks</Trans>
      </SurfaceHeader2>

      <SurfaceDetails>
        <SurfaceSummary>
          <Trans i18key="translation.stewardHelp">How Stewards Help</Trans>
        </SurfaceSummary>
        <div>
          <Trans i18key="translation.stewardSummary">
            Stewards help look after the community and all associated datasets.
          </Trans>
        </div>
      </SurfaceDetails>
    </>
  )
}

export default StewardReviewPage
