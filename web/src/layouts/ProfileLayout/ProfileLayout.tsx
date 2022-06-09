import { Link, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { Trans } from 'react-i18next'
import {
  Container,
  Content,
  Header,
  Nav,
  Navbar,
  Sidebar,
  Sidenav,
} from 'rsuite'
import ArrowLeftIcon from '@rsuite/icons/ArrowLeft'
import ArrowRightIcon from '@rsuite/icons/ArrowRight'
import SettingIcon from '@rsuite/icons/Setting'
import UserInfoIcon from '@rsuite/icons/UserInfo';

import Navigation from 'src/components/Navigation'
import SurfaceFooter from 'src/components/SurfaceFooter'

type ProfileLayoutProps = {
  children?: React.ReactNode
}

const RedwoodLink = React.forwardRef((props) => {
  return <Link {...props} />
})

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar className="border-t-2" appearance="subtle">
      <Navbar.Body>
        <Nav pullRight>
          <Nav.Item onClick={onChange}>
            {expand ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const [expand, setExpand] = useState(true)
  return (
    <Container className="flex-col h-screen justify-between">
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Sidebar
          className="flex flex-col bg-slate-100"
          collapsible
          width={expand ? 260 : 56}
        >
          <Sidenav className="flex-1" expanded={expand} appearance="subtle">
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  as={RedwoodLink}
                  to={routes.profileInfo()}
                  icon={<UserInfoIcon />}
                >
                  <Trans i18nkey="layouts.accountInfo">
                    Info
                  </Trans>
                </Nav.Item>
                <Nav.Item
                  as={RedwoodLink}
                  to={routes.profileAccountSettings()}
                  icon={<SettingIcon />}
                >
                  <Trans i18nkey="layouts.accountSettings">
                    Account Settings
                  </Trans>
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>
        <Content className="flex-1 mb-auto p-4">{children}</Content>
      </Container>
      <SurfaceFooter />
    </Container>
  )
}

export default ProfileLayout
