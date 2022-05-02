import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProfileInfoPage = () => {
  return (
    <>
      <MetaTags title="ProfileInfo" description="ProfileInfo page" />

      <h1>ProfileInfoPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ProfileInfoPage/ProfileInfoPage.js</code>
      </p>
      <p>
        My default route is named <code>profileInfo</code>, link to me with `
        <Link to={routes.profileInfo()}>ProfileInfo</Link>`
      </p>
    </>
  )
}

export default ProfileInfoPage
