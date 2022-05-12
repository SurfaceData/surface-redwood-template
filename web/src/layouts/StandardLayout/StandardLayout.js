import { Link, routes } from '@redwoodjs/router';
import { Container, Header, Content, Footer } from 'rsuite';

import Navigation from 'src/components/Navigation'

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
        license stuff goes here
      </Footer>
    </Container>
  )
}

export default StandardLayout
