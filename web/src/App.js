import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme as baseTheme,
} from '@chakra-ui/react'
import * as components from './theme/components'
import * as foundations from './theme/foundations'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import './i18n'

const extendedTheme = extendTheme({
  ...foundations,
  components: { ...components },
  colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  space: {
    4.5: '1.125rem',
  },
})

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider theme={extendedTheme}>
        <AuthProvider type="dbAuth">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
