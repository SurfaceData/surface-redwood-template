import { useTranslation } from 'react-i18next'
import { Link, routes } from '@redwoodjs/router';
import { Container, FlexboxGrid, Header, Navbar, Content, Footer } from 'rsuite';

type AuthLayoutProps = {
  children?: React.ReactNode
}

const RedwoodLink = React.forwardRef((props) => {
  return <Link {...props} />
})

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { t } = useTranslation()
  return (
    <Container className="flex flex-col h-screen justify-between">
      <Header>
        <Navbar>
          <Navbar.Brand as={RedwoodLink} to={routes.home()}>
            {t('Navigation.brand')}
          </Navbar.Brand>
        </Navbar>
      </Header>
      <Content className="mb-auto h-10 p-4">
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={12}>
            {children}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      <Footer>
      </Footer>
    </Container>
  );
}

export default AuthLayout
