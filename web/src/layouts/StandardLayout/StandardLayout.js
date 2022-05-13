import { Link, routes } from '@redwoodjs/router';
import { ImBlog, ImGithub, ImTwitter } from 'react-icons/im';
import { FaDiscord } from 'react-icons/fa';
import { Container, Header, Content, Footer as BaseFooter } from 'rsuite';
import styled from 'styled-components';

import Navigation from 'src/components/Navigation'

const Footer = styled(BaseFooter)`
  align-items: center;
  border-top: 1px solid #ccc;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 8px;
`;

const License = styled.div`
  width: 400px;
`;

const SocialIconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

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
`;


const StandardLayout = ({ children }) => {
  return (
    <Container className="flex flex-col h-screen justify-between">
      <Header>
        <Navigation />
      </Header>
      <Content className="mb-auto h-10 p-4">
        {children}
      </Content>
      <Footer className="p-4">
        <License>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/">
            <img
              alt="Creative Commons License"
              height={31}
              width={88}
              src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
          </a>
          <br />
          This work is licensed under a {' '}
          <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
            Creative Commons Attribution-NonCommercial 4.0 International License
          </a>.
        </License>

        <div>
          <a target="_blank" rel="noreferrer" href="https://zebrasunite.coop/">
            <img
              alt="Zebra's Unite Member"
              height={45}
              width={90}
              src="/svg/ZebrasCoOp-Member-RGB-FullColor.svg" />
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

export default StandardLayout
