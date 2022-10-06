import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import * as theme from 'config/chakra.config'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import 'rsuite/dist/rsuite.min.css'
import './index.css'
import './i18n'

const extendedTheme = extendTheme(theme)

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider theme={extendedTheme}>
        <AuthProvider client={supabaseClient} type="supabase">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
