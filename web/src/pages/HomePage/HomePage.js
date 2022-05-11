import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ContentSubmissionsCell from 'src/components/ContentSubmissionsCell'
import LinkBlogForm from 'src/components/LinkBlogForm'

const HomePage = () => {
  const { isAuthenticated, currentUser  } = useAuth()
  return (
    <>
      {isAuthenticated ? (
        <ContentSubmissionsCell userId={currentUser.sub} />
      ) : (
        <>
          Sign Up!
        </>
      )}
    </>
  )
}

export default HomePage
