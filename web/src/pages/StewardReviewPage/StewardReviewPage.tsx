import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StewardReviewPage = () => {
  return (
    <>
      <MetaTags title="StewardReview" description="StewardReview page" />

      <h1>StewardReviewPage</h1>
      <p>
        Find me in <code>./web/src/pages/StewardReviewPage/StewardReviewPage.tsx</code>
      </p>
      <p>
        My default route is named <code>stewardReview</code>, link to me with `
        <Link to={routes.stewardReview()}>StewardReview</Link>`
      </p>
    </>
  )
}

export default StewardReviewPage
