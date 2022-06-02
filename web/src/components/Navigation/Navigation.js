import { Trans } from 'react-i18next'
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
        <Trans i18nKey="auth.signOut">Sign Out</Trans>
      </Nav.Item>
    )
  }
  return (
    <Nav.Item as={RedwoodLink} to={routes.signin()}>
      <Trans i18nKey="auth.signIn">Sign In</Trans>
    </Nav.Item>
  )
}

const Navigation = () => {
  return (
    <Navbar className="p-4">
      <Navbar.Brand as={RedwoodLink} to={routes.home()}>
        <Trans i18nKey="layout.brand">Surface Redwood Template</Trans>
      </Navbar.Brand>
      <Nav pullRight>
        <UserItem />
      </Nav>
    </Navbar>
  )
}

export default Navigation
