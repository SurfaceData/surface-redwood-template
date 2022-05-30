import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import DatasetDownloadButton from 'src/components/DatasetDownloadButton'
import LinkedBlogCell from 'src/components/LinkedBlogCell'
import ContentSubmissionsCell from 'src/components/ContentSubmissionsCell'

const HomePage = () => {
  const { isAuthenticated, currentUser  } = useAuth()
  return (
    <>
      {isAuthenticated ? (
        <div>
          <LinkedBlogCell userId={currentUser.sub} />
          <DatasetDownloadButton />
        </div>
      ) : (
        <>
          Sign Up!
        </>
      )}
    </>
  )
}

export default HomePage
