import { Private, Router, Route, Set } from '@redwoodjs/router'

import StandardLayout from 'src/layouts/StandardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/signin" page={SigninPage} name="signin" />
      <Route path="/signup" page={SignupPage} name="signup" />
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
