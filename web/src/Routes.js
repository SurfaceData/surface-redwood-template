import { Private, Router, Route, Set } from '@redwoodjs/router'

import AuthLayout from 'src/layouts/AuthLayout'
import StandardLayout from 'src/layouts/StandardLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin-manage-users" page={AdminManageUsersPage} name="adminManageUsers" />
      <Route path="/profile-account-settings" page={ProfileAccountSettingsPage} name="profileAccountSettings" />
      <Set wrap={AuthLayout}>
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/signup" page={SignupPage} name="signup" />
      </Set>
      <Private unauthenticated="home">
        <Set wrap={StandardLayout}>
          <Route path="/profile/info" page={ProfileInfoPage} name="profileInfo" />
          <Route path="/profile/account-settings" page={ProfileAccountSettingsPage} name="profileAccountSettings" />
        </Set>
      </Private>
      <Private unauthenticated="home" roles="admin">
        <Set wrap={StandardLayout}>
          <Route path="/admin/manage-users" page={AdminManageUsersPage} name="adminManageUsers" />
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
