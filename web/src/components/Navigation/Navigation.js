import { Link, navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Navbar, Nav, Dropdown } from 'rsuite'

const RedwoodLink = React.forwardRef((props) => {
  return <Link {...props} />
})

const UserItem = () => {
  const { isAuthenticated, logOut } = useAuth()
  if (isAuthenticated) {
    return (
      <Nav.Item
        onSelect={async () => {
          await logOut()
          navigate(routes.home())
        }}
      >
        Sign Out
      </Nav.Item>
    )
  }
  return (
    <Nav.Item as={RedwoodLink} to={routes.signin()}>
      Sign In
    </Nav.Item>
  )
}

const Navigation = () => {
  return (
    <Navbar className="p-4">
      <Navbar.Brand as={RedwoodLink} to={routes.home()}>
        Surface Redwood Template 
      </Navbar.Brand>
      <Nav pullRight>
        <UserItem />
      </Nav>
    </Navbar>
  )
}

export default Navigation
