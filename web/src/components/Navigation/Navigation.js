import { useTranslation } from 'react-i18next'
import { Link, navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Navbar, Nav, Dropdown } from 'rsuite'

const RedwoodLink = React.forwardRef((props) => {
  return <Link {...props} />
})

const UserItem = () => {
  const { t } = useTranslation()
  const { isAuthenticated, logOut } = useAuth()
  if (isAuthenticated) {
    return (
      <Nav.Item
        onSelect={async () => {
          await logOut()
          navigate(routes.home())
        }}
      >
        {t('Navigation.signout')}
      </Nav.Item>
    )
  }
  return (
    <Nav.Item as={RedwoodLink} to={routes.signin()}>
      {t('Navigation.signin')}
    </Nav.Item>
  )
}

const Navigation = () => {
  const { t } = useTranslation()
  return (
    <Navbar className="p-4">
      <Navbar.Brand as={RedwoodLink} to={routes.home()}>
        {t('Navigation.brand')}
      </Navbar.Brand>
      <Nav pullRight>
        <UserItem />
      </Nav>
    </Navbar>
  )
}

export default Navigation
