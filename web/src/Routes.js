import { Private, Router, Route, Set } from '@redwoodjs/router'

import AuthLayout from 'src/layouts/AuthLayout'
import StandardLayout from 'src/layouts/StandardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AuthLayout}>
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/signup" page={SignupPage} name="signup" />
      </Set>
      <Private unauthenticated="home">
        <Set wrap={StandardLayout}>
          <Route path="/profile/info" page={ProfileInfoPage} name="profileInfo" />
        </Set>
      </Private>
      <Set wrap={StandardLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
