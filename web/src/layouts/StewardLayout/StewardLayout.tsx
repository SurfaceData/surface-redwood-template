import { Link, routes } from '@redwoodjs/router'
import { ImBlog, ImGithub, ImTwitter } from 'react-icons/im'
import { useState } from 'react'
import { FaDiscord } from 'react-icons/fa'
import { Trans } from 'react-i18next'
import {
  Container,
  Content,
  Footer as BaseFooter,
  Header,
  Nav,
  Navbar,
  Sidebar,
  Sidenav,
} from 'rsuite'
import PeoplesIcon from '@rsuite/icons/Peoples'
import ArrowLeftIcon from '@rsuite/icons/ArrowLeft'
import ArrowRightIcon from '@rsuite/icons/ArrowRight'
import styled from 'styled-components'

import Navigation from 'src/components/Navigation'

const Footer = styled(BaseFooter)`
  align-items: center;
  border-top: 1px solid #ccc;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 8px;
`

const License = styled.div`
  width: 400px;
`

const SocialIconContainer = styled.div`
  display: flex;
  gap: 10px;
`

const SocialIcon = styled.a`
  align-items: center;
  border: 1px solid rgb(220, 222, 224);
  border-radius: 50%;
  color: rgb(118, 119, 122);
  display: flex;
  height: 36px;
  justify-content: center;
  opacity: 1;
  text-decoration: none;
  width: 36px;
`

type StewardLayoutProps = {
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

const StewardLayout = ({ children }: StewardLayoutProps) => {
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
                  to={routes.stewardReview()}
                  icon={<PeoplesIcon />}
                >
                  <Trans i18nKey="layouts.stewardReview">
                    Review
                  </Trans>
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>
        <Content className="flex-1 mb-auto p-4">{children}</Content>
      </Container>
      <Footer className="p-4">
        <License>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            <img
              alt={
                <Trans i18nKey="layouts.footerLicenseAlt">
                  Creative Commons License
                </Trans>
              }
              height={31}
              width={88}
              src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
            />
          </a>
          <br />
          <Trans i18nKey="layouts.footerLicense">
            This work is licensed under a{' '}
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc/4.0/"
            >
              Creative Commons Attribution-NonCommercial 4.0 International
              License
            </a>
            .
          </Trans>
        </License>

        <div>
          <a target="_blank" rel="noreferrer" href="https://zebrasunite.coop/">
            <img
              alt={
                <Trans i18nkey="layouts.footerZebraAlt">
                  Zebra's Unite Member
                </Trans>
              }
              height={45}
              width={90}
              src="/svg/ZebrasCoOp-Member-RGB-FullColor.svg"
            />
          </a>
        </div>

        <SocialIconContainer>
          <SocialIcon target="_blank" href="https://blog.surfacedata.org/">
            <ImBlog size={16} />
          </SocialIcon>

          <SocialIcon target="_blank" href="https://github.com/SurfaceData/">
            <ImGithub size={16} />
          </SocialIcon>

          <SocialIcon target="_blank" href="https://twitter.com/SurfaceData">
            <ImTwitter size={16} />
          </SocialIcon>

          <SocialIcon target="_blank" href={process.env.DISCORD_URL}>
            <FaDiscord size={16} />
          </SocialIcon>
        </SocialIconContainer>
      </Footer>
    </Container>
  )
}

export default StewardLayout
