import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LinkedBlogCell from 'src/components/LinkedBlogCell'
import ContentSubmissionsCell from 'src/components/ContentSubmissionsCell'

const HomePage = () => {
  const { isAuthenticated, currentUser  } = useAuth()
  return (
    <>
      {isAuthenticated ? (
        <LinkedBlogCell userId={currentUser.sub} />
      ) : (
        <>
          Sign Up!
        </>
      )}
    </>
  )
}

export default HomePage
