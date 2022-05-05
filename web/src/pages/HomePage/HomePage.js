import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LinkBlogForm from 'src/components/LinkBlogForm'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      {isAuthenticated ? (
        <LinkBlogForm />
      ) : (
        <>
          Sign Up!
        </>
      )}
    </>
  )
}

export default HomePage
