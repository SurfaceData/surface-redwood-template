import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { isAuthenticated, currentUser  } = useAuth()
  return (
    <>
      {isAuthenticated ? (
        <div>
          Authenticated View
        </div>
      ) : (
        <div>
          Unauthenticated View
        </div>
      )}
    </>
  )
}

export default HomePage
