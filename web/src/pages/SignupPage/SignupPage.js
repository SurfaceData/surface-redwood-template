import { useTranslation } from 'react-i18next'
import { Form, TextField, Label, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes, navigate } from '@redwoodjs/router'
import { Panel } from 'rsuite'

const SignupPage = () => {
  const { t } = useTranslation()
  const { client } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = async (data) => {
    setError(null)
    try {
      const response = await client.auth.signUp({
        email: data.email,
        password: data.password,
      })
      if (response?.error?.message) {
        setError(response.error.message)
      } else {
        navigate(routes.profileInfo())
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <Panel header={<h3>Sign up</h3>} bordered>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <Label
          name="email"
          className="block text-xs font-semibold text-gray-500"
        >
          {t('SigninPage.email')}
        </Label>
        <TextField
          name="email"
          className="block w-full p-1 border rounded text-sm"
          placeholder="email"
        />

        <Label
          name="password"
          className="block text-xs font-semibold text-gray-500"
        >
          {t('SigninPage.password')}
        </Label>
        <PasswordField name="password" placeholder="password" />
        <Submit className="block mt-4 bg-blue-500 text-white text-xs font-semibold rounded px-2 py-2">
          {t('SigninPage.signUp')}
        </Submit>
      </Form>
      <div>
        {t('SignupPage.registered')} <Link to={routes.signin()}>{t('SignupPage.login')}</Link>
      </div>
    </Panel>
  )
}

export default SignupPage
